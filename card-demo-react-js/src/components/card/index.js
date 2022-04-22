import React from 'react';
// import { ButtonRemove } from "../buttonRemove";
import './card.css'
import { useState } from "react";
import { ReactComponent as IconCardVisible } from "../card/credit.svg";
import { DeleteCard } from "../../components/DeleteCard";


const Card = ({ id,
    name,
    numberOfCreditCard, 
    until,
    creditCard,
    img,
    kindOfCreditCard,
    keyOfSecurity,
    
    

}) => {
    const [showComponent, setShowComponent] = useState(false);

    const showComponentDeleteOrCard = ()=>{
      setShowComponent(!showComponent)
    }



    const TYPE_OF_CARDS = {
        'Mastercard':'container-card-mastercard',
        'Visa': 'container-card-visa',
        'Naranja': 'container-card-naranja'
    }
    const DEFAULT_CARD = undefined;

    const nameOfCreditCompany= TYPE_OF_CARDS[creditCard] || DEFAULT_CARD

    return (
        showComponent ? <DeleteCard showComponentDeleteOrCard={showComponentDeleteOrCard} id={id}/>  :

        <div id={id} className={`container-card ${nameOfCreditCompany}` }>
            <div className='div-logo-delete'>
                <div className='div-img-kind'>
                    <img className='img-log' src={img} alt="logo de la tarjeta" />
                    <p className='text-kind-of-credit-card'>{kindOfCreditCard}</p>

                </div>
                <button onClick={showComponentDeleteOrCard}>
                    X
                </button>
            </div>
            <div className='div-numero-tarjeta'>
                <button> 
                    <IconCardVisible />
                </button>
                <p className='text-name-card'> {numberOfCreditCard}</p>

            </div>
            <h3> {name}</h3>
            <div className='div-until-text'> 
                <span className='text-until'>HASTA {until}</span>
                <span className='text-and-more'>{keyOfSecurity}</span>
            </div>

        </div>

        
        
    )


}

export { Card }