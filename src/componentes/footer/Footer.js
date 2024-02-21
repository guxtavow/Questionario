import './Footer.css'
import face from './facebook.png'
import insta from './instagram.png'
import X from './logoTwitter.png'
import youtube from './youtube.png'
import LOGO from './Logo Sebrae 1.png'


export default function Footer() {
    return(
        <>
        <footer className='container-fluid4' id='footer'>
            <br />
            <br />
                <center>
                    <p id='textSocial'> {/* TEXTO ANTES DAS REDES SOCIAIS */}
                    Para atendimento para sua empresa acesse os canais de atendimento online,
                    encontre o endereço do Sebrae mais próximo ou consulte nossa área de Perguntas Frequentes do Sebrae, <a href='https://sebrae.com.br/sites/PortalSebrae/faleconosco' target='_blank'>clique aqui</a> ou ligando no Sebrae 0800 570 0800.
                    </p>
                </center>

            <div id='logoS'>           {/* DIV DO LOGO */}
                <h7>Não esqueça de acessar as redes sociais do Sebrae para ficar por dentro de tudo.</h7> <br   />
                 <img src={LOGO} width='120px' id='Sebrae'></img> {/* LOGO DO SEBRAE */}
            </div>
            <br />
                <div className='sociais'> {/* REDES SOCIAIS */}
                <a href='https://www.facebook.com/sebraesp' target='_blank'><img src={face} width='38px' id='face'></img></a>  {/* FACEBOOK */}
                <a href='https://www.instagram.com/sebraesp/' target='_blank'><img src={insta} width='34px' id='insta'></img></a> {/* INSTAGRAM */}
                <a href='https://twitter.com/sebraesp' target='_blank'><img src={X} width='35px' id='X'></img></a> {/* X OU TWITTER */}
                <a href='https://www.youtube.com/user/sebraesaopaulo' target='_blank'><img src={youtube} width='42px' id='youtube'></img></a> {/* YOUTUBE */}
                </div>
            <br />
        </footer>
        
        </>
    )
}