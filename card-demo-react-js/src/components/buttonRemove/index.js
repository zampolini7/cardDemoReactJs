import React from 'react';



const ButtonRemove =  ({deleteFunction, id, showComponentDeleteOrCard }) =>{
  
    
    return(
        <button id={id} onClick={(e)=> {
            deleteFunction(e)
            showComponentDeleteOrCard()
        }} >
            SI
        </button>
    )
}

export { ButtonRemove }