import React from 'react'
import ExperienceData from "../../data/experience.json";
import 'react-vertical-timeline-component/style.min.css';
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../assets/css/experience.css';
import {MdWorkOutline} from 'react-icons/md';
import {IoSchoolOutline} from 'react-icons/io5';
import {FiBookOpen} from 'react-icons/fi'

const experience = () => {
  return (
    <section id='experience'>
       <AnimationOnScroll animateIn="animate__fadeInLeftBig"> 
            <h5>My Experience Timeline</h5>
        </AnimationOnScroll>

          <VerticalTimeline 
            className="vertical-timeline--animate vertical-timeline--one-column-left">
 
            { ExperienceData.data.map((item) => {
                
              return (
             
                  <VerticalTimelineElement 
                    className={item.className}
                    contentStyle={{background: item.contentStyle.background, color: item.contentStyle.color}}
                    contentArrowStyle={{ borderRight: item.contentArrowStyle.borderRight }}
                    date= {item.date}
                    iconStyle={{ background: item.iconStyle.background, color: item.iconStyle.color}}
                    icon={  (item.icon ==="IoSchoolOutline") ?  <IoSchoolOutline/> :
                            (item.icon ==="FiBookOpen") ? <FiBookOpen/> :
                            (item.icon ==="MdWorkOutline") ? <MdWorkOutline/> :null}
                  >
                      
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.institution}</h4>
                    <p>
                      {item.description}
                    </p>
                  </VerticalTimelineElement>

                      )
                  })
            }

  
             
</VerticalTimeline>
</section>

)
} 

export default experience