// Components
import MainSlider from './components/slider/MainSlider';
import ProductSlider from './components/slider/ProductSlider';

// Bootstrap
import 'bootstrap/scss/bootstrap.scss';
require('../js/bootstrap.js');

// Run Components
const App = () => {
  if (document.querySelector('#mainSlider')) {
    new MainSlider('#mainSlider').render();
  }
  
  if (document.querySelectorAll('.product-slider')) {
    new ProductSlider('.product-slider').render();
  }
}

App();


