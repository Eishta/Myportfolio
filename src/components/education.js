import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default class Sidebar extends Component {
   render() {
      return (
         <div className="container-fluid" style={{ textAlign: "left", margin: "80px", width: "90%" }}>
            <div className="row">
               <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <h2 className="mb-5">Education</h2>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div>
                     <div>
                        <h4 className="mb-0">Working with Sopra Steria</h4>
                        <span className="text-primary">November 2017 - Present</span>
                        <p>I joined Sopra Steria as a Junior Software Developer in the ISOCEL team. Working as a Senior Software Developer, my major part of the work is to create sustainable and flexible Ember Js UI pages. I am also exploring the other frontend libraries and  technology like React.js and Node.js</p>
                     </div>
                     <div>
                        <h4 className="mb-0">Graduate from KUK </h4>
                        <span className="text-primary">2013-2017</span>
                        <p>I completed my B.tech from Seth Jai Prakash Mukand Lal Inst. of Eng. and Tech. in 2017. I have learnt courses like DSA, OOPs, Computer Networks, IOTover the years and have better understanding of these subjects.</p>
                     </div>
                     <div>
                        <h4 className="mb-0">Primary and Higher Education</h4>
                        <span className="text-primary">2003-2015</span>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry &amp; Maths with 84 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>)
   }
}
