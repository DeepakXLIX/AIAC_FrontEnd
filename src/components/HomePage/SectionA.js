import '../dist/SectionA.css';
import Vector from '../../assest/AIACHomePageIMG/HomeImg/Vector.png'
function SectionA() {
    return (
        <div id='sectionA'>
            <div className='container'>
                <div className='row'>
                    <div className='common-cls col-12 col-md-6 '>
                        <h1>Experience Excellence with <span>Our Innovative</span> Service with AIAC .</h1>
                        <p>Embark on a transformative journey and unlock a realm of excellence with AIAC. Our innovative services reimagine collaboration, seamlessly connecting graduates, universities, and industry partners. Dive into a world where every interaction sparks innovation, enriches education, and propels real-world progress. With AIAC, experience a service that transcends boundaries, fostering a culture of excellence that propels you into a future of limitless possibilities.</p>
                    </div>
                    <div className='common-cls col-12 col-md-6 '>
                        <div className='Inner-wrapper'>
                            <img className="img-fluid" src={Vector} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionA;