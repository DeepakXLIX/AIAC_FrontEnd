import SectionA from 'components/HomePage/SectionA'
import SectionB from 'components/HomePage/SectionB'
import React from 'react'
import { data } from 'data'
import AllCard from 'components/HomePage/AllCards'
import Timeline from 'components/HomePage/Timeline'

function FullHomePage() {
    return (
        <div>
            <SectionA />
            <SectionB heading={data.sectionBData[0].heading} content={data.sectionBData[0].content} conWidth={data.sectionBData[0].width} />
            <AllCard />
            <SectionB heading={data.sectionBData[1].heading} content={data.sectionBData[1].content} conWidth={data.sectionBData[1].width} />
            <Timeline />
        </div>
    )
}

export default FullHomePage