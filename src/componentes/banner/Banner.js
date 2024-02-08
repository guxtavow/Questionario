import './Banner.css'
import imgBanner from './mulher-banner.png'
import imgDados from './LOGO-DADOS.png'
import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Banner(){


    const [mostrar, mostrarConteudo] = useState(false)
    const [mostrar2, mostrarTitulo] = useState(false)
    const [mostrar3, mostrarLogo] = useState(false)

    useEffect(() =>{
        const timer = setTimeout(() => mostrarConteudo(true),100)
        const timer2 = setTimeout(() => mostrarTitulo(true),100)
        const timer3 = setTimeout(() => mostrarLogo(true),100)
        const tempos = timer + timer2 + timer3

        return () => clearTimeout(tempos)
    }, [])

return(
<>
    <div class="container-fluid1">
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