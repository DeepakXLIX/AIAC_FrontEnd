import React from 'react'
import '../dist/BeforeLoginHeader.css'
import LogoImg from '../../assest/AIACHomePageIMG/BeforeLogin/aiaclogo.png'
import Button from 'components/LoanApplication/Button';
function BeforeLoginHeader() {
    return (
        <div className='beforeLoginHeader'>
            <div className="container">
                <div className="wrapper">
                    <img src={LogoImg} alt="" />
                    <Button text={"Contact Us"} />
                </div>
            </div>
        </div>
    )
}

export default BeforeLoginHeader;