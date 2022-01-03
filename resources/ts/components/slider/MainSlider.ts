import Slider from './Slider';

class MainSlider extends Slider {
  protected elements: string;

  constructor(elements: string) {
    super();
    this.elements = elements;
  }

  public render(): void {
    this.general(this.elements);
  }
}

export default MainSlider; 
