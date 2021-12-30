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

  static fixedWidth(elements, { fixedWidth = '10rem', fixedHeight = '6rem', gap = '1rem' } = {}) {
    document
      .querySelectorAll(elements)
      .forEach((element) => {
        new Splide(element, { fixedWidth, fixedHeight, gap });
      });
  }
}