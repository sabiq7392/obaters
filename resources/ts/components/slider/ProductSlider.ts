import Slider from "./Slider";

class ProductSlider extends Slider {
  protected elements: string;

  constructor(elements: string) {
    super();
    this.elements = elements;
  }

  public render(): void {
    this.autoWidth(this.elements, {
      type: 'loop',
      gap: 10,
      focus: 'center',
      autoWidth: true,
    });

    this.removeComponents('.product-slider .splide__pagination');
  }
}

export default ProductSlider;
