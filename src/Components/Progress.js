import React from "react";
import { ProgressBar } from "react-bootstrap";

const Progress = ({percentage}) => {
  return (
   <ProgressBar max={100} now={percentage} label={`${percentage}%`}/>
  )
}

export default Progress;