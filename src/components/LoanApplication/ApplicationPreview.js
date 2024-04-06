import React from 'react'
import '../dist/ApplicationPreview.css'
import FilledBasicDetails from './FilledBasicDetails'
import Button from './Button'
import { NavLink } from 'react-router-dom'

function ApplicationPreview() {
    return (
        <div className='applicationPreview'>
            <div className="container">
                <h1>Application Preview</h1>
                <FilledBasicDetails />
                <NavLink to='../applicationSubmitted'>
                <Button text={"Back"} />
                </NavLink>
            </div>
        </div>
    )
}

export default ApplicationPreview