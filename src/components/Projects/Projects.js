import React from 'react'
import { Link } from 'react-router-dom';
import jsonResponse from '../../data/projects'

const Projects = ({ match }) => {
    let { projects } = jsonResponse.data;
    let newArray = [];
    while (projects.length) {
        newArray.push(projects.splice(0, 3));
    }
    console.log(newArray);
    let renderElement = newArray.map(array =>
        <div className="row row-pt-md">
            {array.map((project, index) => (<div className="col-md-3 text-center animate-box">
            <Link to={`${match.url}/${project.id}`} target="_blank">

                <div key={project.id} className={`services color-${index+3}`}>
                    <span className="icon">
                       {(index+1)%2 === 0 ? <i className="icon-bulb" /> :(index+1)%3 === 0 ? <i className="icon-phone3" /> : <i className="icon-data" />} 
                    </span>
                    <div className="desc">
                        <h3>{project.name}</h3>
                    </div>
                    
                </div>
                </Link>
            </div>))}
        </div>
    )
    return (
        // <div className="ui container">
        //     <h1>Projects</h1>
        //     <ul style={{ listStyleType: "none" }}>
        //         {projects.map(({ name, id }) => (
        //             <li key={id}>
        //                 <Link to={`${match.url}/${id}`}>{name}</Link>
        //             </li>
        //         ))}
        //     </ul>

        //     <hr />

        <div id="colorlib-page">
            <div id="container-wrap">
                <div id="colorlib-main">
                    <section className="colorlib-about" data-section="projects">
                        <div className="colorlib-narrow-content">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                    <span className="heading-meta">What I do?</span>
                                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                                </div>
                            </div>
                            {renderElement}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}


export default Projects
