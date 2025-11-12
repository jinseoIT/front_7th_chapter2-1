import Component from "@/core/Component";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import Header from "../components/Header";
// import Cart from "../components/Cart";

class HomePage extends Component {
  template() {
    return `
    <header class="header-container"></header>
    <section class="product_list"></section>
    <section class="cart-container"></section>
    ${Footer()}
    `;
  }
  mounted() {
    const $header = document.querySelector(".header-container");
    const $productList = document.querySelector(".product_list");
    // const $cart = document.querySelector(".cart-container");
    new Header($header);
    new ProductList($productList);
    // new Cart($cart);
  }
}

export default HomePage;
