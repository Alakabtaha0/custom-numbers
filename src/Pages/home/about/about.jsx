import React from 'react'
import Phone3 from '../../../assets/phone-3.png';

const About = () => {
    return (
        <div className='section-set set-mp' id='about'>
            <div className='format-1'>
                <div>
                    <h1 className='header-text-l'>About VIP Numbers</h1>
                    <p className='subtitle-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img src={Phone3} alt='custom numbers neon phone' />

            </div>

        </div>
    )
}

export default About
