import SplideConfig from "./SplideConfig";

class PreviewSlider extends HTMLElement {
  connectedCallback() {
    this.img = 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    this._render();
  }

  _render() {
    this._template();
    SplideConfig.multipleSlides('.preview-slider');
  }

  _template() {
    this.innerHTML = `
      <div class="splide preview-slider">
        <div class="splide__track">
          <ul class="splide__list container">
            <li class="splide__slide">
              <img
                src="${this.img}"
              >
            </li>
            <li class="splide__slide">
              <img
                src="${this.img}"
              >
            </li>
            <li class="splide__slide">
              <img
                src="${this.img}"
              >
            </li>
            <li class="splide__slide">
              <img
                src="${this.img}"
              >
            </li>
            <li class="splide__slide">
              <img
                src="${this.img}"
              >
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('preview-slider', PreviewSlider);
