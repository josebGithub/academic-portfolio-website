import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../assets/css/experience.css';
import {MdWorkOutline} from 'react-icons/md';
import {IoSchoolOutline} from 'react-icons/io5';
import {FiBookOpen} from 'react-icons/fi'

const experience = () => {
  return (
    <section id='about'>
      <h5>My Experience Timeline</h5>
      <h2>My Experience Details</h2>
   
  <VerticalTimeline 
       className="vertical-timeline--animate vertical-timeline--one-column-left">
 
    <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
        date="Sept 2020 - Mar 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IoSchoolOutline  />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Boston University - MET</h4>
      <p>
        As a master student in Software Development, I did many projects throughout my academic years with new technologies, skills and programming languages as well as developed expertise in agile software development techniques.
      </p>
    </VerticalTimelineElement>

    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2013 - July- 2020"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FiBookOpen />}
  >
    <h3 className="vertical-timeline-element-title">Self-Study</h3>
    <h4 className="vertical-timeline-element-subtitle">Coursera</h4>
    <p>
      Finished the following courses from Coursera:<br/>
      1. Introduction to Software Testing - University of Minnesota.<br/>
      2. Programming Mobile Applications for ANdroid Handheld Systems - Univeresity of Maryland.<br/>
      3. Computing with Data Analysis - John Hopkins University<br/> 
      4. An Introduction to Interactive Programming in Python - Rice University
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aug 2019 - Jan 2021"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily: 'Poppins' }}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">Technical Recruiter</h3>
    <h4 className="vertical-timeline-element-subtitle">Eworld Solution Inc.</h4>
    <p>
      Identified and filled job openings and keeped records of applications. Communicated with the candidates and helped them to fill in the job openings. Developed and implemented the add-on google scripts for the management.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="June 2004 - Nov 2007"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily: 'Poppins' }}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">Application Software Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Natural Convergence Inc.(Broadview Network)</h4>
    <p>
      Designed and developed automated tools for the design group and product verification team. Designed and developed test automation tool for the web-based administration system of a carrier grade IP telephony service. Developed test plans and procedures to WebAdmin with different web traffic to provide comparative platform performance, performance testing and product scalability characterization. Analyst the results from the tests and generate reports to the management. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily: 'Poppins' }}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">Java Programmer(Contractor)</h3>
    <h4 className="vertical-timeline-element-subtitle">Isosceles Information Solutions Inc.(Canada)</h4>
    <p>
      A project contracted with Environmental Canada. Recoded the application from ground-zero. Gathered, analyzed user requirements, added features and enhancements to apply user requirements. Deployed and installed the application in different platforms.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2000 - 2001"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily: 'Poppins' }}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Sybridge Technologies Inc.(Canada)</h4>
    <p>
      Ported a carrier-grade B2B Bridging infrastructure system to Sun Solaris platform. Designed and developed new functionalities for the system. Participated in the design of sub-systems. Defined classes, interfaces, applications and implemented them based on design for a new subsystem. Designed and developed modules, features for inbound and outbound fax between SCO and Sun Solaris.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1998 - 2000"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily: 'Poppins' }}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer/Tester(Contractor/Subcontractor)</h3>
    <h4 className="vertical-timeline-element-subtitle">NewSys Solutions Limited(Canada)</h4>
    <p>
      1. Collected rquirements from users, analyzed them and applied them to the applications. Analyzed testing requirements and organized them into the documents. Wrote and executed test cases. Imported data and completed the data conversion from one platform to another.<br/>
      2. Converted the Inventory System to Year2000 compliance. Provided testing procedures and implemented the testing procedures for checking the convection.<br/>
      3. Solved the Year 2000 problem for the system and solved the problem of porting data in different platforms.

    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1995 - 1998"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily: 'Poppins' }}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title">Programmer/Programmer Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">In Hong Kong</h4>
    <p>
      Details is in my resume. Had worked in two banks in Hong Kong. Mainly designed , coded, specified, documented and supported the banking system.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1992 - 1994"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontFamily: 'Poppins'}}
    contentArrowStyle={{ borderRight: '15px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor Of Science</h3>
    <h4 className="vertical-timeline-element-subtitle">University Of Manitoba</h4>
  </VerticalTimelineElement>



</VerticalTimeline>
</section>

)
} 


export default experience