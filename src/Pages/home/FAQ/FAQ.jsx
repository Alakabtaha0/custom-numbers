import React from 'react'
import Accordion from '../../../Components/accordion/accordion.jsx';
import { CreateNumberDATA } from '../../../lib/faqdata.js';

const FAQs = () => {

    return (
        <div className='section-set set-mp' id='faq'>
            <h1 className='header-text-c'>Frequently Asked Questions</h1>
            <p className='subtitle-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='accordion'>
                {CreateNumberDATA.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>

        </div>
    )
}

export default FAQs
