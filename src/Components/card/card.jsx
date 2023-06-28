import React from 'react';
import './card.css';


const Card = ({num, head, sub, img}) => {
    return (
        <div className='outer-box'>
            {/* num && <div className='number-display'>
                {num}
            </div> */}
            {num ?  <div className='number-display'>
                {num}
            </div> : <img className='img-display' src={img} alt='custom-numbers-img'/>}
            <h1>{head}</h1>
            <p>{sub}</p>
        </div>
    )
}

export default Card
