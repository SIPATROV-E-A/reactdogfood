import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faHeart}from  '@fortawesome/free-regular-svg-icons';
import{faCartShopping}from  '@fortawesome/free-solid-svg-icons';
import Logo2 from '../images/PageLogg.svg'
import Logo from '../Logo/Logo'
import Search from "../Search/Search";

export function Header(props){
   console.log(props);
 return(
    <header className="header">
        <div className="container">
            <div className="header__wraper">
                 <Logo></Logo>
                 <Search></Search>
                 <a href="#" className="icons">
                 <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                 <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                 <img className="logo-smile" src={Logo2} alt="logo-smile" />
                 </a>
            </div>
        </div>
    </header>
 )

}