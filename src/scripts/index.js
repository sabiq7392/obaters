import 'regenerator-runtime'; 
import Web from'./routes/web';
import '../public/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ('bootstrap/dist/css/bootstrap.min.css');
import ('bootstrap/dist/js/bootstrap.bundle');
import ('./components/Components');

// idle
window.addEventListener('load', () => {
  Web.render();
});

// when hash change
window.addEventListener('hashchange', () => {
  Web.render();
});