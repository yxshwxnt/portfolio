import React from 'react'
import Timeline from './Timeline';
import Skillbar from './Skillbar';


const Resume = () => {
  return (
    <> 
    <div className='header'>
      <Timeline head='education' p1='' p2='if you see us ' p3=''/>
      <Timeline head='Experience' p1='' p2='' p3=''/>
    </div>
    <div className="skills">
      <Skillbar/>
    </div>
    </>
  )
}

export default Resume
