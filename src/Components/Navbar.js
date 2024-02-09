import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from "react-redux";
import { LangContext } from "../Context/langContext";

function Navbar(){
 
    const fav = useSelector((state) => state.combineFav.Fav)
    const {contextLang, setContextLang} = useContext(LangContext)

    return(
        <>
        
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid bg-dark  ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                <Link className="nav-link active text-warning" aria-current="page" to="/Register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-warning" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-warning" to="/">List Movies</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-warning" to="/Favourites">Favourites  <sup>{fav.length}</sup></Link>
                </li>
                
            </ul>
            
            </div>
        </div>
    </nav>
        
        </>
    )
}

export default Navbar