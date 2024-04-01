import React from 'react';
import '../dist/CreateWallet1.css'
import moneyBox from '../../assest/AIACHomePageIMG/Loan application/imgExp.png'
import Button from './Button';

const CreateWallet1 = () => {
    return (
        <div className='createWallet'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="wrapper">
                            <img src={moneyBox} alt="" />
                            <p>Keep Your Digital Assets Here</p>
                            <h2>Floydmilesgoogle@gmail.com</h2>
                            <Button text="Create Wallet"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateWallet1;
