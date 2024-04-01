import TimelineCard from './TimelineCard';
import '../dist/Timeline.css';
function Timeline() {
    let mon = new Date().getMonth();

    let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div id='main-wrapper'>
            <div className="outer-timeLinewrapper" style={{ height: '100%' }}>
                <div className="timeLine">
                    <div className="inside-timeLine">
                        {allMonths.map((item, index) => (

                            <TimelineCard key={index} alignment={(index % 2 == 0) ? "left" : "right"} month={item} active={(index == mon) ? index : -1} />
                        ))}
                    </div>
                </div>
                <ul id='circle-wrapper'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

    )
}

export default Timeline;

