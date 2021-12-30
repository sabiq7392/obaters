export default class MainPage {
  static render() {
    return this._template();
  }

  static _template() {
    return `
      <main-slider class="container" id="mainSlider"></main-slider>
      <product-slider 
        img="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=230&w=150" 
        title="Multivitamin"
      >
      </product-slider>
      <product-slider 
        img="https://images.pexels.com/photos/3683100/pexels-photo-3683100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=230&w=150"
        title="Obat-Obatan Herbal"
      >
      </product-slider>
    `;
  }
}