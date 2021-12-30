import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

class ProductSlider  extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this._render();
  }

  _render() {
    this._template();
    this._splideSlider();
    this._removeComponents('.splide__pagination');
  }

  _splideSlider() { 
    const productSliders = document.querySelectorAll('.product-slider');

    productSliders.forEach((productsSlider) => {
      new Splide(productsSlider, {
        type: 'loop',
        gap: 10,
        focus: 'center',
        autoWidth: true,
      }).mount();
    });
  }

  _removeComponents(components) {
    document.querySelectorAll(`.product-slider ${components}`)
      .forEach((component) => {
        component.remove();
      });
  }

  _template() {
    const width = 150;
    const height = 230;
    const dpr = 2;
    
    this.innerHTML = `
      <h2 class="fw-bold container">${this.title}</h2>
      <div id="multivitaminSlider" class="splide product-slider">
        <div class="splide__track">
          <ul class="splide__list container">
            <li class="splide__slide">
              <article>
                <img 
                  src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&dpr=${dpr}&h=${height}&w=${width}"
                />
                <h3 class="title">Lorem ipsum dolor amet</h3>
                <p class="price">RP 20.000</p>
              </article>
            </li>
            <li class="splide__slide">
              <article>
                <img 
                  src="https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&dpr=${dpr}&h=${height}&w=${width}"
                />
                <h3 class="title">Lorem ipsum dolor amet</h3>
                <p class="price">RP 20.000</p>
              </article>
            </li>
            <li class="splide__slide">
              <article>
                <img 
                  src="https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg?auto=compress&cs=tinysrgb&dpr=${dpr}&h=${height}&w=${width}"
                />
                <h3 class="title">Lorem ipsum dolor amet</h3>
                <p class="price">RP 20.000</p>
              </article>
            </li>
            <li class="splide__slide">
              <article>
                <img 
                  src="https://images.pexels.com/photos/3259596/pexels-photo-3259596.jpeg?auto=compress&cs=tinysrgb&dpr=${dpr}&h=${height}&w=${width}"
                />
                <h3 class="title">Lorem ipsum dolor amet</h3>
                <p class="price">RP 20.000</p>
              </article>
            </li>
            <li class="splide__slide">
              <article>
                <img 
                  src="https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&dpr=${dpr}&h=${height}&w=${width}"
                />
                <h3 class="title">Lorem ipsum dolor amet</h3>
                <p class="price">RP 20.000</p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('product-slider', ProductSlider);
