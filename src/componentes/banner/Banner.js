import './Banner.css' //CSS DO BANNER
import imgBanner from './mulher-banner.png'//FOTO DA ESQUERDA
import imgDados from './LOGO-DADOS.png'//LOGO DA DIREITA
import React, { useEffect, useState } from 'react' //IMPORTO OS EFEITOS DO REACT PARA USAR NAS FUNÇÕES, DEFININDO ESTADO, EFEITO E ETC SOBRE UMA CONSTANTE
import { CSSTransition } from 'react-transition-group' //IMPORTO UMA BIBLIOTECA DO CSS FOCADA EM TRANSIÇÃO

export default function Banner(){


    const [mostrar, mostrarConteudo] = useState(false)//DEFINO A CONSTANTE COM STATE FALSO LOGO DE INICIO(QUE NO CASO SIGNIFICA A RENDERIZAÇÃO DE INICIO)
    const [mostrar2, mostrarTitulo] = useState(false)
    const [mostrar3, mostrarLogo] = useState(false)

    useEffect(() =>{
        const timer = setTimeout(() => mostrarConteudo(true),100) //DEFINO O TEMPO PARA LEVAR PARA A RENDERIZAÇÃO COMEÇAR E DEFINO O CONTEUDO DE RENDERIZAÇÃO COMO TRUE
        const timer2 = setTimeout(() => mostrarTitulo(true),100)
        const timer3 = setTimeout(() => mostrarLogo(true),100)
        const tempos = timer + timer2 + timer3

        return () => clearTimeout(tempos) //LIMPO O TIMEOUT PARA CANCELAR O TEMPORIZADOR DE RODAR NOVAMENTE
    }, [])

return(
<>
    <div class="container-fluid1"> 
    {/* USO O ELEMENTO DA BIBLIOTECA PARA CHAMAR A CONSTANTE/FUNÇÃO, JUNTO A SUA DEFINIÇÃO DE TEMPO PARA RODAR A VARIAVEL E O NOME DAS CLASSES CRIADAS NO CSS RESPONSÁVEIS PELA OPACIDADE */}
      <CSSTransition in={mostrar} timeout ={5000} classNames = "fade">  
        <img src={imgBanner} id="ImagemBanner" class={'IMGBanner'} width="685" ></img>
      </CSSTransition>
      <CSSTransition in={mostrar2} timeout={10000} classNames ="fade1" >  
        <div class="teste">
        <p id="TituloBanner">Compartilhe conosco sua opinião!<br />
            <p id="Subtitulo">e ajude-nos a continuar apoiando o empreendedorismo em todo o estado de São Paulo.</p>
        </p>
        </div>
      </CSSTransition>
        <br></br>
        <CSSTransition in={mostrar3} timeout={10000} classNames ="fade1">  
        <div class="ImgDados">
        <img src={imgDados} id="ImagemDados" class="IMGDados" width="200"></img>
        </div>
        </CSSTransition>
    </div>
</>

    )
}