import '../dist/TimelineCard.css';
function TimelineCard({ alignment, month, active }) {
  return (
    <div className="timelineCard">
      <div className={`content ${alignment} ${(active != -1) ? "active" : ""}`}>
        <h2>{month}</h2>
        <ul>
          <li>Introduction of transformative research initiatives.</li>
          <li> Allocation of resources fr innovative projects.</li>
          <li> Kickoff events and announcements to engage the research community.</li>
          <li> Establishment of goals for research outcomes.</li>
          <li>Collaboration with academic and industry partners for research support.</li>
        </ul>
      </div>
    </div >
  )
}

export default TimelineCard;