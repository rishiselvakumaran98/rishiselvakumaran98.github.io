import React, { Component} from 'react';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import "../assets/css/html-styles.css";
import Aboutme from '../components/AboutMe/AboutMe.component';
import SeparateMe from'../components/SeparateMe/Separateme.component';
import Skills from '../components/Skills/skills.component';
import ProjectListing from '../components/Projects/Projects.component';
import Experience from '../components/Experience/Experience.component';
import ContactMe from '../components/Contact/Contact.component';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (

		<Layout>
			<Helmet title="Rishi's Portfolio" />

			<Header />

			<Waypoint
			onEnter={this._handleWaypointEnter}
			onLeave={this._handleWaypointLeave}
			>
			</Waypoint>
			<Nav sticky={this.state.stickyNav} />

			<div id="main">
				<section id="intro" class="main">
				<Aboutme/>
				<SeparateMe/>
				</section>
				<ProjectListing/>
				{/* Second Section */}
				<Skills/>
				{/* <!-- Third Section --> */}
				<Experience/>
				{/* <!-- Fourth Section --> */}
				<ContactMe/>
			</div>
		</Layout>
    )
  }
}

export default Index
