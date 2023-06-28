import React from 'react';
import '../../css/navbar.css';
import Whatsapp from '../../assets/whatsapp.png';
import Shoppingcart from '../../assets/shoppingcart.png';
import Logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt='Custom numbers temp logo' />
            <ul>
                <li>
                    <a href='#how-it-works'>How it works</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#faq'>FAQS</a>
                </li>
            </ul>
            <div>
                <a href='https://wa.me/447770660777' className='btn-standard set-mp' target="_blank">
                    <img src={Whatsapp} alt='custom numbers whatsapp button' />
                    <p>Whatsapp</p>
                </a>
                <a className='btn-standard set-mp'>
                    <img src={Shoppingcart} alt='custom numbers whatsapp button' />
                    <p>0 Items (£0)</p>
                </a>
            </div>

        </nav>

    )
}

export default NavBar
