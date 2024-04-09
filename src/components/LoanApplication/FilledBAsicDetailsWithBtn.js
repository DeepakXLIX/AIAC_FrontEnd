import React from 'react'
import FilledBasicDetails from './FilledBasicDetails'
import { NavLink } from 'react-router-dom'
import Button from './Button'

import '../dist/FilledBasicDetailsWithBtn.css'

function FilledBAsicDetailsWithBtn() {
   
    return (
        <div className='filledBasicDetailsWithBtn'>
            <FilledBasicDetails />
            <div className="container">

                <div className="wrapper">
                    <NavLink to='../fullBasicDocx'>
                        <Button text={"Back"} bgPar={"#FAFAFA24"} textColor={"#FAFAFA"} />
                    </NavLink>
                    <NavLink to='../../applicationSubmitted'>
                        <Button text={"Save and Next"} />
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default FilledBAsicDetailsWithBtn