import React from "react";
import Timeline from "./Timeline";
import Skillbar from "./Skillbar";
import "./resume.css"; 
import { Box } from "@mui/material";

const Resume = () => {
  return (
    <>
      <Box className="main-box">
        <h1>Resume</h1>
        <div className="header">
          <Timeline
            head="Education"
            p1="Ramdeobaba College Of Engineering and
            Managment  | CGPA: 9.48"
            year1="2020-2024"
            branch1="Bachelor In Technology (Electronics)"
            p2="Hislop Junior College   |  Percentage: 85%"
            year2="2018-2020" 
            branch2="Physics, Chemistry, Maths, Computer Science"
            p3="Centre Point School,Katol Road   |   Percentage: 89%"
            year3="2007-2018"
            className="timeline education"
          />
          <Timeline
            head="Experience"
            p1="PrimaThink" 
            year1="Oct 22 - Jan 23"
            branch1="Worked on building an ecommerce website for cars, the website
            had its own admin panel for adding and updating
            products. The tech stack used in development is Django for
            backend and HTML/CSS for frontend"
            p2="Research Intern" 
            year2="Oct 22 - Presnet"
            branch2="I am currently doing a research intership under Prof. Lokesh
            Heda of Shri Ramdeobaba College of Engineering and
            Management. We are working on heart disease predictor
            for which we are using Machine Learning Techniques like
            Decision Tree, KNN and Random Forest Classifier."
            className="timeline experience"
          />
        </div>
        <div className="skills">
          <h3>My Skills</h3> 
          <div className="skills-box">
            <ul>
              <li> 
                <h4>React <span>60%</span></h4>
               <Skillbar val="60" className='skillbar'/>
              </li>
              <li> 
                <h4>C/C++ <span>90%</span></h4>
               <Skillbar val="90" className='skillbar'/>
              </li>
              <li> 
                <h4>TailwindCSS <span>65%</span></h4>
               <Skillbar val="65" className='skillbar'/>
              </li>
              <li> 
                <h4>Python <span>80%</span></h4>
               <Skillbar val="80" className='skillbar'/>
              </li>
              <li> 
                <h4>JavaScript <span>70%</span></h4>
               <Skillbar val="70" className='skillbar'/>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Resume;
