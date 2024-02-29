import './Carrossel.css'
import React, { useEffect ,useState } from "react";
import Fundo from './fundo.jpg'
import Fundo1 from './fundo1.jpg'
import { CSSTransition } from 'react-transition-group' //IMPORTO UMA BIBLIOTECA DO CSS FOCADA EM TRANSIÇÃO

export default function Carrossel(){

    /* ---------------------------- efeito fade-in ---------------------------- */
    const [mostrar4,mostrarCarousel] = useState(false) 

    useEffect(() =>{
        const timer4 = setTimeout(() => mostrarCarousel(true),100)
        const tempos1 = timer4
        return () => clearTimeout(tempos1)
    },[])
    /* ---------------------------- //efeito fade-in ---------------------------- */
    

    const [expandido, setExpandido] = useState(Array(4).fill(false).map((_,index)=>index=== 1 || 2)); //defino as constantes e o estado da div
    const [activeIndex, setActiveIndex] = useState(0); // Adiciona estado para controlar o índice ativo dos indicadores
    


    const Clique = (index) => { //RECEBE UM PARAMETRO INDEX
        const newExpandido = [...expandido] //CRIA UMA COPIA DO ESTADO EXPANDIDO
        newExpandido[index] = !newExpandido[index] //INVERTE O VALOR DO INDICE
        setExpandido(newExpandido) //ATUALIZA O ESTADO EXPANDIDO RENDERIZANDO O COMPONENTE
        setActiveIndex(index) // ATUALIZO O INDICE ATIVO (ISSO PARA OS INDICADORES)
    };
    const img = [
        `url(${Fundo})`, //ADICIONO O COMANDO CSS COM A IMAGEM COM A INDEX DE CADA UM
        `url(${Fundo1})`
    ];

    return(
        <>
        {/* efeito FADE IN */}
        <CSSTransition in={mostrar4} timeout ={10000} classNames = "fade3"> 
            <div className='container-fluid3' id='questionarios'>

                <div className={`componente1 ${expandido[1] ? 'expandido' : ''} ${activeIndex === 1 ? 'active' : ''}`} onClick={() => Clique(1)} style={{backgroundImage:img[0], backgroundSize:'cover', backgroundPosition:'center'}}>
                    {expandido[1] ?(
                        <>
                        <h1><b>FATURAMENTO</b></h1>
                        <p id='textoCarousel'> O questionario de Resultados tem a funcionalidade de nos ajudar a entender melhor sua necessidade.
                        Sua participação é fundamental para aprimorarmos nossos serviços e te entendermos melhor. Compartilhe conosco sua valiosa experiência com o Sebrae. 
                        Seus insights e comentários são preciosos e nos ajudarão a continuar aprimorando nossa oferta para atender às suas expectativas e às de todos os nossos clientes. 
                        Estamos ansiosos para ouvir suas opiniões e contribuições.<br /><br />
                        <b>Responda a pesquisa clicando no botão abaixo:</b>
                        </p>
                        <br />
                        <a href="https://pesquisa.sebraesp.com.br/" target='_blank' rel='noopener noreferrer'> {/* BOTÃO PARA O LINK DA PAGINA */}
                        <button id='link'><b>RESPONDER</b></button>
                        </a>
                        </>
                    ):(
                        <>
                        <h5 id='TituloPadrao'><b>FATURAMENTO</b></h5>
                        <p id='TextoPadrao'>Questionario de Resultados do Sebrae</p>
                        </>
                    )}
                </div>

                <div className={`componente1 ${expandido[2] ? 'expandido' : ''} ${activeIndex === 2 ? 'active' : ''}`} onClick={() => Clique(2)} style={{backgroundImage:img[1], backgroundSize:'cover', backgroundPosition:'center'}}>
                    {expandido[2] ?(
                        <>
                        <h1><b>SATISFAÇÃO <br></br> COM A CONSULTORIA</b></h1>
                        <p id='textoCarousel'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
                        <br /><br />
                        <b>Responda a pesquisa clicando no botão abaixo:</b>
                        </p>
                        <br />
                        <a href="#" target='_blank' rel='noopener noreferrer'> {/* BOTÃO PARA O LINK DA PAGINA */}
                        <button id='link'><b>RESPONDER</b></button>
                        </a>
                        </>
                    ):(
                        <>
                        <h5 id='TituloPadrao'><b>SATISFAÇÃO <br></br> COM A CONSULTORIA</b></h5>
                        <p id='TextoPadrao'>Lorem ipsum dolor sit amet, consectetur</p>
                        </>
                    )}
                </div>
            </div>
    </CSSTransition>

            <br />
            {/* INDICADORES DE CADA DIV */}
            <li onClick={()=> Clique(1)} className={`indicador ${activeIndex === 1 ? 'active' : ''}`}></li>
            <li onClick={()=> Clique(2)} className={`indicador ${activeIndex === 2 ? 'active' : ''}`}></li>
        </>
    );
}
