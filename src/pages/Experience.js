import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";//the above imported timeline css can be imported here incase we thought to modify
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#42215e"> {/*school experience*/}

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2021-Present"
        iconStyle={{background: "#cfa053", color:"#fff"}}
        icon={<WorkIcon/>}>
          <h3 className="vertical-timeline-element-title">
            TCS, Bangalore
          </h3>
          <p> Python Developer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2016-2020"
        iconStyle={{background: "#42215e", color:"#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
            ANITS, Andhra University, Visakhapatnam
          </h3>
          <p> Engineering, EC</p>
          <p>Percentage: 84%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2014-2016"
        iconStyle={{background: "#42215e", color:"#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
            Pragati, Prathipadu, Andhra Pradesh
          </h3>
          <p> Intermediate</p>
          <p>Percentage: 98%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2013-2014"
        iconStyle={{background: "#42215e", color:"#fff"}}
        icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
            Minerva, Prathipadu, Andhra Pradesh
          </h3>
          <p> 10th Standard</p>
          <p>CGPA: 9.2</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience