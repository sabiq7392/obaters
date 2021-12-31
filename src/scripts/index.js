import 'regenerator-runtime'; 
import './Root';
import Web from'./routes/web';

// ketika idle 
window.onload =  () => new Web();

// ketika url berubah
window.onhashchange = () => new Web();
