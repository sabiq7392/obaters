import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import Routes from "./routes";

export default class Web {
  // install url dan halaman
  static render() {
    new Routes('', MainPage.render());
    new Routes('#product', ProductPage.render());
  }
}