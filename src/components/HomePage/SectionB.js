import '../dist/SectionB.css'
function SectionB({ heading = "Heading", conWidth = "auto", content = "Content", }) {
    return (
        <div id='sectionB'>
            <div className='container'>
                <div className='inside-sectionB'>
                    <h1>{heading}</h1>
                    <p style={{ maxWidth: `${conWidth}` }}>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default SectionB