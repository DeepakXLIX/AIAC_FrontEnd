import React from 'react'
import '../dist/BasicDetails.css'
import { Form, NavLink, redirect } from 'react-router-dom'

function BasicDetails() {

    return (
        <div id='basicDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Basic Details</h2>
                    </div>
                </div>
                <Form method='post' action='/loanApplication/basicDetails'>
                    <div className="row">
                        <div className="common-cls col-12 col-md-6">
                            <label >Company Name <span>*</span></label>
                            <input type="text" name='companyName' placeholder='Google' autoFocus required  />
                        </div>
                        <div className="common-cls col-12 col-md-6">
                            <label >Industry</label>
                            <select name="industry" id="">
                                <option value="OtherServices" >Other Services</option>
                                <option value="Service1">Service1</option>
                                <option value="Service2">Service2</option>
                                <option value="Service3">Service3</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="common-cls col-12 col-md-6">
                            <label >Director Name <span>*</span></label>
                            <input type="text" style={{ background: "transparent" }} name='directorName' placeholder='Floyd Miles' required  />
                        </div>
                        <div className="common-cls col-12 col-md-6">
                            <label >Years</label>
                            <select name="years" id="">
                                <option className='d' value="1 Year">1 Year</option>
                                <option className='d' value="2 Year">2 Year</option>
                                <option className='d' value="3 Year">3 Year</option>
                                <option className='d' value="4 Year">4 Year</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="common-cls col-12 col-md-6">
                            <label >Address<span>*</span></label>
                            <input type="text" name='address' placeholder='Google Address' required />
                        </div>
                        <div className="common-cls col-12 col-md-6">
                            <label >Size of Organization</label>
                            <select name="sizeOfOrganization" id="">
                                <option value="10+">10+ </option>
                                <option value="20+">20+ </option>
                                <option value="30+">30+ </option>
                                <option value="40+">40+ </option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="common-cls col-12 col-md-6">
                            <label >Phone Number<span>*</span></label>
                            <input type="text" name='phoneNumber' placeholder='+91 76010123459' required />
                        </div>
                        <div className="common-cls col-12 col-md-6">
                            <label >ABN<span>*</span></label>
                            <input type="text" name='Abn' placeholder='3654736576' required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="common-cls col-12 col-md-6">
                            <label >Email<span>*</span></label>
                            <input type="text" name='email' placeholder='abcd@gmail.com' required />
                        </div>
                        <div className="common-cls col-12 col-md-6 ">
                            <p>Does this company fall under an ultimate holding company? If yes, an independent review must be manually conducted.*</p>
                            <div className="wrapper-text">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small_scr">
                        <button>Save and Next</button>
                    </div>
                </Form>
            </div>
        </div >
    )
}

export default BasicDetails

export let details;
export const allBasicDetails = async ({ request }) => {
    const data = await request.formData();

    details = {
        companyName: data.get('companyName'),
        industry: data.get('industry'),
        directorName: data.get('directorName'),
        years: data.get('years'),
        address: data.get('address'),
        sizeOfOrganization: data.get('sizeOfOrganization'),
        phoneNumber: data.get('phoneNumber'),
        Abn: data.get('Abn'),
        email: data.get('email'),
        radio:data.get('exampleRadios')

    }
    
    console.log(details);
    return redirect('../createWallet1');
}