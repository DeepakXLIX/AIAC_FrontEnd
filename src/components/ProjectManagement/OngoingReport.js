import '../dist/OngoingReport.css'
import addImg from '../../assest/AIACHomePageIMG/plus.png'
import Button from 'components/LoanApplication/Button'



function OngoingReport() {

    return (
        <div className='ongoingReport'>
            <div className="container">
                <h2>Quarterly Insights (Current Year)</h2>
                <div className="row">
                    <div className="common-cls col-6">
                        <p>First Quarterly Report</p>
                    </div>
                    <div className="common-cls col-6">
                        <div className="img-wrapper">
                            <img src={addImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <p>Second Quarterly Report</p>
                    </div>
                    <div className="common-cls col-6">
                        <div className="img-wrapper">
                            <img src={addImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <p>Third Quarterly Report</p>
                    </div>
                    <div className="common-cls col-6">
                        <div className="img-wrapper">
                            <img src={addImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="common-cls col-6">
                        <p>Fourth Quarterly Report</p>
                    </div>
                    <div className="common-cls col-6">
                        <div className="img-wrapper">
                            <img src={addImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="btn-wrapper">
                    <Button text={"Save"} />
                </div>

                <h2>Operational Updates (Weekly)</h2>
                <p>Year - 2023-2024</p>

                <div className="con">
                    <div className="wrapper">
                        <div className="wrapper-child">
                            <p>January</p>
                        </div>
                        <div className="wrapper-child">
                            <p>February</p>
                        </div>
                        <div className="wrapper-child">
                            <p>March</p>
                        </div>
                        <div className="wrapper-child">
                            <p>April</p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-child">
                            <p>May</p>
                        </div>
                        <div className="wrapper-child">
                            <p>June</p>
                        </div>
                        <div className="wrapper-child">
                            <p>July</p>
                        </div>
                        <div className="wrapper-child">
                            <p>August</p>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-child">
                            <p>September</p>
                        </div>
                        <div className="wrapper-child">
                            <p>October</p>
                        </div>
                        <div className="wrapper-child">
                            <p>November</p>
                        </div>
                        <div className="wrapper-child">
                            <p>December</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OngoingReport