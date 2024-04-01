import React from 'react'
import '../dist/ApplicationPreview.css'
import FilledBasicDetails from './FilledBasicDetails'
import Button from './Button'

function ApplicationPreview() {
    return (
        <div className='applicationPreview'>
            <div className="container">
                <h1>Application Preview</h1>
                <FilledBasicDetails />
                <Button text={"Back"} />
            </div>
        </div>
    )
}

export default ApplicationPreview