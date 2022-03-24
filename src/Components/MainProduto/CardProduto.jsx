/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/img/Engajablack_logo.png";

const CardProduto = () => {
  return (
   <section className="def"> 
   <div className="card-group ">
    <div className="card">
      <div className="products">
        <div className="productinfo text-center">
          <img id="logo" src={logo} alt="Logotipo" />
          <h2>R$ 20,00</h2>
          <p>Produto Exemplo</p>
          <a href="#" className="btn btn-default add-to-cart">
            <i></i>Ver mais informações
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="products">
        <div className="productinfo text-center">
          <img id="logo" src={logo} alt="Logotipo" />
          <h2>R$ 20,00</h2>
          <p>Produto Exemplo</p>
          <a href="#" className="btn btn-default add-to-cart">
            <i></i>Ver mais informações
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="products">
        <div className="productinfo text-center">
          <img id="logo" src={logo} alt="Logotipo" />
          <h2>R$ 20,00</h2>
          <p>Produto Exemplo</p>
          <a href="#" className="btn btn-default add-to-cart">
            <i></i>Ver mais informações
          </a>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="products">
        <div className="productinfo text-center">
          <img id="logo" src={logo} alt="Logotipo" />
          <h2>R$ 20,00</h2>
          <p>Produto Exemplo</p>
          <a href="#" className="btn btn-default add-to-cart">
            <i></i>Ver mais informações
          </a>
        </div>
      </div>
    </div>
    </div>
    
    </section>    
  );
};

export default CardProduto;
