import 'regenerator-runtime'; 
import './Root';
import Web from'./routes/web';
import '../public/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ('bootstrap/dist/css/bootstrap.min.css');
import ('bootstrap/dist/js/bootstrap.bundle');
import ('./components/Components');

// ketika idle 
window.onload =  () => Web.render();

// ketika url berubah
window.onhashchange = () => Web.render();
