import React from 'react'
import '../dist/TokenManagement.css'
import coin from '../../assest/AIACHomePageIMG/Project Management/coin.png'
import Button from 'components/LoanApplication/Button'

function TokenManagement() {
    return (
        <div className='tokenManagement'>
            <div className="container">
                <div className="wrapper">
                    <img src={coin} alt="" />
                    <h2>Floydmilesgoogle@gmail.com</h2>
                    <Button text={"Connect"}/>
                </div>
            </div>
        </div>
    )
}

export default TokenManagement