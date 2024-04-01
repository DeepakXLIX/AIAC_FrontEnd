import '../dist/Home.css';
import { data } from '../data'
import Header from "./Header";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import AllCards from "./AllCards";
import TimeLine from "./Timeline";
function Home() {
    return (
        <div >
            <Header />
            <div id='combined-wrapper'>
                <SectionA />
                <SectionB heading={data.sectionBData[0].heading} conWidth={data.sectionBData[0].width} content={data.sectionBData[0].content} />
            </div>
            <AllCards />
            <SectionB heading={data.sectionBData[1].heading} conWidth={data.sectionBData[1].width} content={data.sectionBData[1].content} />
            <TimeLine />
        </div>
    );
}

export default Home;
