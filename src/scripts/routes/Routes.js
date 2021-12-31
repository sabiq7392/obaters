export default class Routes {
  // untuk memuat halaman
  static render(url, page) {
    if (this._url() === url) {
      return page();
    }
  }

  // untuk mendapatkan url
  static _url() {
    return location.hash;
  }
}
