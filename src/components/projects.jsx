import React, { Component } from 'react'
import jsonResponse from '../data/projects'
import { Link } from 'react-router-dom'

export default class Projects extends Component {
	loadData = () => JSON.parse(JSON.stringify(jsonResponse));

	render() {
		let { projects } = this.loadData().data;
		let newArray = [];
		console.log(projects.length)
		while (projects.length) {
			newArray.push(projects.splice(0, 3));
		}

		let renderElement = newArray.map((array, index) =>
			<div key={index} className="row">
				{array.map((project) => !project.hasOwnProperty("link") ?
					<div key={project.id} className="col-sm-4">
						<Link to={`${this.props.match.url}/${project.id}`} target="_blank">
							<div key={project.id} className="card text-white bg-primary mb-3">
								{/* <div className="card-header"> <i className={project.icon} aria-hidden="true"></i></div> */}
								<div className="card-body">
									<h5 className="card-title">{project.name}</h5>
								</div>
							</div>
						</Link>
					</div>
					:
					<div key={project.id} className="col-sm-4">
						<Link onClick={() => window.open(project.link)}>
							<div key={project.id} className="card text-white bg-primary mb-3">
								{/* <div className="card-header"> <i className={project.icon} aria-hidden="true"></i></div> */}
								<div className="card-body">
									<h5 className="card-title">{project.name}</h5>
								</div>
							</div>
						</Link>
					</div>

				)}
			</div>
		);

		return (
			<div className="conatiner" style={{ width: "80%", height: "50%", padding: "10px", margin: "auto" }}><div className="card text-left bg-secondary text-white" style={{ marginBottom: "10px" }}>
				<div className="card-body">
					<h3 className="text-white">Projects</h3>
				</div>
			</div>
				{renderElement}

			</div>)
	}
}
