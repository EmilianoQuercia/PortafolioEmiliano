
import React from 'react';
import './contactos.css';
import emailjs from 'emailjs-com'


const Contactos = () => {

    const enviarEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gj58bu8', 'template_ehe2ien', e.target, 'S6VF_aLRrwk5ujjQO')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
         }, (error)=> {
            console.log('FAILED...', error);
         });
    }
    return (
        <div className='containerContactos'>

            <div id='contact' className="separacion"></div>
            <br />
            <br />
            <br />
            <h1 className='tituloTech'>CONTACTOS</h1>
            <div style={{width:"80%",margin:"0 auto", marginTop:"15px"}}>
                <div className='containerForm'>
                    <h4>Contactame y trabajemos juntos</h4>
                    <hr/>
                    <form onSubmit={enviarEmail}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label><b>Nombre</b></label>
                                <input type="text" className="form-control" id="nombre" name="nombre" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label><b>Email</b></label>
                                <input type="text" className="form-control" id="email" name="email" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label><b>Mensaje</b></label>
                            <textarea type="text" className="form-control" id="mensaje" name="mensaje" required></textarea>
                        </div>
                        <button type="submit" className="btn" style={{width:"100%", margin:"0 auto",marginTop:"20px", backgroundColor: '#666', color: '#fff'}}>Enviar Correo</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Contactos;
