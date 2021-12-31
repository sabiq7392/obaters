import 'regenerator-runtime'; 
import './Root';
import Web from'./routes/web';

// ketika idle 
window.onload =  () => Web.render();

// ketika url berubah
window.onhashchange = () => Web.render();
