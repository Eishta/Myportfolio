import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

class NavBar extends React.Component {
  state = {
    collapsed: true,
  };
  toggleNavbar = () =>
    this.setState({
      collapsed: !this.state.collapsed,
    });
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top" >
          <span className="d-block d-lg-none">Eishta Mittal</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={`${process.env.PUBLIC_URL}/images/kanha.jpg`} alt="" />
          </span>
        </a>
        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className={`${classOne}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default NavBar