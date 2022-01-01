import Ulasan from "../database/Ulasan";

export default class ProductPage {
  static async render() {   
    const mainContainer = document.querySelector('#mainContainer');
    mainContainer.innerHTML = await this._template();
    this._ulasan();
    this._stars();
  }

  static async _template() {
    return `
      <div id="productPage" class="container d-grid gap-4">
        <div class="row">
          <div class="col-md-12 col-lg-5">
            <div class="image-container">
              <img 
                src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=350" 
              />
              <preview-slider></preview-slider>
            </div>
          </div>
          <div class="col-md-12 col-lg-7">
            <div div class="description d-grid">
              <h1 class="fs-3 fw-bold m-0">Lorem Ipsum Dolor Amet</h1>
              <p class="m-0">Terjual 1.153 <i class="bi bi-star-fill"></i></p>
              <p class="price m-0 fs-1 fw-bolder">Rp. 20.000</p>
              <section class="mt-3">
                <h2 class="fs-5 fw-bold text-success m-0">Detail</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                  anim id est laborum
                </p>
              </section>
            </div>
          </div>
        </div>
        <article id="ulasan" class="d-grid gap-2">
          <h2 class="fs-4 m-0 fw-bold">Ulasan (${Ulasan.length})</h2>
        </article>
      </div>
    `;
  }

  static _ulasan() {
    const ulasan = document.querySelector('#ulasan');
    Ulasan.forEach((data) => {
      const { username, image, comment } = data;
      ulasan.innerHTML += `
        <section class="user-ulasan d-flex gap-3 p-4 bg-light rounded shadow-sm">
          <div>
            <img src="${image}" />
          </div>
          <div>
            <h3 class="text-success">${username}</h3>
            <div class="stars d-flex gap-1 text-warning"></div>
            <p>${comment}</p>
          </div>
        </section>
      `;
    });
  }

  static _stars() {
    const stars = document.getElementsByClassName('stars');
    Ulasan.forEach((data, index) => {
      for (let i = 0; i < data.rate; i++) {
        stars[index].innerHTML += `<i class="bi bi-star-fill"></i>`;
      }
    });
  }
}
