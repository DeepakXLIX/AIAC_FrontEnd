import '../dist/Card.css';
import defaultImg from '../../assest/AIACHomePageIMG/HomeImg/Rectangle1.png';

function Card({ bgImg = defaultImg, title = "Empowering Research", content = "Increased AIAC funding enhances research capabilities, offering graduates hands-on experience in cutting-edge projects." }) {

    return (
        <div id='card'>
            <div className='row'>
                <div className='col'>
                    <div className="image-wrapper" style={{ backgroundImage: `url('${bgImg}')` }}>
                    </div>
                    <div className="content">

                        <h2>{title}</h2>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;