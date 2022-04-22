import React from 'react';
import { ButtonRemove } from "../buttonRemove";
import './card.css'
import { CardContext } from "../CardContext";
import { useContext } from "react";




const DeleteCard = ({ showComponentDeleteOrCard, id })=>{
    const { deleteFunction } = useContext(CardContext) 

    return (
     
        <div  className='container-card' >
            <div className='div-logo-delete'>
                <h2>¿Estás seguro que deseas eliminar esta tarjeta?</h2>
                <ButtonRemove id={id} deleteFunction={deleteFunction} showComponentDeleteOrCard={showComponentDeleteOrCard}/>
                <button
                    
                    onClick={showComponentDeleteOrCard}
                > NO </button>
            </div>

        </div>
    )


}

export { DeleteCard }