class Component {
  $target;
  $props;
  $state = {};

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {} // 컴포넌트 state 설정

  mounted() {} // 컴포넌트가 마운트 되었을 때

  template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template(); // UI 렌더링
    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    // 이벤트 등록 추상화
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      return callback(event);
    });
  }
}

export default Component;
