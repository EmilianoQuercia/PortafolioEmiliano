import React from 'react';
import './proyectos.css';

const Proyectos = () => {
    return (
        <div className='containerProyectos'>
            <div id='proyect' className="separacion"></div>
            <br />
            <br />
            <br />
            <h1  className='tituloProyectos'>PROYECTOS</h1>
            <div className='containerCard'>
                <div className='cardProyect'>
                    <div className='imgCard'>
                        <img src="./assets/img/portadaAromaticas.jpg" alt="" />
                    </div>
                    <div className='infoCard'>
                        <h3>App Aromaticas</h3>
                        <p>Es una web para introducirse en el mundo de las hierbas aromáticas. Primer trabajo en equipo</p>
                        <p>TECNOLOGIAS: HTML, CSS, BOOSTRAPT, JAVASCRIPT, REACT</p>
                    </div>
                    <div className='containerBtn'>
                        <a className='linkBtn' href="https://github.com/ProjectsDevLatam/AromaticsApp" target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '> <img className='iconoBtn' src="./assets/img/iconoGithub.png" alt="" />Github</button>
                        </a>
                        <a className='linkBtn' href="https://aromatics.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '><img className='iconoBtn' src="./assets/img/iconoWeb.png" alt="" />Demo</button>
                        </a>
                    </div>
                </div>
                <div className='cardProyect'>
                    <div className='imgCard'>
                        <img src="./assets/img/portadaMentalmente.jpg" alt="" />
                    </div>
                    <div className='infoCard'>
                        <h3>Mentalmente</h3>
                        <p>Es un juego de Preguntas y respuestas con dos modalidades de Juego, tabla de puntaje final, musica y sonido.</p>
                        <p>TECNOLOGIAS: HTML, CSS, JAVASCRIPT, REACT </p>
                    </div>
                    <div className='containerBtn'>
                        <a className='linkBtn' href="https://github.com/EmilianoQuercia/Mentalmente/tree/main/Mentalmente" target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '> <img className='iconoBtn' src="./assets/img/iconoGithub.png" alt="" />Github</button>
                        </a>
                        <a className='linkBtn' href="https://mentalmente.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '><img className='iconoBtn' src="./assets/img/iconoWeb.png" alt="" />Demo</button>
                        </a>
                    </div>
                </div>
                <div className='cardProyect'>
                    <div className='imgCard'>
                        <img src="./assets/img/portadaBeat.jpg" alt="" />
                    </div>
                    <div className='infoCard'>
                        <h3>Beat Sound</h3>
                        <p>Este fue la primer pagina que hice, un sitio para el alquiler de equipos y organizacion de eventos</p>
                        <p>TECNOLOGIAS: HTML, CSS, BOOSTRAPS, SASS</p>
                    </div>
                    <div className='containerBtn'>
                        <a className='linkBtn' href="https://github.com/EmilianoQuercia/BeatSound" target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '> <img className='iconoBtn' src="./assets/img/iconoGithub.png" alt="" />Github</button>
                        </a>
                        <a className='linkBtn' href="https://emilianoquercia.github.io/BeatSound/" target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '><img className='iconoBtn' src="./assets/img/iconoWeb.png" alt="" />Demo</button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Proyectos;
