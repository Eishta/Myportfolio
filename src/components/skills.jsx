import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
export default class Skills extends Component {
render() {
return (
<div className="conatiner" style={{width: "80%", height: "50%", padding: "10px", margin: "auto"}}>
<div className="card text-left bg-secondary text-white" style={{marginBottom: "10px"}}>
<div className="card-body">
   <h3 className="text-white">Programing Languages and Tools</h3>
</div>
</div>
<div className="card-deck">
   <div className="card text-white bg-primary mb-3">
      <div className="card-header"> <i className="fab fa-facebook-f" aria-hidden="true"></i></div>
      <div className="card-body">
         <h5 className="card-title">Web Development</h5>
         <p className="card-text">I have experience building websites using JavaScript,React,HTML,CSS</p>
      </div>
   </div>
   <div className="card bg-primary text-white mb-3">
      <div className="card-header"> <i className="fab fa-facebook-f" aria-hidden="true"></i></div>
      <div className="card-body">
         <h5 className="card-title">Data Structures &amp; Algorithms</h5>
         <p className="card-text">As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
      </div>
   </div>
   <div className="card bg-primary text-white mb-3">
      <div className="card-header"> <i className="fab fa-facebook-f" aria-hidden="true"></i></div>
      <div className="card-body">
         <h5 className="card-title">Tools</h5>
         <p className="card-text">Working experience in Visual Studio Code, Eclipse, GIT</p>
      </div>
   </div>
</div>
</div>
)
}
}