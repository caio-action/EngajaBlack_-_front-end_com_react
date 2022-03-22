import React from "react";
import './Contato.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import logo from "../../assets/img/Engajablack_logo.png";
import BotaoDenuncia from "../../Components/BotaoDenuncia/BotaoDenuncia";


export default () =>{

  return(
    <>
      <Navbar logo={logo}/>
      <main className="body">
        <section className="text-center titulo mb-5">
          <h1>ENGAJABLACK</h1>
        </section>
        <section className="container contato">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Endereço de email:</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"/>
              <small id="emailHelp" className="form-text text-white">Nunca vamos compartilhar seu email, com ninguém.</small>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Digite sua mensagem:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua mensagem..."></textarea>
              </div>
          
            <button type="submit" className="btn btn-contato">Enviar</button>
          </form>
        </section>
        <BotaoDenuncia/>
        
        <Footer/>
      </main>
      
    </>
    
  );
}