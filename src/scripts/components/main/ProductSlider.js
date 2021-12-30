import SplideConfig from './SplideConfig';
import './Slide';

class ProductSlider  extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.img = this.getAttribute('img') || null;
    this._render();
  }

  _render() {
    this._template();
    SplideConfig.autoWidth();
    this._removeComponents('.splide__pagination');
  }

  _removeComponents(components) {
    document.querySelectorAll(`.product-slider ${components}`)
      .forEach((component) => {
        component.remove();
      });
  }

  _template() {
    this.innerHTML = `
      <h2 class="fw-bold container">${this.title}</h2>
      <div id="multivitaminSlider" class="splide product-slider">
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

customElements.define('product-slider', ProductSlider);
