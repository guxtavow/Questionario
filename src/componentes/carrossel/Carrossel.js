import './Carrossel.css'
import React, { useState } from "react";
import Fundo from './fundo.png'

export default function Carrossel(){
    const [expandido, setExpandido] = useState(Array(3).fill(false));
    const [activeIndex, setActiveIndex] = useState(1); // Adiciona estado para controlar o índice ativo

    const Clique = (index) => {
        const newExpandido = [...expandido];
        newExpandido[index] = !newExpandido[index];
        setExpandido(newExpandido);
        setActiveIndex(index); // Atualiza o índice ativo
    };

    const img = [
        `url(${Fundo})`
    ];

    return(
        <>
            <div className='container-fluid3'>
                <div className={`componente1 ${expandido[0] ? 'expandido' : ''} ${activeIndex === 0 ? 'active' : ''}`} onClick={() => Clique(0)}>
                    {expandido[0] ?(
                        <>
                        <h1>TESTE</h1>
                        <p>TESTE CLICADO AQUI</p>
                        </>
                    ):(
                        <>
                        <h5>TESTE</h5>
                        <p>TESTE CLIQUE AQUI</p>
                        </>
                    )}
                </div>
                
                <div className={`componente1 ${expandido[1] ? 'expandido' : ''} ${activeIndex === 1 ? 'active' : ''}`} onClick={() => Clique(1)} style={{background:img}}>
                    {expandido[1] ?(
                        <>
                        <h1>RESULTADOS</h1>
                        <p> O questionario de Resultados tem a funcionalidade de nos ajudar a entender melhor sua necessidade,
                           compartilhe conosco como foi sua experiência com o Sebrae!</p>
                        <br />
                        <a href="https://pesquisa.sebraesp.com.br/" target='_blank' rel='noopener noreferrer'>
                        <button id='link'>ACESSAR</button>
                        </a>
                        </>
                    ):(
                        <>
                        <h5>RESULTADOS</h5>
                        <p>Questionario de Resultados do Sebrae</p>
                        </>
                    )}
                </div>

                <div className={`componente1 ${expandido[2] ? 'expandido' : ''} ${activeIndex === 2 ? 'active' : ''}`} onClick={() => Clique(2)}>
                    {expandido[2] ?(
                        <>
                        <h1>TESTE</h1>
                        <p>TESTE CLICADO AQUI</p>
                        </>
                    ):(
                        <>
                        <h5>TESTE</h5>
                        <p>TESTE CLIQUE AQUI</p>
                        </>
                    )}
                </div>
            </div>
            <br />
            <li onClick={()=> Clique(0)} className={`indicador ${activeIndex === 0 ? 'active' : ''}`}></li>
            <li onClick={()=> Clique(1)} className={`indicador ${activeIndex === 1 ? 'active' : ''}`}></li>
            <li onClick={()=> Clique(2)} className={`indicador ${activeIndex === 2 ? 'active' : ''}`}></li>
        </>
    );
}
