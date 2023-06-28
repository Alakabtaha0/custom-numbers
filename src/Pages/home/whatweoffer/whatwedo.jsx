import React from 'react';
import BgGlow1 from '../../../assets/bg-glow-1/bg-glow-1';
import Phone2 from '../../../assets/phone-w-glow.png';

const WhatWeDo = () => {
    return (
        <div className='section-set'>
            <BgGlow1 />
            <img src={Phone2} className='set-mp-pos pos-img-abs' alt='custom number phone with glow' />
            <div className='pos-text-div center-origin-y'>
                <h1 className='header-text-l'>What We Offer</h1>
                <p className='subtitle-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
    )
}

export default WhatWeDo
