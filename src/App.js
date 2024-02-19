import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/header/Header.js'
import Banner from './componentes/banner/Banner.js'
import Carrossel from './componentes/carrossel/Carrossel.js'
import Footer from './componentes/footer/Footer.js'



function App() {
  return (
    <div className="App">
      {/* ---------------------------  HEADER DO SITE  --------------------------- */}
      <Header />
      {/* ---------------------------  BANNER DO SITE  --------------------------- */}
      <Banner />
      {/* ---------------------------  CARROSSEL DO SITE  ----------------------------- */}
      <Carrossel />
      {/* ---------------------------  FOOTER DO SITE  ----------------------------- */}
      <Footer />
    </div>
  );
}

export default App;
