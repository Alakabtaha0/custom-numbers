import React from 'react'
import Dots from '../../../assets/dots.png';
import '../../../css/header.css';
import BgGlow1 from '../../../assets/bg-glow-1/bg-glow-1';

const DotAnimation = () => {
    return (
        <div className='dots-sz set-mp-pos' >
            <img src={Dots} alt='dots background' />
        </div>

    )
}

export default DotAnimation;