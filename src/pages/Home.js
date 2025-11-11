import Component from "@/core/Component";
import Layout from "@/components/Layout";
import ProductList from "@/components/ProductList";

class Home extends Component {
  template() {
    return `
    ${Layout(ProductList)}
    `;
  }
}

export default Home;
