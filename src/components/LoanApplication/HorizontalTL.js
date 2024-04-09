import React, { useEffect, useState } from 'react';
import '../dist/HorizontalTL.css';
import check from '../../assest/AIACHomePageIMG/Loan application/check.png';
import { useLocation } from 'react-router-dom';


const HorizontalTL = () => {
    let url = useLocation().pathname.toString();
    const routeArray = ['avatar', 'basicDetails', 'createWallet', 'fullBasicDocx', 'filledBasicDetails'];
    let [i, setI] = useState(0);

    useEffect(() => {
        for (i = 0; i < routeArray.length; i++) {
            if (url.includes(routeArray[i])) {
                setI(i);
            }
        }
    }, [url]);



    console.log(typeof i);
    console.log("index", i);

    return (
        <div id='horizontalTL'>
            <div className='container'>
                <div className='row'>
                    <ul className='wrapper'>
                        <li className={`common-cls ${(i > 0) ? "filled_line" : ""} `} >
                            <div className={(i > 0) ? "filled_circle circle" : " circle"} >
                                {(i > 0) ? <img src={check} alt="" /> : <p>1</p>}
                            </div>
                            <p>Project Details</p>
                        </li>
                        <li className={`common-cls ${(i > 1) ? "filled_line" : ""} `} >
                            <div className={(i > 1) ? "filled_circle  circle" : " circle"} >
                                {(i > 1) ? <img src={check} alt="" /> : <p>2</p>}
                            </div>
                            <p>Basic Details</p>
                        </li>
                        <li className={`common-cls ${(i > 2) ? "filled_line" : ""} `} >
                            <div className={(i > 2) ? "filled_circle  circle" : " circle"} >
                                {(i > 2) ? <img src={check} alt="" /> : <p>3</p>}
                            </div>
                            <p>Create Wallet</p>
                        </li>
                        <li className={`common-cls ${(i > 3) ? "filled_line" : ""} `} >
                            <div className={(i > 3) ? "filled_circle  circle" : " circle"} >
                                {(i > 3) ? <img src={check} alt="" /> : <p>4</p>}
                            </div>
                            <p>Upload Documents</p>
                        </li>
                        <li className={`common-cls ${(i > 4) ? "filled_line" : ""} `} >
                            <div className={(i > 4) ? "filled_circle  circle" : " circle"} >
                                {(i > 4) ? <img src={check} alt="" /> : <p>5</p>}
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
