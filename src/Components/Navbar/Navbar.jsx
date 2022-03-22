import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default (props) => {
  return(
    <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={"/"}>
                    <a className="navbar-brand"><img id="logo" src={props.logo} alt="Logotipo" /></a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to={"/"}>
                            <li className="nav-item">
                                <a className="nav-link">Ínicio <span className="sr-only">(current)</span></a>
                            </li>
                        </Link>
                        
                        <Link to={"/contato"}>
                            <li className="nav-item">
                                <a className="nav-link">Fale Conosco</a>
                            </li>
                        </Link>
                        
                        <Link to={"/sobreNos"}>
                            <li className="nav-item">
                                <a className="nav-link">Sobre Nós</a>
                            </li>
                        </Link>
                        
                    </ul>


                </div>
            </nav>


        </header>
  )
}