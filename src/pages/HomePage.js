import Component from "@/core/Component";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartModal from "@/components/CartModal";
import { cartStore } from "@/core/store";
import Toast from "../components/Toast";

class HomePage extends Component {
  template() {
    return `
    <header class="header-container"></header>
    <section class="product_list"></section>
    <section class="cart-container"></section>
    <section class="toast-container"></section>
    ${Footer()}
    `;
  }

  setup() {
    // cartStore 구독하여 모달 상태 관리
    this.unsubscribe = cartStore.subscribe((newState) => {
      this.updateCartModal(newState.isOpen);
    });

    // 장바구니 버튼 클릭 이벤트 관찰 (observe 패턴)
    this.observeCartButtonClick();
  }

  /**
   * 장바구니 버튼 클릭 이벤트 관찰 (observe 패턴)
   */
  observeCartButtonClick() {
    // 장바구니 추가 이벤트 리스너
    this.cartButtonClickHandler = () => {
      this.showToast("success", "장바구니에 추가되었습니다");
    };

    // 장바구니 삭제 이벤트 리스너
    this.cartItemRemovedHandler = () => {
      this.showToast("info", "선택된 상품들이 삭제되었습니다");
    };

    // 전역 이벤트 리스너로 등록
    document.addEventListener("cart:item-added", this.cartButtonClickHandler);
    document.addEventListener("cart:item-removed", this.cartItemRemovedHandler);
  }

  mounted() {
    const $header = this.$target.querySelector(".header-container");
    const $productList = this.$target.querySelector(".product_list");
    const $cart = this.$target.querySelector(".cart-container");
    const $toast = this.$target.querySelector(".toast-container");

    if ($header) {
      const headerComponent = new Header($header);
      this.addChildComponent(headerComponent);
    }

    if ($productList) {
      const productListComponent = new ProductList($productList);
      this.addChildComponent(productListComponent);
    }

    if ($cart) {
      const cartComponent = new CartModal($cart);
      this.addChildComponent(cartComponent);
      // 초기 모달 상태 설정
      this.updateCartModal(cartStore.getState().isOpen);
    }

    if ($toast) {
      const toastComponent = new Toast($toast, {
        status: null,
        text: "",
      });
      this.addChildComponent(toastComponent);
      this.toastComponent = toastComponent;
    }
  }

  /**
   * 장바구니 모달 표시/숨김 업데이트
   */
  updateCartModal(isOpen) {
    const $cartModal = this.$target.querySelector(".cart-modal");
    if ($cartModal) {
      $cartModal.style.display = isOpen ? "block" : "none";
    }
  }

  /**
   * Toast 메시지 표시
   * @param {string} status - 'success', 'info', 'error'
   * @param {string} text - 표시할 메시지
   */
  showToast(status, text) {
    if (this.toastComponent) {
      this.toastComponent.$props = {
        status,
        text,
      };
      this.toastComponent.render();

      // Toast 표시
      const $toast = this.toastComponent.$target.querySelector(".toast-message");
      if ($toast) {
        $toast.style.display = "block";
      }

      // 3초 후 자동으로 숨기기
      if (this.toastTimer) {
        clearTimeout(this.toastTimer);
      }
      this.toastTimer = setTimeout(() => {
        this.hideToast();
      }, 3000);
    }
  }

  /**
   * Toast 메시지 숨기기
   */
  hideToast() {
    if (this.toastComponent && this.toastComponent.hide) {
      this.toastComponent.hide();
    }
  }

  unmount() {
    // Toast 타이머 정리
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    // cartStore 구독 해제
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    // 장바구니 버튼 클릭 이벤트 리스너 해제
    if (this.cartButtonClickHandler) {
      document.removeEventListener("cart:item-added", this.cartButtonClickHandler);
    }
    if (this.cartItemRemovedHandler) {
      document.removeEventListener("cart:item-removed", this.cartItemRemovedHandler);
    }
    // 부모의 unmount 호출
    super.unmount();
  }
}

export default HomePage;
