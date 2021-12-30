import SplideConfig from "./SplideConfig";

class PreviewSlider extends HTMLElement {
  connectedCallback() {
    this.img = this.getAttribute('img') || null;
    this._render();
  }

  _render() {
    this._template();
    SplideConfig.fixedWidth();
  }

  _template() {
    this.innerHTML = `
      <div class="splide preview-slider">
        <div class="splide__track">
          <ul class="splide__list container">
            <li class="splide__slide">
              <slide-component
                src="${this.img}"
              >
              </slide-component>
            </li>
            <li class="splide__slide">
              <slide-component
                src="${this.img}"
              >
              </slide-component>
            </li>
            <li class="splide__slide">
              <slide-component
                src="${this.img}"
              >
              </slide-component>
            </li>
            <li class="splide__slide">
              <slide-component
                src="${this.img}"
              >
              </slide-component>
            </li>
            <li class="splide__slide">
              <slide-component
                src="${this.img}"
              >
              </slide-component>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('preview-slider', PreviewSlider);
