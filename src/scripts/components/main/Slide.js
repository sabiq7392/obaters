class Slide extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this._render();
  }

  _render() {
    this._template();
  }

  _template() {
    this.innerHTML = `
      <article>
        <a href="#product">
          <img src="${this.src}" />
          <div class="p-3">
            <h3 class="title">Lorem ipsum dolor amet</h3>
            <p class="price">RP 20.000</p>
            <p class="city">Depok</p>
          </div>
        </a>
      </article>
    `;
  }
}

customElements.define('slide-component', Slide);
