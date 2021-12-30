import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import imageFirst from '../../../public/img/main-slider/main-slider-image-1.png';
import imageSecond from '../../../public/img/main-slider/main-slider-image-2.jpg';
import imageThird from '../../../public/img/main-slider/main-slider-image-3.jpg';

class MainSlider extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
    this._splideSlider();
  }

  _splideSlider() {
    new Splide('#mainSliderSplide').mount();
  }

  _template() {
    this.innerHTML = `
      <div id="mainSliderSplide" class="splide">
        <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img 
                  class="w-100 img-fluid"
                  src="${imageFirst}" 
                  alt="obat 1" 
                />
              </li>
              <li class="splide__slide">
                <img 
                  class="w-100 img-fluid"
                  src="${imageSecond}" 
                  alt="obat 2" 
                />
              </li>
              <li class="splide__slide">
                <img 
                  class="w-100 img-fluid"
                  src="${imageThird}" 
                  alt="obat 3" 
                />
              </li>
            </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('main-slider', MainSlider);
