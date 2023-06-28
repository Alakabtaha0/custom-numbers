import React from 'react'
import Card from '../../../Components/card/card';
import Medal from '../../../assets/medal-reward.png';
import Guy from '../../../assets/single-user-edit-pen.png';
import Brain from '../../../assets/brain.png';
import BgGlow1 from '../../../assets/bg-glow-1/bg-glow-1';

const WhyUs = () => {
    return (
        <div className='section-set set-mp' id='why-us'>
            <BgGlow1 />
            <div className='te11 center-origin-xy'>
                <h1 className='header-text-c'>Why Custom Numbers</h1>
                <p className='subtitle-c'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <div className='grid-3-box'>
                    <Card img={Guy}
                        head='Personalization'
                        sub='The first step involves searching for available numbers on the website. This may involve entering a specific area code or selecting a desired pattern of digits. The website then displays a list of available numbers that match the search criteria.' />
                    <Card img={Medal}
                        head='Credibility'
                        sub='Once the list of available numbers is displayed, the user can then choose a number that they like. They may consider factors such as the memorability of the number, its uniqueness, and how easy it is to remember.' />
                    <Card img={Brain}
                        head='Convenience'
                        sub="After choosing a number, the user will typically need to complete the purchase by providing their personal and payment information. They may also need to set up an account if they don't already have one with the website. " />
                </div>
            </div>

        </div>
    )
}

export default WhyUs;
