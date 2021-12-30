export default class Routes {
  constructor(url, page) {
    this.url = url;
    this.page = page;

    this.pages();
  }

  pages() {
    if (this._url() === this.url) {
      const mainContainer = document.querySelector('#mainContainer');
      mainContainer.innerHTML = this.page;
    }
  }

  _url() {
    return location.hash;
  }
}
