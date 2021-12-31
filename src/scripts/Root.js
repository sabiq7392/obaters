import '../public/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ('bootstrap/dist/css/bootstrap.min.css');
import ('bootstrap/dist/js/bootstrap.bundle');
import ('./components/Components');

// Root Website
class Root extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white fixed-top shadow-sm">
		    <app-bar></app-bar>
	    </header>
	    <main id="mainContainer" class="p-5 mt-5 d-grid gap-5"></main>
    `;
  }
}

customElements.define('root-web', Root);
