// import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import MainPage from "../pages/MainPage";
import Routes from "./routes";

export default class Web {
  // install url dan halaman
  constructor() {
    Routes.render('', () => MainPage.render());
    Routes.render('#product', () => ProductPage.render());
  }
}