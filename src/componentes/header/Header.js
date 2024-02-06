import LOGO1 from './Logo Sebrae 1.png' /* IMPORTO PNG DA LOGO */
import './Header.css' /* IMPORTO O CSS */


export default function Header(){

const clique = (evento) =>{ //Faço uma função de seleção de variaveis para remover active do item não clicado e ir para o clicado
        const MenuItem = document.querySelectorAll('.nav-item .nav-link')//trago os ids com query
        MenuItem.forEach(item =>{ //for each para passar pelos itens
            item.classList.remove('active') //removo a classe
        })
        evento.target.classList.add('active') //adiciono
}

    return(
        <header> 
            <nav class="navbar navbar-expand-lg bg-body-tertiary"> {/* NAVBAR DO BOOTSTRAP */}
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src={LOGO1} className="Logo1" alt="1logo" width="100" height="50" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                            <a class="nav-link" href="#" onClick = {clique}>SOBRE</a> {/*   chamo a função com o onClick    */}
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" onClick = {clique}>SOCIAIS</a> 
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" onClick = {clique}>FORMULÁRIOS</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active" href="#" onClick = {clique}>ENTRAR</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}