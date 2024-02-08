import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/header/Header.js'
import Banner from './componentes/banner/Banner.js'



function App() {
  return (
    <div className="App">
      {/* ---------------------------  HEADER DO SITE  --------------------------- */}
      <Header />
      {/* ---------------------------  BANNER DO SITE  --------------------------- */}
      <Banner />
      {/* ---------------------------  BODY DO SITE  ----------------------------- */}


    </div>
  );
}

export default App;
