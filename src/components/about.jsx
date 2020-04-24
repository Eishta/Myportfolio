import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

export default class About extends Component {
  render() {
    return (
      <div className="container" style={{textAlign: "left", margin: "80px", width: "90%"}}>
        <h1 className="mb-0">Eishta<span className="text-primary">Mittal</span></h1>
        <div><a href="mailto:eishtamittal@gmail.com">  eishtamittal@gmail.com</a></div>
        <br />
        <p className="lead mb-5">
          I am a computer grad student from Seth Jai Prakash Mukand Lal Institute of Engineering and Technology.
          I love exploring new technologies and often amazed by the progress we as a human species have made so far in the recent years.
           <br />I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistakes are very often.You can write me back if you spot any and don't want to live anymore :P
        </p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
          <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
          <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
        </div>
      </div>
    )
  }
}
