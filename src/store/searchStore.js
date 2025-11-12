// 검색 및 필터 상태를 전역으로 관리하는 Store
class SearchStore {
  constructor() {
    // 초기 상태
    this.state = {
      search: "",
      category1: "",
      category2: "",
      sort: "price_asc",
      page: 1,
      limit: 20,
    };

    // 구독자 리스트
    this.subscribers = new Set();
  }

  // 상태 가져오기
  getState() {
    return { ...this.state };
  }

  // 상태 변경
  setState(newState) {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...newState };

    // 구독자들에게 변경 알림
    this.notify(prevState, this.state);
  }

  // 특정 필드만 변경
  setSearch(search) {
    this.setState({ search, page: 1 }); // 검색어 변경 시 페이지 리셋
  }

  setCategory1(category1) {
    this.setState({ category1, category2: "", page: 1 }); // 카테고리1 변경 시 카테고리2와 페이지 리셋
  }

  setCategory2(category2) {
    this.setState({ category2, page: 1 }); // 카테고리2 변경 시 페이지 리셋
  }

  setSort(sort) {
    this.setState({ sort, page: 1 }); // 정렬 변경 시 페이지 리셋
  }

  setPage(page) {
    this.setState({ page });
  }

  setLimit(limit) {
    this.setState({ limit, page: 1 }); // 개수 변경 시 페이지 리셋
  }

  // 필터 리셋
  reset() {
    this.setState({
      search: "",
      category1: "",
      category2: "",
      sort: "price_asc",
      page: 1,
      limit: 20,
    });
  }

  // 구독 (상태 변경 시 호출될 콜백 등록)
  subscribe(callback) {
    this.subscribers.add(callback);

    // 구독 해제 함수 반환
    return () => {
      this.subscribers.delete(callback);
    };
  }

  // 구독자들에게 변경 알림
  notify(prevState, nextState) {
    this.subscribers.forEach((callback) => {
      try {
        callback(nextState, prevState);
      } catch (error) {
        console.error("SearchStore subscriber error:", error);
      }
    });
  }

  // URL 파라미터로부터 상태 초기화
  initFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search") || "";
    const category1 = urlParams.get("category1") || "";
    const category2 = urlParams.get("category2") || "";
    const sort = urlParams.get("sort") || "price_asc";
    const page = parseInt(urlParams.get("page") || "1", 10);
    const limit = parseInt(urlParams.get("limit") || "20", 10);

    this.setState({ search, category1, category2, sort, page, limit });
  }

  // 상태를 URL 파라미터로 동기화
  syncToURL() {
    const params = new URLSearchParams();

    if (this.state.search) params.set("search", this.state.search);
    if (this.state.category1) params.set("category1", this.state.category1);
    if (this.state.category2) params.set("category2", this.state.category2);
    if (this.state.sort !== "price_asc") params.set("sort", this.state.sort);
    if (this.state.page !== 1) params.set("page", this.state.page.toString());
    if (this.state.limit !== 20) params.set("limit", this.state.limit.toString());

    const newURL = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`;
    window.history.pushState({}, "", newURL);
  }
}

// 싱글톤 인스턴스 생성 및 export
export const searchStore = new SearchStore();

// 초기화: URL 파라미터로부터 상태 로드
searchStore.initFromURL();
