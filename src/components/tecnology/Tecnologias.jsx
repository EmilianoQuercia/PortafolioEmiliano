import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import './tecnologias.css'

const Tecnologias = () => {

    useEffect(() => {
        Aos.init({
              duration: 1500,  
        })
        Aos.refresh()
    }, []);
    
    return (
        <div className='containerTecnologias'>
            <div className='separacion'></div>
            <h1 className='tituloTech'>HABILIDADES</h1>
            <div className='containerLogos'>
            <div data-aos="flip-left"><img className='logoImg' src="./assets/img/logoHtml.png" alt="" /></div>
                
            <div data-aos="flip-up"><img className='logoImg' src="./assets/img/logoCss.png" alt="" /></div>
            <div data-aos="flip-right"><img className='logoImg' src="./assets/img/logoJs.png" alt="" /></div>
            <div data-aos="flip-down"><img className='logoImg' src="./assets/img/logoSass.png" alt="" /></div>
            <div data-aos="flip-left"><img className='logoImg' src="./assets/img/logoBootstrap.png" alt="" /></div>
            <div data-aos="flip-down"><img className='logoImg' src="./assets/img/logoReact.png" alt="" /></div>
            <div data-aos="flip-right"><img className='logoImg' src="./assets/img/logoVite.png" alt="" /></div>
            <div data-aos="flip-left"><img className='logoImg' src="./assets/img/logoGit.png" alt="" /></div>
            <div data-aos="flip-up"><img className='logoImg' src="./assets/img/logoGithub.png" alt="" /></div>
            </div>
        </div>
    );
}

export default Tecnologias;
