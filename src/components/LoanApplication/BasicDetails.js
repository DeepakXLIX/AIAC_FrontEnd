import React from 'react'
import '../dist/BasicDetails.css'
import Button from './Button'
import { NavLink } from 'react-router-dom'

function BasicDetails() {
    return (
        <div id='basicDetails'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Basic Details</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Company Name <span>*</span></label>
                            <input type="text" placeholder='Google' required />
                        </form>
                    </div>
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Industry</label>
                            <select name="" id="">
                                <option value="OtherServices" >Other Services</option>
                                <option value="Service1">Service1</option>
                                <option value="Service2">Service2</option>
                                <option value="Service3">Service3</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Director Name <span>*</span></label>
                            <input type="text" placeholder='Floyd Miles' required />
                        </form>
                    </div>
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Industry</label>
                            <select name="" id="">
                                <option value="1 Year">1 Year</option>
                                <option value="2 Year">2 Year</option>
                                <option value="3 Year">3 Year</option>
                                <option value="4 Year">4 Year</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Address<span>*</span></label>
                            <input type="text" placeholder='Google Address' required />
                        </form>
                    </div>
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Size of Organisation</label>
                            <select name="" id="">
                                <option value="10+">10+ </option>
                                <option value="20+">20+ </option>
                                <option value="30+">30+ </option>
                                <option value="40+">40+ </option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Phone Number<span>*</span></label>
                            <input type="text" placeholder='+91 76010123459' required />
                        </form>
                    </div>
                    <div className="common-cls col-6">
                        <form action="">
                            <label >ABN<span>*</span></label>
                            <input type="text" placeholder='3654736576' required />
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <form action="">
                            <label >Email<span>*</span></label>
                            <input type="text" placeholder='abcd@gmail.com' required />
                        </form>
                    </div>
                    <div className="common-cls col-6  ">
                        <p>Does this company fall under an ultimate holding company? If yes, an independent review must be manually conducted.*</p>
                        <div className="wrapper-text">
                            <div class="form-check  ">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check ">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <NavLink to='../createWallet1'>
                    <Button text="Save and Next" />
                </NavLink>
            </div>
        </div>
    )
}

export default BasicDetails