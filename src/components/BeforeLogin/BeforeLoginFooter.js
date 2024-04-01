import React from 'react'
import '../dist/BeforeLoginFooter.css'

function BeforeLoginFooter() {
    return (
        <div className='beforeLoginFooter'>
           <div className="container">
            <div className="row">
                <div className="common-cls col-4">Terms & Conditions</div>
                <div className="common-cls col-4">FAQs</div>
                <div className="common-cls col-4">Privacy Policy</div>
            </div>
           </div>
        </div>
    )
}

export default BeforeLoginFooter