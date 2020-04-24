import React from 'react'
import Sidebar from './portfolio/sidebar'
import Introduction from './portfolio/introduction'
import About from './portfolio/about'
import Timeline from './portfolio/timeline'
import Skills from './portfolio/skills'

function AboutMe() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Sidebar />
                <div id="colorlib-main">
                    <Introduction></Introduction>
                    <About></About>
                    <Skills />
                    <Timeline></Timeline>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
