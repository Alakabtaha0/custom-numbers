import React from 'react'
import '../../css/footer.css';
import Logo from '../../assets/logo.png';
import Insta from '../../assets/Instagram.png';
import Whatsapp from '../../assets/whatsapp.png';
import Phone from '../../assets/Phone, Call.png';
import Email from '../../assets/email-letter-mail-medium.png';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='footer-bg footer-height'>
            <div className='center-items'>
                <img src={Logo} alt='VIP mobile numbers logo 2' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <div className='flex-img'>
                    <img src={Insta} alt='VIP Mobile Numbers Insta'/>
                    <img src={Whatsapp} alt='VIP mobile Numbers Whatsapp' />
                </div>
                <div className='footer-contact-1'>
                    <h4>Email</h4>
                    <img src={Email} alt='email vip mobile number' />
                    <p>info@vipnumbersuk.com</p>
                </div>
                <div className='footer-contact-1'>
                    <h4>Phone</h4>
                    <img src={Phone} alt='phone vip mobile number' />
                    <p>+447770660777</p>
                </div>
                
            </div>
            <p className='copy-right'>&copy; {currentYear} Custom Numbers Ltd. All rights reserved.</p>
        </div>
    )
}

export default Footer
