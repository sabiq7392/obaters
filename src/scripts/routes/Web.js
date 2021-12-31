// import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import MainPage from "../pages/MainPage";
import Routes from "./routes";

export default class Web {
  // install url dan halaman
  static render() {
    Routes.render('', () => MainPage.render());
    Routes.render('#product', () => ProductPage.render());
  }
}