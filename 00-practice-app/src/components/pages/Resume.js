import React from 'react';
import resumeOne from '../assets/images/newResume.pdf'

export default function Resume() {
  return (
    <div>
    <iframe src={resumeOne} width= "100%" height= "600px"></iframe>
    </div>
  );
}
