import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default class SplideConfig {
  static general() {
    new Splide('#mainSliderSplide').mount();
  }

  static autoWidth() {
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

  static fixedWidth() {
    const previewSliders = document.querySelectorAll('.preview-slider');
    console.log(previewSliders)
    previewSliders.forEach((previewSlider) => {
      new Splide(previewSlider, {
        fixedWidth : '10rem',
        fixedHeight: '6rem',
        gap        : '1rem',
      });
    });
  }
}