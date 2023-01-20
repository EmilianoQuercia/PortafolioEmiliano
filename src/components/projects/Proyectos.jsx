import React, { useEffect, useState } from 'react';
import './proyectos.css';

const Proyectos =  () => {

    const[db, setDb] = useState([])

    const proyectos = async()=>{

        const response = await fetch('../../src/data/projects.json')
        const data = await response.json()
        setDb(data)
    }
    useEffect(() => {
   
        proyectos()
    }, []);
    

    return (
        <div className='containerProyectos'>
            <div id='proyect' className="separacion"></div>
            <br />
            <br />
            <br />
            <h1  className='tituloProyectos'>PROYECTOS</h1>
            <div className='containerCard '>
                {db.map((date,index)=>(
                    <div key={index} className='cardProyect'>
                    <div className='imgCard'>
                        <img src={date.img} alt="" />
                    </div>
                    <div className='infoCard'>
                        <h3>{date.title}</h3>
                        <p>{date.description}</p>
                        <p>TECNOLOGIAS: {date.tech}</p>
                    </div>
                    <div className='containerBtn'>
                        <a className='linkBtn' href={date.linkGithub} target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '> <img className='iconoBtn' src="./assets/img/iconoGithub.png" alt="" />Github</button>
                        </a>
                        <a className='linkBtn' href={date.linkWeb} target="_blank" rel="noopener noreferrer">
                            <button className='btnCard '><img className='iconoBtn' src="./assets/img/iconoWeb.png" alt="" />Demo</button>
                        </a>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    );
}

export default Proyectos;
