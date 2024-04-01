import React from 'react';
import Allsvgs from 'svgs';
import '../dist/ApplicationSubmitted.css'
import Button from './Button';

const ApplicationSubmitted = () => {
    return (
        <div className='applicationSubmitted'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wrapper">
                            {Allsvgs[0]}
                            <h2>
                                Congratulation <br /> Your application is successfully submitted</h2>
                            <p>Your Application is Being Reviewed. Our Business and Super Admin teams are currently evaluating your submission. <br /> Please allow 4-7 business days for this process. We appreciate your patience and will update you shortly.</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="buttonWrapper">
                            <Button text={"View Status"} />
                            <Button text={"View Application"} />
                            <Button text={"Withdraw Application"} />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ApplicationSubmitted;