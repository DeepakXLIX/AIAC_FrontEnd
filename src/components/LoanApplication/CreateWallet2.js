import React from 'react'
import '../dist/CreateWallet2.css'
import Button from './Button'
import { NavLink } from 'react-router-dom'
function CreateWallet2() {
  return (
    <>
      <div className='createWallet2'>
        <div className="wrapper">
          <h2>Your Wallet Address</h2>
          <p>0x0bb3b509D8009Db01Bc6117BF65cAAc5aa7b78eB</p>
          <div className="buttonWrapper ">
            <NavLink to='../createWallet1'>
              <Button text="Back" bgPar={"#FAFAFA24"} textColor={"white"} />
            </NavLink>
            <NavLink to='../fullBasicDocx'>
              <Button text="Save and Next" />
            </NavLink>
          </div>
        </div>
      </div>

    </>
  )
}

export default CreateWallet2