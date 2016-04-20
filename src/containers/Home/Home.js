import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Splash, ProjectDashboard, About } from '../../components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        {/* div wrapping parallax to be size of viewport */}
        <Splash />
        <About />
        <ProjectDashboard />

      </div>
    );
  }
}
