import React from 'react'
import '../dist/ApplicationApproved.css'
import approvedImg from '../../assest/AIACHomePageIMG/Loan application/approve.png'
import mark from '../../assest/AIACHomePageIMG/Loan application/mark.png'
import Button from './Button'

function ApplicationApproved() {
    return (
        <div className='applicationApproved'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="wrapper">
                            <img className='img-fluid' src={approvedImg} alt="" />
                            <h2>Congratulation <br />Your application has been Approved</h2>
                            <p>Great news! We’re thrilled to inform you that your loan application has been approved. The approved <br /> loan amount will be credited to your wallet within the next 24 to 48 hours.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="common-clsA col-12 col-md-6">
                        <p><img src={mark} alt="" />Previous Year Balance Sheet.</p>
                    </div>
                    <div className="common-clsA col-12 col-md-6">
                        <p><img src={mark} alt="" />Previous Year Balance Sheet.</p>
                    </div>
                </div>
                <Button text={"View Application"} />
            </div>
        </div>
    )
}

export default ApplicationApproved