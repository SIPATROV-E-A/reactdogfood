import React from "react";
import './card.css';
import {ReactComponent as Heart} from '../images/saveHearts.svg';
const Card=(props)=>{
    console.log(props);
    const discount_price = Math.round(props.price - (props.price * props.discount) / 100);

    return (
       
            <div className="card">
                <div className="card__sticky card__sticky_type_top-left">
                   {!! props.discount  && <span className="card_discount">{`-${props.discount}%`}</span>} 
                </div>
                <div className="card__stiсky card__stiсky_type_top-right">
                 <button className="card_favorite">
                  {/* <img src={Heart} alt="Добавить в избранное" className="card_favorite-ikon" /> */}
                  <Heart className={props.isFavorite ? 'svg': 'no_favorite'}/>
                 </button>
                </div>
                <a href="/product" className="card_link">
                    <img src={props.picture} alt="" className="card_image" />
                    <div className="card_desс">
                        <span className={!!props.discount ? 'card_old_priсe': 'card_priсe'}>{props.price} &nbsp; ₽</span>
                      {!! props.discount && <span className="card_price card_price_type_discount">{discount_price ?? 'no_price'} &nbsp; ₽</span>}
                      <span className="card_wight"> {props.wight} </span>
                      <p className="card_name">{props.name}</p>
                    </div>
                </a>
                <a href="" className="card_cart btn btn_type_primary">Добавить в корзину</a>
                 
                
            </div>
      
    );
};

export default Card;