import React from 'react'
import '../dist/BasicDocuments.css'
import walletImg from '../../assest/AIACHomePageIMG/Loan application/imgExp.png'
import uploadImg from '../../assest/AIACHomePageIMG/Loan application/upload.png'
import Button from './Button'

function BasicDocuments() {

    return (
        <div className='basicDocuments'>
            <div className="container">
                <div className="row">
                    <div className=" common-cls col-12 col-md-6 ">
                        <div className="innerWrapper">
                            <img src={uploadImg} alt="" />
                            <h2>
                                Drag and Drop File <br />
                                Or
                            </h2>
                            <Button padding={"10px 100px"} text={"Browse File"} />
                        </div>
                    </div>
                    <div className=" common-cls col-12 col-md-6  text-white">
                        <div className="wrapper1">
                            <h2>Basic Documents</h2>
                            <p>Note: Kindly submit your document in one of the following formats: JPG, JPEG, PNG, XLSX, PDF or DOCX.</p>
                        </div>

                        <div className="wrapper2">
                            <h4>Previous Year Balance Sheet. <span>*</span></h4>
                            <img src={walletImg} alt="" />
                        </div>
                        <div className="wrapper3">
                            <div className="inside-wrapper">
                                <h4>Previous Year Company Tax Return Documents.<span>*</span></h4>
                                <p>Signed and lodged by an accountant</p>
                            </div>
                            <img src={walletImg} alt="" />
                        </div>
                        <div className="wrapper4">
                            <h4>Most Recent BAS <span>*</span></h4>
                            <img src={walletImg} alt="" />
                        </div>
                        <div className="wrapper5">
                            <h4>Last Year’s R&D Tax Incentive Application (Optional)</h4>
                        </div>
                        <div className="wrapper6">
                            <h4>Bank Statement (Last 3 months)
                                <span>*</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="common-clsA col-12 col-md-6"></div>
                    <div className="common-clsA col-12 col-md-6">
                        <div className="wrapper1">
                            <h2>Other Supporting Documents <br />(optional)</h2>
                            <p>Supporting Documents</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicDocuments