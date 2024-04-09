import React from 'react'
import '../dist/TokenManagement.css'
import coin from '../../assest/AIACHomePageIMG/Project Management/coin.png'
import Button from 'components/LoanApplication/Button'
import { NavLink } from 'react-router-dom'

function TokenManagement() {
    return (
        <div className='tokenManagement'>
            <div className="container">
                <div className="wrapper">
                    <img src={coin} alt="" />
                    <h2>Floydmilesgoogle@gmail.com</h2>
                    <NavLink to='../tokenTransfer'>
                        <Button text={"Connect"} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default TokenManagement