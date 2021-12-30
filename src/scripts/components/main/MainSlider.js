import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

class MainSlider extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
    this._splideSlider();
  }

  _splideSlider() {
    new Splide('.splide').mount();
  }

  _template() {
    this.innerHTML = `
      <div class="splide">
        <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">Slide 01</li>
              <li class="splide__slide">Slide 02</li>
              <li class="splide__slide">Slide 03</li>
            </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('main-slider', MainSlider);
