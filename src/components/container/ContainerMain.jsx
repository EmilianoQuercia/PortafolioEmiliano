import React from 'react';
import Contactos from '../contact/Contactos';
import Home from '../home/Home';
import Proyectos from '../projects/Proyectos';
import Tecnologias from '../tecnology/Tecnologias';

const ContainerMain = () => {
    return (
        <div>
            <Home/>
            <Tecnologias/>
            <Proyectos/>
            <Contactos/>
        </div>
    );
}

export default ContainerMain;
