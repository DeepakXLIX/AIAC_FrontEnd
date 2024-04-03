import Button from 'components/LoanApplication/Button'
import '../dist/WorkOrders.css'
import downloadFolderIcon from '../../assest/AIACHomePageIMG/Project Management/downloadFolderIcon.png'
import downloadsIcon from '../../assest/AIACHomePageIMG/downloads.png'
function WorkOrders() {
    return (
        <div className='workOrders'>
            <div className="container">
                <div className="wrapper">
                    <Button text={"Template"} />
                    <Button text={"Submission"} bgPar={"rgba(255,255,255,0.14)"} textColor={"white"} />
                </div>
                <h2>Operational Updates (Weekly)</h2>
                <img src={downloadFolderIcon} alt="" />
                <div className="button-wrapper">
                    <button><img src={downloadsIcon} alt="" />Downloads</button>
                </div>
                <p>Download Form Template : <span>Get started by downloading our sleek and user-friendly form template. It's designed to make the process easy for you!</span></p>
                <p>Fill with Ease : <span>Take your time to fill in the required information. We've made it hassle-free to ensure a smooth experience.</span></p>
                <p>Submit for Validation : <span>Once you've completed the form, head over to the submission section. We're here to validate your submission promptly!</span></p>

                
            </div>
        </div>
    )
}

export default WorkOrders