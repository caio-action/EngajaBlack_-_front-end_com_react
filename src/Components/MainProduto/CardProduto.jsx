import React from "react";
import logo from "../../assets/img/Engajablack_logo.png";

const CardProduto = (props) => {
  return (
    <div
      style={{
        display: "flex",

        paddingLeft: 10,
      }}
    >
      <div className="">
        <h2 className="titulo">Pertinho de você ...</h2>

        <div className="col-sm-4">
          <div className="card-toggle">
            <div className="card-group">
              <div className="">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduto;
