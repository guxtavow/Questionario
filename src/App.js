import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/header/Header.js'
import Banner from './componentes/banner/Banner.js'
import Carrossel from './componentes/carrossel/Carrossel.js';



function App() {
  return (
    <div className="App">
      {/* ---------------------------  HEADER DO SITE  --------------------------- */}
      <Header />
      {/* ---------------------------  BANNER DO SITE  --------------------------- */}
      <Banner />
      {/* ---------------------------  CARROSSEL DO SITE  ----------------------------- */}
      <Carrossel />

    </div>
  );
}

export default App;
