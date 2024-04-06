import React from 'react'
import '../dist/StakeHolderDetails.css'
import Button from './Button'
import { NavLink } from 'react-router-dom'

function StakeHolderDetails() {
    return (
        <div className='stakeHolderDetails'>
            <div className="container">
                <div className="row">
                    <div className="heading col-12 ">
                        <h2>Stakeholders Details</h2>
                    </div>
                    <div className="common-cls col-12 col-md-6 ">
                        <p>Accountant <span>*</span></p>
                        <input type="text" placeholder='Karan Aujala' required />
                    </div>
                    <div className="common-cls col-12 col-md-6 ">
                        <p>Appointed R&D Consultant* <span>*</span></p>
                        <input type="text" placeholder='Some Consultant' required />
                    </div>
                    <div className="common-cls col-12 col-md-6 ">
                        <p>Company* <span>*</span></p>
                        <input type="text" placeholder='Decrypt Block' required />
                    </div>
                    <div className="common-cls col-12 col-md-6 ">
                        <p>Tax Agent Registration Number <span>*</span></p>
                        <input type="text" placeholder='6524653' required />
                    </div>
                    <div className="common-cls col-12 col-md-6 ">
                        <p>ABN/ACN <span>*</span></p>
                        <input type="text" placeholder='246572465765' required />
                    </div>
                </div>
                <div className="btnWrapper">

                    <NavLink to='../fullBasicDocx'>
                        <Button text={"Back"} bgPar={"#FAFAFA24"} textColor={"white"} />
                    </NavLink>

                    <NavLink to='../filledBasicDetails'>
                        <Button text={"Save and Next"} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default StakeHolderDetails