import React from "react";
import './style.css';
import Logo from '../images/dog.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faPhone}from  '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faViber} from '@fortawesome/free-brands-svg-icons';
import {faVk} from '@fortawesome/free-brands-svg-icons';
export function Footer(){
 return(
    <header className="footer">
       <div className="container">
            
                 <a className="logo" title="Логотип">
                    <img src={Logo} alt="" />
                 </a>
                 <div className="list">
                  <a href="#" className="list__string">Каталог</a>
                  <a href="#"className="list__string">Акции</a>
                  <a href="#"className="list__string">Новости</a>
                  <a href="#"className="list__string">Отзывы</a>
                 </div>
                 <div className="list__list">
                  <a href="#"className="list__string">Оплата и доставка</a>
                  <a href="#"className="list__string">Часто спрашивают</a>
                  <a href="#"className="list__string">Обратная связь</a>
                  <a href="#"className="list__string">Контакты</a>
                 </div>
                 <div className="contact">
                  <h1 className="contact__header">Мы на связи</h1>
                  <div>
                     <h1 className="phone"> 8(800)90980090</h1>
                     <h1 className="contact__mail">doogfood.ru@gmail.com</h1>
                  </div>
                  <div className="social">
                     <a href="" className="social-ikon"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
                     <a href=""className="social-ikon"><FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon></a>
                     <a href=""className="social-ikon"><FontAwesomeIcon icon={faViber}></FontAwesomeIcon></a>
                     <a href=""className="social-ikon"><FontAwesomeIcon icon={faVk}></FontAwesomeIcon></a>
                  </div>
                 </div>
            </div>
    </header>
 )

}