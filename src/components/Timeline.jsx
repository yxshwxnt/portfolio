import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'; 
import { Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import BadgeIcon from '@mui/icons-material/Badge';
import PropTypes from 'prop-types';  
import './resume.css'; 

export default function BasicTimeline(props) {
  return (
    <Timeline className='tline'>
      {/* Item header   */}
      <TimelineItem className={'timeline-first'}> 
        <TimelineSeparator>
          <TimelineDot className={'timeline-first-dot'}><BookIcon/></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography variant="h6" className='timeline-header'><h3>{props.head}</h3></Typography></TimelineContent>
      </TimelineItem>

      {/* Item Normal   */}
      <TimelineItem>
        <TimelineSeparator  className={"seperator-padding"}>
          <TimelineDot className={'timeline-dot'}></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {props.p1} <br />
          {props.year1} <br />
          {props.branch1} <br />
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={'timeline-dot'}></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {props.p2} <br />
          {props.year2} <br />
          {props.branch2}
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={'timeline-dot'}></TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          {props.p3} <br />
          {props.year3}
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}