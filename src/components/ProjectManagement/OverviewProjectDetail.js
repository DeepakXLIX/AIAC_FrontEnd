import React from 'react'
import '../dist/OverviewProjectDetail.css'

function OverviewProjectDetail() {
    return (
        <div className='overviewProjectDetail'>
            <div className="container">
                <h2>Project Details</h2>
                <div className="wrapper">
                    <p>Objective</p>
                    <textarea id="w3review" name="w3review" rows="8" cols="50"></textarea>
                </div>
                <div className="wrapper">
                    <p>Hypothesis</p>
                    <textarea id="w3review" name="w3review" rows="8" cols="50"></textarea>
                </div>
                <div className="wrapper">
                    <p>Description</p>
                    <textarea id="w3review" name="w3review" rows="8" cols="50"></textarea>
                </div>
            </div>
        </div>
    )
}

export default OverviewProjectDetail;