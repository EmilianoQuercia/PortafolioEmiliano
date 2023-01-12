import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ContainerMain from '../components/container/ContainerMain';
import Home from '../components/home/Home';
import NavbarIndex from '../components/Navbar/NavbarIndex';
import Tecnologias from '../components/tecnology/Tecnologias';

const AppRoutes = () => {
    return (
        <div>
            <NavbarIndex/>
            <Routes>
                <Route path='/' element={<ContainerMain/>}/>
                <Route path='#home' element={<Home/>}/>
                <Route path='#tech' element={<Tecnologias/>}/>
            </Routes>
        </div>
    );
}

export default AppRoutes;
