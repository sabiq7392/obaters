export default class ProductPage {
  static render() {   
    return this._template();
  }

  static _template() {
    return `
      <div class="d-flex">
        <div class="container">
          <img 
            src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=350" 
          />
          <preview-slider 
            img="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=230&w=150" 
          >
          </preview-slider>
        </div>
      </div>
    `;
  }
}