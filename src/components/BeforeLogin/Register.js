import React from 'react'
import '../dist/Register.css';
import Button from 'components/LoanApplication/Button';

function Register() {
    return (
        <div className='register'>
            <div className="container">
                <div className="con-wrapper">
                    <div className="wrapper">
                        <h2>Welcome</h2>
                        <p>Already have a account? <span>Log In</span></p>
                        <form action="">

                            <div className="cover">
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder='Deepak' required />
                            </div>

                            <div className="cover">
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder='Mehra' required />
                            </div>

                            <div className="cover">
                                <label htmlFor="">Email</label>
                                <input type="mail" placeholder='abc@gmail.com' required />
                            </div>


                            <input type="tel" placeholder='+91 8569898345' required />
                        </form>
                        <Button text={"Register Now"} padding={"10px 100px"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register