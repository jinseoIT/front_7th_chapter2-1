import Component from "@/core/Component";
import SearchFilter from "./SearchFilter";
import ProductCard from "./ProductCard";
import { navigateTo } from "../router";
import { getCategories, getProducts } from "../api/productApi";
import { defaultProductState } from "../store/prodcutStore";
import { HomeLoading } from "./loading/HomeLoading";

class ProductList extends Component {
  getInitState() {
    const initState = { ...defaultProductState };
    const urlParams = new URLSearchParams(window.location.search);

    const search = urlParams.get("search") || "";
    const category1 = urlParams.get("category1") || "";
    const category2 = urlParams.get("category2") || "";
    const sort = urlParams.get("sort") || "price_asc";
    const limit = urlParams.get("limit") || 20;
    const page = urlParams.get("search ") || 1;

    const filters = {
      search,
      category1,
      category2,
      sort,
    };
    initState.pagination.limit = limit;
    initState.pagination.page = page;
    return { ...initState, filters };
  }
  template() {
    console.log("state ::", this.state);
    console.log("stateIsLoding ::", this.state.isLoading);
    const { pagination } = this.state;
    return `
      <main class="max-w-md mx-auto px-4 py-4">
      ${
        this.state.isLoading
          ? HomeLoading
          : `
        <section class="search_filter"></section>
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${pagination?.total || 0}개</span>의 상품
            </div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            </div>
            
            <!-- 무한 스크롤 감시 대상 -->
            <div id="observer-target" class="h-10"></div>
            
            ${
              !this.state.pagination.hasNext
                ? `<div class="text-center py-4 text-sm text-gray-500" id="end-message" style="display: none;">
              모든 상품을 확인했습니다
            </div>
          </div>`
                : ""
            }
        </div>
        `
      }
        
      </main>
  `;
  }
  didMount() {
    this.state = { ...defaultProductState };
  }

  setup() {
    this.observer = null; // Intersection Observer 인스턴스
    this.asyncFetchData();
  }

  async asyncFetchData() {
    const { pagination, filters } = this.getInitState();
    const searchParams = {
      page: pagination.page, // 새로운 검색 시 첫 페이지부터
      limit: pagination.limit,
      search: filters.search,
      category1: filters.category1,
      category2: filters.category2,
      sort: filters.sort,
    };
    const [productsRes, categories] = await Promise.all([getProducts(searchParams), getCategories()]);

    this.setState({
      isLoading: false,
      pagination: productsRes.pagination,
      products: productsRes.products, // 새로운 검색 시 기존 상품 목록 교체
      categories,
      filters,
      searchParams,
    });

    // 초기 데이터 로드 후 Observer 설정 및 종료 메시지 업데이트
    this.setupObserver();
  }

  mountProductCards() {
    const $productList = this.$target.querySelector("#products-grid");
    if (!$productList) return;

    // 기존 ProductCard 제거 (render()로 innerHTML이 교체되지만, 자식 컴포넌트는 수동으로 정리)
    const existingCards = this.$childComponents.filter((component) => component instanceof ProductCard);
    existingCards.forEach((card) => {
      if (card.unmount) card.unmount();
    });
    this.$childComponents = this.$childComponents.filter((component) => !(component instanceof ProductCard));

    // 새로운 ProductCard 생성
    this.state?.products?.forEach((product) => {
      const $product = document.createElement("article");
      $productList.appendChild($product);
      const productCardComponent = new ProductCard($product, { product });
      this.addChildComponent(productCardComponent);
    });
  }

  updated() {
    // render 후 자식 컴포넌트 재마운트
    const $searchFilter = this.$target.querySelector(".search_filter");
    if ($searchFilter && !$searchFilter.hasChildNodes()) {
      const searchFilterComponent = new SearchFilter($searchFilter, this.state);
      this.addChildComponent(searchFilterComponent);
    }

    // ProductCard 재마운트
    this.mountProductCards();

    // Intersection Observer 재등록
    this.setupObserver();
  }

  setEvent() {
    this.addEvent("click", "#products-grid", (e) => {
      const el = e.target.closest("[data-product-id]");
      if (!el) return;

      const productId = el.dataset.productId;
      this.goProductPage(productId);
    });

    this.addEvent("click", "#filter_category1", (e) => {
      const el = e.target.closest("[data-category1]");
      if (!el) return;

      const category1 = el.dataset.category1;
      this.handlesearch({ category1 });
    });

    this.addEvent("click", "#filter_category2", (e) => {
      const el = e.target.closest("[data-category2]");
      if (!el) return;

      const category2 = el.dataset.category2;
      this.handlesearch({ category2 });
    });

    this.addEvent("click", "#category_container", (e) => {
      const el = e.target.closest("[data-breadcrumb]");
      if (!el) return;

      const category = el.dataset.breadcrumb;
      if (category === "reset") {
        this.handlesearch({ category1: "", category2: "" });
        return;
      }
      this.handlesearch({ category1: category, category2: "" });
    });

    this.addEvent("change", "#limit-select", (e) => {
      const el = e.target.closest("#limit-select") || e.target;
      if (!el || el.id !== "limit-select") return;
      this.handlesearch({ limit: Number(el.value) });
    });

    this.addEvent("change", "#sort-select", (e) => {
      const el = e.target.closest("#sort-select") || e.target;
      if (!el) return;
      this.handlesearch({ sort: el.value });
    });

    this.addEvent("keydown", "#search-input", (e) => {
      if (e.key !== "Enter") return;
      const el = e.target.closest("#search-input") || e.target;
      if (!el) return;
      const q = el.value;
      this.handlesearch({ search: q });
    });
  }

  async handlesearch(params) {
    // 새로운 검색/필터 시 페이지 리셋
    const resetParams = { ...params, page: 1 };
    this.getProducts(resetParams, true); // true = 교체 모드
  }

  async getProducts(params, replace = false) {
    const searchParams = { ...this.state.searchParams, ...params };

    const response = await getProducts(searchParams);

    // replace가 true면 교체, false면 추가 (무한 스크롤)
    const products = replace ? response.products : [...(this.state.products || []), ...response.products];

    const newState = {
      ...response,
      products,
      searchParams,
    };
    this.setState(newState);
    this.syncToURL();
  }

  // 다음 페이지 로드 (무한 스크롤)
  async loadNextPage() {
    // 이미 로딩 중이거나 더 이상 데이터가 없으면 중단
    if (this.state.isLoadingMore || !this.state.pagination?.hasNext) {
      return;
    }

    this.setState({ isLoadingMore: true });

    const nextPage = (this.state.pagination?.page || 1) + 1;
    await this.getProducts({ page: nextPage }, false); // false = 추가 모드

    this.setState({ isLoadingMore: false });
  }

  // Intersection Observer 설정
  setupObserver() {
    // 기존 Observer 해제
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    // 더 이상 데이터가 없으면 Observer 등록하지 않음
    if (!this.state.pagination?.hasNext) {
      return;
    }

    const target = this.$target.querySelector("#observer-target");
    if (!target) return;

    // Intersection Observer 생성
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 화면에 보이면 다음 페이지 로드
            this.loadNextPage();
          }
        });
      },
      {
        root: null, // 뷰포트 기준
        rootMargin: "0px",
        threshold: 0.3, // 30% 보이면 트리거
      },
    );

    // 감시 시작
    this.observer.observe(target);
  }

  syncToURL() {
    const params = new URLSearchParams();
    const { filters, pagination } = this.state;
    if (filters.search) params.set("search", filters.search);
    if (filters.category1) params.set("category1", filters.category1);
    if (filters.category2) params.set("category2", filters.category2);
    if (filters.sort !== "price_asc") params.set("sort", filters.sort);
    if (pagination.page !== 1) params.set("page", pagination.page.toString());
    if (pagination.limit !== 20) params.set("limit", pagination.limit.toString());

    const newURL = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.pushState({}, "", newURL);
  }

  goProductPage(id) {
    navigateTo(`/products/${id}`, { productId: id });
  }

  unmount() {
    // Intersection Observer 정리
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    // 부모의 unmount 호출
    super.unmount();
  }
}

export default ProductList;
