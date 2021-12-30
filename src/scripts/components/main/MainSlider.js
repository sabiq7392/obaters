import SplideConfig from './SplideConfig';
import imageFirst from '../../../public/img/main-slider/main-slider-image-1.png';
import imageSecond from '../../../public/img/main-slider/main-slider-image-2.jpg';
import imageThird from '../../../public/img/main-slider/main-slider-image-3.jpg';

class MainSlider extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
    SplideConfig.general('.main-slider-splide');
  }

  _template() {
    this.innerHTML = `
      <div id="mainSliderSplide" class="splide main-slider-splide">
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
