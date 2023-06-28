import React from 'react'
import '../../../css/howitworks.css';
import Card from '../../../Components/card/card';

const HowItWorks = () => {
    return (
        <div className='section-set set-mp' id='how-it-works'>
            <h1 className='header-text-c'>How It Works</h1>
            <p className='subtitle-c'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <div className='grid-3-box'>
                <Card num='1'
                    head='Search for Available Numbers'
                    sub='The first step involves searching for available numbers on the website. This may involve entering a specific area code or selecting a desired pattern of digits. The website then displays a list of available numbers that match the search criteria.'/>
                <Card num='2'
                    head='Choose a Number'
                    sub='Once the list of available numbers is displayed, the user can then choose a number that they like. They may consider factors such as the memorability of the number, its uniqueness, and how easy it is to remember.'/>
                <Card num='3'
                    head='Complete the Purchase'
                    sub="After choosing a number, the user will typically need to complete the purchase by providing their personal and payment information. They may also need to set up an account if they don't already have one with the website. "/>
            </div>
        </div>
    )
}

export default HowItWorks
