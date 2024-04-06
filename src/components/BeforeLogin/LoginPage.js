import React from 'react';
import '../dist/LoginPage.css'
import BeforeLoginFooter from './BeforeLoginFooter';
import Button from 'components/LoanApplication/Button';
const LoginPage = () => {
    return (
        <>
            <div className='loginPage'>
                <div className="container">
                    <div className="outsideWrapper">
                        <div className="wrapper">
                            <h2>AIAC Bridging <span>the gap between Industry</span> and Academia.</h2>
                            <p>AIAC's mission is to power the progress of scientific innovation by fostering synergistic partnerships between academia and industry. We aim to bridge the gap between these sectors by facilitating collaborative research, leveraging industry investments, and amplifying the collective resources and expertise at our disposal. Our  scientific breakthroughs that address contemporary industry needs and societal challenges.</p>
                        </div>
                    </div>
                    <div className="loginWrapper">
                        <div className="insideLoginWrapper">
                            <h2>AIAC Login</h2>
                            <p>Don’t have an account? <span>Register Now!</span></p>

                            <div className="to-center">
                                <div className="inputLoginWrapper">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="" id="" placeholder='abc@gmail.com' />
                                </div>

                                <div className="inputLoginWrapper">
                                    <label htmlFor="Password">Password</label>
                                    <input type="email" name="" id="" placeholder='***********' />
                                </div>
                                <div className="forgotPass">
                                    <p>Forget Password?</p>
                                </div>
                                <Button text={"Log In"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BeforeLoginFooter /></>
    );
}

export default LoginPage;
