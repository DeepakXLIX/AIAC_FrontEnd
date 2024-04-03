import React from 'react'
import '../dist/Overview.css'
import editSymbol from '../../assest/AIACHomePageIMG/edit.png'

function Overview() {
    return (
        <div className='overview'>
            <div className="container">
                <h2>Project Details</h2>
                <div className="data">
                    <div className="wrapper">
                        <p>Objective</p>
                        <p>No objective added yet</p>
                    </div>
                    <div className="wrapper">
                        <p>Hypothesis</p>
                        <p>No objective added yet</p>
                    </div>
                    <div className="wrapper">
                        <p>Description</p>
                        <p>No description added yet</p>
                    </div>
                </div>
                <h2>New Knowledge</h2>
                <div className="data">
                    <div className="wrapper">
                        <p>Nothing to show</p>
                    </div>
                </div>
                <div className="btn-wrapper">

                    <button className='btn  rounded-pill'>
                        <img src={editSymbol} alt="" />Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Overview;