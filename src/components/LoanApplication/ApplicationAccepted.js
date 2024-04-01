import React from 'react';
import '../dist/ApplicationAccepted.css'
import Allsvgs from 'svgs';
import Button from './Button';

const ApplicationAccepted = () => {
    return (
        <div className='applicationAccepted'>
            <div className="container">
                <div className="wrapper">
                    {Allsvgs[0]}
                    <h2>Your application is accepted.</h2>
                    <p>Congratulations! Your application has been reviewed and accepted by our administration team.
                        <br /> Welcome onboard!!</p>
                    <Button  text={"Start Journey"}/>
                </div>
            </div>
        </div>
    );
}

export default ApplicationAccepted;
