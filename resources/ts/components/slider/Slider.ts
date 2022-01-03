import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

interface AutoWidth {
  type: string,
  gap: number,
  focus: string,
  autoWidth: boolean,
}

abstract class Slider {
  protected abstract elements: string;

  public abstract render(): void;

  protected removeComponents(components: string): void {
    document.querySelectorAll(components)
      .forEach((component) => {
        component.remove();
      });
  }

  protected general(elements: string) {
    this.splide(elements);
  }

  protected autoWidth(elements: string, splide: AutoWidth) {
    this.splide(elements, splide);
  }

  private splide(elements: string, splide?: {}) {
    const thisId = elements.includes('#');
    
    if (thisId) {
      const element: any = document.querySelector(elements);
      return new Splide(element, splide).mount();
    } 

    return document
      .querySelectorAll<HTMLDivElement>(elements)
      .forEach((element) => new Splide(element, splide).mount());
  }

    // static multipleSlides(elements) {
  //   document
  //     .querySelectorAll(elements)
  //     .forEach((element) => {
  //       new Splide(element, {   
  //         type: 'loop',
  //         gap: 10,
  //         fixedWidth: 100,
  //       }).mount();
  //     });
  // }
}

export default Slider;