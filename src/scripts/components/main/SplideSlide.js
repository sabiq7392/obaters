class SplideSlide extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
  }

  _template() {
    this.innerHTML = `
    
    `;
  }
}