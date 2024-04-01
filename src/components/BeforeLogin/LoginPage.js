import React from 'react';
import '../dist/LoginPage.css'
import BeforeLoginFooter from './BeforeLoginFooter';
const LoginPage = () => {
    return (
        <>
            <div className='loginPage'>
                <div className="container">
                    <div className="wrapper">
                        <h2>AIAC Bridging <span>the gap between Industry</span> and Academia.</h2>
                        <p>AIAC's mission is to power the progress of scientific innovation by fostering synergistic partnerships between academia and industry. We aim to bridge the gap between these sectors by facilitating collaborative research, leveraging industry investments, and amplifying the collective resources and expertise at our disposal. Our  scientific breakthroughs that address contemporary industry needs and societal challenges.</p>
                    </div>
                </div>
            </div>
            <BeforeLoginFooter /></>
    );
}

export default LoginPage;
