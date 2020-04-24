import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div className="container-fluid" style={{textAlign: "left", margin: "80px", width: "90%"}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3">
            <h2 className="mb-5">Work And Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              <div>
                <h4 className="mb-0">Senior Software Developer/Sopra Steria, India</h4>
                <span className="text-primary">February 2020 - Present</span>
                <p>Responsible for development of application in project Isocel-E.leclerc, France</p>
                <span><b>Domain:</b> Retail</span>
                <br />
                <span>
                  <b>Description:</b>
               The project deals with end to end solution of design and development for retail system, the project follows DDD (Domain Driven Design) and a customized framework for a complete new-style design with React Js and Spring Boot.</span><br /><span><b>Responsibility</b></span><ul><li>Provide development and testing support to other team members.</li><li>Work closely with the Business team to ensure the coverage of scenarios.</li><li>Develop reusable components with test cases</li><li>Peer Code Review.</li></ul></div><div><h4 class="mb-0">Software Developer/Sopra Steria, India </h4><span class="text-primary">February 2018- February 2020</span><p>I completed my B.tech from Seth Jai Prakash Mukand Lal Inst. of Eng. and Tech. in 2017. I have learnt courses like DSA, OOPs, Computer Networks, IOTover the years and have better understanding of these subjects.</p><ul><li>Development of user-facing features using ReactJS, Swagger, YAML, JSON, XML</li></ul></div><div><h4 class="mb-0">Engineer Trainee/Sopra Steria, India</h4> <span class="text-primary">November 2017 – February 2018</span><p>Started career as Engineer trainee with Sopra Steria India, successfully completed professional training in business soft skills and React development</p><span>Learning:</span><ul><li> Business communication development</li><li> Email etiquettes and soft skill development</li><li> Understanding software lifecycle management</li><li> Basic learning in SQL and website development</li></ul></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
