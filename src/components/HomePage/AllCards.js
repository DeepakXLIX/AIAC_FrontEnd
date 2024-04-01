import Card from './Card'
import "../dist/AllCards.css";
import bgImg1 from '../../assest/AIACHomePageIMG/HomeImg/Rectangle1.png';
import bgImg2 from '../../assest/AIACHomePageIMG/HomeImg/Rectangle2.png';
import bgImg3 from '../../assest/AIACHomePageIMG/HomeImg/Rectangle3.png';
import bgImg4 from '../../assest/AIACHomePageIMG/HomeImg/Rectangle4.png';
import bgImg5 from '../../assest/AIACHomePageIMG/HomeImg/Rectangle5.png';
function AllCard() {
    const content = [
        {
            bgImg: bgImg1,
            title: "Empowering Research",
            content: "Increased AIAC funding enhances research capabilities, offering graduates hands-on experience in cutting-edge projects.",
        },
        {
            bgImg: bgImg2,
            title: "Promoting Collaboration",
            content: "Through AIAC, universities and industry create dynamic collaborations, providing students real-world exposure and networking opportunities.",
        },
        {
            bgImg: bgImg3,
            title: "Bridging Academia and Industry",
            content: "AIAC fosters a robust ecosystem, integrating academia and industry for mutual growth and graduate employability.",
        },
        {
            bgImg: bgImg4,
            title: "Fueling Commercialization",
            content: "Industry partnerships through AIAC allow practical application of academic research, nurturing entrepreneurial skills in graduates.",
        },
        {
            bgImg: bgImg5,
            title: "Access to Industry Pooled Fund",
            content: "AIAC's industry-contributed fund fuels accelerated innovation, providing students access to high-profile research projects."
        },

    ]


    return (
        <div id='allcards'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {content.map((card, i) => (
                            <div key={i}>
                                <Card bgImg={card.bgImg} title={card.title} content={card.content} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllCard;