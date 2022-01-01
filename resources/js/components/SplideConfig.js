import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default class SplideConfig {
  static general(elements) {
    document
      .querySelectorAll(elements)
      .forEach((element) => {
        new Splide(element).mount();
      });
  }

  static autoWidth(elements, { type = 'loop', gap = 10, focus = 'center', autoWidth = true } = {}) {
    document
      .querySelectorAll(elements)
      .forEach((element) => {
        new Splide(element, { type, gap, focus, autoWidth }).mount();
      });
  }

  static multipleSlides(elements) {
    document
      .querySelectorAll(elements)
      .forEach((element) => {
        new Splide(element, {   
          type: 'loop',
          gap: 10,
          fixedWidth: 100,
        }).mount();
      });
  }
}