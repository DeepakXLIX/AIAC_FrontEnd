import React from 'react';
import '../dist/HorizontalTL.css';
import check from '../../assest/AIACHomePageIMG/Loan application/check.png';

const HorizontalTL = () => {
    return (
        <div id='horizontalTL'>
            <div className='container'>
                <div className='row'>
                    <ul className='wrapper'>
                        <li className='common-cls'>
                            <div className="circle">
                                <img src={check} alt="" />
                            </div>
                            <p>Project Details</p>
                        </li>
                        <li className='common-cls'>
                            <div className="circle">
                                <img src={check} alt="" />
                            </div>
                            <p>Basic Details</p>
                        </li>
                        <li className='common-cls'>
                            <div className="circle">
                                <img src={check} alt="" />
                            </div>
                            <p>Create Wallet</p>

                        </li>
                        <li className='common-cls'>
                            <div className="circle">
                                <img src={check} alt="" />
                            </div>
                            <p>Upload Documents</p>
                        </li>
                        <li className='common-cls'>
                            <div className="circle">
                                <img src={check} alt="" />
                            </div>
                            <p>Preview and Submit</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HorizontalTL;
