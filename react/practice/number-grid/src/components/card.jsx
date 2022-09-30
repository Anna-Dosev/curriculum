import React from 'react'

const Card = ( { card, action, selectedCard } ) => {
    return (
    <div data-type= {card} className='card' onClick= {action}>
        {card === selectedCard ? card : ''}
    </div>  
    )  
};

export default Card;