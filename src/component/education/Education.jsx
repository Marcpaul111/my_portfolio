import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FcGraduationCap} from 'react-icons/fc'

const Education = () => {
  const educationInfo = [
    {
      year: "2022",
      school: "KodeGo Bootcamp",
      course: "Fullstack web development",
    },
    {
      year: "2018 - 2020",
      school: "Core Gateway College",
      course: "Bachelor of Science in Business Administration",
    },
    {
      year: "2016 - 2018",
      school: "IES",
      course: "Associate course in Business Management",
    },
  ];

  const colors = [
    '#2E0249',
    '#77D970',
    '#FF6D28',
    
  ]


  return (
    <div className="container" id="education">
      <div className="section-title">
        <h4>Education</h4>
        <span className="line"></span>
      </div>

      <VerticalTimeline lineColor='#570A57'>
        {educationInfo.map((info , index) => 
          <VerticalTimelineElement key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: colors[index], color: "#fff" }}
          contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
          iconStyle={{ background: colors[index], color: "#fff" }}
          icon={<FcGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">{info.year}</h3>
          <h4 className="vertical-timeline-element-subtitle">{info.school}</h4>
          <h4>{info.course}</h4>
        </VerticalTimelineElement>

        )}
         
      </VerticalTimeline>
    </div>
  );
};

export default Education;
