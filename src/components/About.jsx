import { Box } from "@mui/material";
import React from "react";
import "./about.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <>
      <Box className="textarea">
        {/* <Navbar/>  */}
        <Box className="main-box">
          <div className="header">
            <h1>About me</h1> 
            <div className="bluehr"></div>
            <p>
              My name is Yashwant Lalwani, and I currently attend Nagpur's Shri
              Ramdeobaba College of Engineering and Management to pursue my
              undergraduate degree. I'm in my third year of electronic
              engineering right now. I'm intrigued in programming and coding. I
              am familiar with C++, Python, Java, and JavaScript. I also enjoy
              building websites, and my tech stack consists of the MERN Stack,
              Django (Python), and vanilla JS.
            </p>
            <p>
              In addition to my technical interests, I have additional ones. I
              like watching movies and TV shows(sitcoms mosty). I am also a
              massive fan of Formula 1 and football; these two activities take
              up the most of my Saturdays and Sundays.
            </p>
          </div>
          <div className="what">
            <h3>Achievments</h3>
            <Timeline className="tline">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={'timeline-dot'}/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h5>Finalist Smart India Hackathon '22</h5>
                  <p>
                    I was selected for The Grand Finale of SIH and alloted
                    Faridabad Nodal Center. My team had choosen the problem
                    statement to digitalize documents by means of OCR, which
                    comes under the Ministry Of Culture.We were the runners up
                    in our problem statement.
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className={'timeline-dot'} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h5>Manipal Hackathon '22</h5>
                  <p>
                    I took part in the Manipal Hackathon, where the issue
                    statement was to digitise parking spaces and create an
                    IOT-based project for managing parking spaces. a spot in the
                    parking lot.
                  </p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          <div className="interest">
            <h3>Interests</h3>
            <ul>
              <li className="int-li">
                <div className="row">
                <Button variant="primary" className="button">Football</Button>{' '}
                <Button variant="primary" className="button">Formula 1</Button>{' '}
                <Button variant="primary" className="button">Badminton</Button>{' '}
                <Button variant="primary" className="button">Gaming</Button>{' '}
                </div>
              </li>
              <li className="int-li">
                <div className="row">
                <Button variant="primary" className="button">Cricket</Button>{' '}
                <Button variant="primary" className="button">Music</Button>{' '}
                <Button variant="primary" className="button">Movies</Button>{' '}
                <Button variant="primary" className="button">Drawing</Button>{' '}
                </div>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default About;
