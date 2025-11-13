import Component from "@/core/Component";

class Toast extends Component {
  template() {
    const { status = "success", text = "축하합니다" } = this.$props || {};

    // status에 따른 스타일 설정
    const statusConfig = {
      success: {
        bgColor: "bg-green-600",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`,
      },
      info: {
        bgColor: "bg-blue-600",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
      },
      error: {
        bgColor: "bg-red-600",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`,
      },
    };

    const config = statusConfig[status] || statusConfig.success;

    // text가 없으면 렌더링하지 않음
    if (!text) {
      return "";
    }

    return `
      <div class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 toast-message">
        <div class="${config.bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm animate-slide-down">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${config.icon}
            </svg>
          </div>
          <p class="text-sm font-medium">${text}</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  // updated() {
  //   // props가 변경되어 재렌더링된 후, text가 있으면 표시
  //   const { text } = this.$props || {};
  //   if (text) {
  //     this.show();
  //   } else {
  //     this.hide();
  //   }
  // }

  setEvent() {
    // 닫기 버튼 클릭
    this.addEvent("click", "#toast-close-btn", () => {
      this.hide();
    });
  }

  /**
   * Toast 숨기기
   */
  hide() {
    const $toast = this.$target.querySelector(".toast-message");
    if ($toast) {
      $toast.style.display = "none";
    }
  }

  // /**
  //  * Toast 표시
  //  */
  // show() {
  //   const $toast = this.$target.querySelector(".toast-message");
  //   if ($toast) {
  //     $toast.style.display = "block";
  //   }
  // }
}

export default Toast;
