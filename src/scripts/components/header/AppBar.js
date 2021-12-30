import logo from '../../../public/img/logo.png';

class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this._template();
  }

  _template() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img 
              src="${logo}" 
              alt="logo obaters" 
            />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pilih Kategori
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Multivitamin</a></li>
                  <li><a class="dropdown-item" href="#">Herbal</a></li>
                </ul>
              </li>
              <li class="nav-item ">
                <form class="d-flex w-100 search-section">
                  <input 
                    class="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                  />
                  <button 
                    class="btn" 
                    type="submit"
                    aria-label="cari obat atau barang"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </li>
              <li class="nav-item d-flex gap-2">
                <a class="btn btn-outline-success px-4" href="#masuk">Masuk</a>
                <a class="btn btn-success px-4" href="#daftar">Daftar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
