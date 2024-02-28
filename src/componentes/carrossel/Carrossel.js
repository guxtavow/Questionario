import './Carrossel.css'
import React, { useEffect ,useState } from "react";
import Fundo from './fundo.jpg'
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
    

    const [expandido, setExpandido] = useState(Array(4).fill(false).map((_,index)=>index===1)); //defino as constantes e o estado da div
    const [activeIndex, setActiveIndex] = useState(1); // Adiciona estado para controlar o índice ativo dos indicadores
    


    const Clique = (index) => { //RECEBE UM PARAMETRO INDEX
        const newExpandido = [...expandido] //CRIA UMA COPIA DO ESTADO EXPANDIDO
        newExpandido[index] = !newExpandido[index] //INVERTE O VALOR DO INDICE
        setExpandido(newExpandido) //ATUALIZA O ESTADO EXPANDIDO RENDERIZANDO O COMPONENTE
        setActiveIndex(index) // ATUALIZO O INDICE ATIVO (ISSO PARA OS INDICADORES)
    };
    const img = [
        `url(${Fundo})` //ADICIONO O COMANDO CSS COM A IMAGEM
    ];

    return(
        <>
        {/* efeito FADE IN */}
        <CSSTransition in={mostrar4} timeout ={10000} classNames = "fade3"> 
            <div className='container-fluid3' id='questionarios'>
                <div className={`componente1 ${expandido[0] ? 'expandido' : ''} ${activeIndex === 0 ? 'active' : ''}`} onClick={() => Clique(0)}> {/* SE O INDICE 0 FOR CLICADO ACIONAR A FUNÇÃO EXPANDIDO, SE NÃO VOLTAR PARA O PADRÃO (O MESMO SEGUE PARA OS OUTROS ELEMENTOS) */}
                    {expandido[0] ? ( //CASO CLICADO PARA SER EXPANDIDO
                        <>
                        <h1>TESTE</h1>
                        <p id='textoCarousel'> CLICADO </p>
                        </>
                    ):( //CASO NÃO CLICADO
                        <>
                        <h5 id='TituloPadrao'>TESTE</h5>
                        <p id='TextoPadrao'>TESTE CLIQUE AQUI</p>
                        </>
                    )}
                </div>

                <div className={`componente1 ${expandido[1] ? 'expandido' : ''} ${activeIndex === 1 ? 'active' : ''}`} onClick={() => Clique(1)} style={{backgroundImage:img, backgroundSize:'cover', backgroundPosition:'center'}}>
                    {expandido[1] ?(
                        <>
                        <h1>RESULTADOS</h1>
                        <p id='textoCarousel'> O questionario de Resultados tem a funcionalidade de nos ajudar a entender melhor sua necessidade.
                        Sua participação é fundamental para aprimorarmos nossos serviços e te entendermos melhor. Compartilhe conosco sua valiosa experiência com o Sebrae. Seus insights e comentários são preciosos e nos ajudarão a continuar aprimorando nossa oferta para atender às suas expectativas e às de todos os nossos clientes. Estamos ansiosos para ouvir suas opiniões e contribuições.</p>
                        <br />
                        <a href="https://pesquisa.sebraesp.com.br/" target='_blank' rel='noopener noreferrer'> {/* BOTÃO PARA O LINK DA PAGINA */}
                        <button id='link'>ACESSAR</button>
                        </a>
                        </>
                    ):(
                        <>
                        <h5 id='TituloPadrao'>RESULTADOS</h5>
                        <p id='TextoPadrao'>Questionario de Resultados do Sebrae</p>
                        </>
                    )}
                </div>

                <div className={`componente1 ${expandido[2] ? 'expandido' : ''} ${activeIndex === 2 ? 'active' : ''}`} onClick={() => Clique(2)}>
                    {expandido[2] ?(
                        <>
                        <h1>TESTE</h1>
                        <p id='textoCarousel'>CLICADO </p>
                        </>
                    ):(
                        <>
                        <h5 id='TituloPadrao'>TESTE</h5>
                        <p id='TextoPadrao'>TESTE CLIQUE AQUI</p>
                        </>
                    )}
                </div>
                <div className={`componente1 ${expandido[3] ? 'expandido' : ''} ${activeIndex === 3 ? 'active' : ''}`} onClick={() => Clique(3)}> {/* SE O INDICE 0 FOR CLICADO ACIONAR A FUNÇÃO EXPANDIDO, SE NÃO VOLTAR PARA O PADRÃO (O MESMO SEGUE PARA OS OUTROS ELEMENTOS) */}
                    {expandido[3] ?( //CASO CLICADO PARA SER EXPANDIDO
                        <>
                        <h1>TESTE</h1>
                        <p id='textoCarousel'> CLICADO </p>
                        </>
                    ):( //CASO NÃO CLICADO
                        <>
                        <h5 id='TituloPadrao'>TESTE</h5>
                        <p id='TextoPadrao'>TESTE CLIQUE AQUI</p>
                        </>
                    )}
                </div>
            </div>
    </CSSTransition>

            <br />
            {/* INDICADORES DE CADA DIV */}
            <li onClick={()=> Clique(0)} className={`indicador ${activeIndex === 0 ? 'active' : ''}`}></li> 
            <li onClick={()=> Clique(1)} className={`indicador ${activeIndex === 1 ? 'active' : ''}`}></li>
            <li onClick={()=> Clique(2)} className={`indicador ${activeIndex === 2 ? 'active' : ''}`}></li>
            <li onClick={()=> Clique(3)} className={`indicador ${activeIndex === 3 ? 'active' : ''}`}></li>
        </>
    );
}
