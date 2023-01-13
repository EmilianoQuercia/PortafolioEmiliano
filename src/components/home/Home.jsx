import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css'

import { IoBulbOutline } from "react-icons/io5";
const Home = () =>{
    const [check, setCheck] = useState()

    return(
        <div className="fondoHome">
            <div className="containerHome">
                <div className="containerImg">
                    
                    <img className="conoceme" src="./assets/img/conoceme.png" alt="" />
                    <div className="interruptor">
                        <label htmlFor="llave">
                            <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)} name="" id="llave" />
                            <span><IoBulbOutline className="lamp"/></span>  
                        </label>
                    </div>
                    <div className="avatar">
                        {
                            check ?
                            <img className="imgEmi emi1" src="./assets/img/emiReal1.png" alt="" />
                            :
                            <img className="imgEmi" src="./assets/img/EmiAVATAR1.png" alt=""/>
                        }
                    </div>
                </div>
                <div className="containerNombre">
                    {
                        check ?
                        <div className="infoNombre">
                            <h1>EMILIANO QUERCIA</h1>
                            <h2>Desarrollador Front-End</h2>
                           <a href="http://drive.google.com/file/d/1LR_hJVU3Ky1Op2wLpMy5MGk5VEadQoIk/view?usp=sharing'" target="_blank" rel="noopener noreferrer"><button className="btnCV" >DESCARGAR CV</button> </a>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;