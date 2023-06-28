import React, { useEffect, useState } from 'react'
import iPhone from '../../../assets/iPhone 14 Pro-2.png';
import Input from './inputfield';
import Plus from '../../../assets/Plus, Add.png';
import Minus from '../../../assets/Minus.png';
import Arrow from '../../../assets/Arrow.png'
import Cart from '../../../assets/shoppingcart.png';

const InputNumbers = () => {
    const [numOfDigits, setNumOfDigits] = useState(6);
    const [numberDigits, setNumberDigits] = useState(['', '', '', '', '', '']);
    const [quantity, setQuantity] = useState(1);


    function AddToCart() {
        let item = {
            productid: 1,
            product_name: numberDigits,
            number_of_digits: numOfDigits,
            quantity: quantity
        }
        //Do something with this item later on
        console.log(item)
    }


    //ADD A RESET BUTTTON LATERRR


    return (
        <div className='input-local'>
            <div className='phone-img-container'>
                <p className='center-origin-xy c1 set-mp'>
                    {numOfDigits === 7 ? `+44700` : '+447000'} {numberDigits}
                </p>
                <p className='center-origin-xy c0 set-mp'>Calling...</p>
                <img src={iPhone} alt='iPhone 14 pro display' />
            </div>

            <div className='input-bg'>
                <div className='sel-num'>
                    <div className={`sel-num-btn ${numOfDigits === 7 ? 'selected-neon' : ''}`} onClick={() => setNumOfDigits(7)}>
                        <p>Last 7 Digits</p>
                    </div>
                    <div className={`sel-num-btn ${numOfDigits === 6 ? 'selected-neon' : ''}`} onClick={() => setNumOfDigits(6)}>
                        <p>Last 6 Digits</p>
                    </div>
                </div>
                <h4>Enter digits</h4>
                <Input numberDigits={numberDigits} setNumberDigits={setNumberDigits} numOfDigits={numOfDigits} />
                <div className='prdct-var-sec'>
                    <div className='btn-format btn-mp-a btn-flex'>
                        <img src={Minus} className={quantity <= 1 ? 'unavailable' : 'cpoint sel-anim'} alt='custom numbers Minus'
                            onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity => quantity - 1)
                                }
                            }} />
                        <p className='btn-text-1'>{quantity}</p>
                        <img src={Plus} className={quantity >= 10 ? 'unavailable' : 'cpoint sel-anim'} alt='custom numbers Plus'
                            onClick={() => {
                                if (quantity < 10) {
                                    setQuantity(quantity => quantity + 1)
                                }
                            }}
                        />
                    </div>
                    <div className={`btn-format  btn-mp-a selected-neon btn-flex ${numberDigits[numOfDigits - 1] === '' ? 'unavailable' : 'sel-anim cpoint'}`} onClick={
                        () => {
                            AddToCart()
                        }
                    }>
                        <img src={Cart} alt='custom numbers cart 2' />
                        <img src={Arrow} alt='custom numbers arrow' />
                    </div>

                </div>
                <div className='text-box-flex reset-bg'>
                    <p><span>Do you want a gold number?</span></p>
                    <p><a href='https://wa.me/447770660777' target="_blank">Contact Via Whatsapp</a></p>
                    <p><a href='https://www.vipmobilenumbers.co.uk' target="_blank">VIP Mobile Numbers</a></p>

                </div>
            </div>
        </div>
    )
}

export default InputNumbers;
