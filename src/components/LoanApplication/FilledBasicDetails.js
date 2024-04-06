import React from 'react';
import walletImg from '../../assest/AIACHomePageIMG/Loan application/imgExp.png'
import '../dist/FilledBasicDetails.css'
import Button from './Button';
import { NavLink } from 'react-router-dom';

const FilledBasicDetails = () => {
    let FilledData = {
        BasicDetails: {
            "Company Name": "Decrypt Block",
            "Director Name": "Floyd Miles",
            "ABN Number": 6367467356,
            "Address": " Mohali, punjab",
            "Company Phone": 8168810549,
            "Company Email": "Floydmiles @gmail.com",
            "Industry": "Education and training",
            "Years in Operations": 1,
            "Size of Organization": "> 10",
            "Does this company fall under an ultimate holding company ? If yes, an independent review must be manually conducted.*": "Yes"
        },
        BasicDocuments: {
            "Balance Sheet": "Balance Sheet.png",
            "Tax Return": "Balance Sheet.png",
            "Bank Statement": "Balance Sheet.png",
            "Recent BAS": "Balance Sheet.png"
        }
        ,
        StakeholderDetails: {
            "Accountant": "xgfsfdg",
            "Appointed R&D Consultant": "sfdgsdfh",
            "Licence": "6367467356",
            "ABN/ACN": "43656546",
            "Company": "sghgjytdf"
        }
    }

    return (
        <div className='filledBasicDetails'>
            <div className="container">
                {/* basic Details */}
                <div className="row">
                    <div className="col-12">
                        <h2>Basic Details</h2>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Company Name</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Company Name']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Director Name</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Director Name']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>ABN Number</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['ABN Number']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Address</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Address']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Company Phone</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Company Phone']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Company Email</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Company Email']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Industry</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Industry']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Years in Operations</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Years in Operations']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Size of Organization</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Size of Organization']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Does this company fall under an ultimate holding company ? If yes, an independent review must be manually conducted.*</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.BasicDetails['Does this company fall under an ultimate holding company ? If yes, an independent review must be manually conducted.*']}</p>
                    </div>
                </div>


                {/* Basic Documents */}
                <div className="row">
                    <div className="col-12">
                        <h2>Basic Doucuments</h2>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Balance Sheet</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <img className='img-fluid' src={walletImg} alt="" />
                        <p>{FilledData.BasicDocuments['Balance Sheet']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Tax Return</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <img className='img-fluid' src={walletImg} alt="" />
                        <p>{FilledData.BasicDocuments['Tax Return']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Bank Statement</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <img className='img-fluid' src={walletImg} alt="" />
                        <p>{FilledData.BasicDocuments['Bank Statement']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Recent BAS</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <img className='img-fluid' src={walletImg} alt="" />
                        <p>{FilledData.BasicDocuments['Recent BAS']}</p>
                    </div>
                </div>


                {/* Stakeholder Details */}
                <div className="row">

                    <div className="col-12">
                        <h2>Stakeholder Details</h2>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Accountant</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.StakeholderDetails['Accountant']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Appointed R&D Consultant</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.StakeholderDetails['Appointed R&D Consultant']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Licence</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.StakeholderDetails['Licence']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>ABN/ACN</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.StakeholderDetails['ABN/ACN']}</p>
                    </div>
                    <div className="property  col-12 col-md-6">
                        <p>Company</p>
                    </div>
                    <div className="value  col-12 col-md-6">
                        <p>{FilledData.StakeholderDetails['Company']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilledBasicDetails;
