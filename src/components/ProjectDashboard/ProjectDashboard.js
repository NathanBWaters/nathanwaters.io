import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { LinkContainer } from 'react-router-bootstrap';
import NavItem from 'react-bootstrap/lib/NavItem';


export default class ProjectDashboard extends Component {
  render() {
    const styles = require('./ProjectDashboard.scss');
    const runners = require('../../../static/crucible/RunnersPosterPhotoshopEdit.jpg');
    const outfitr = require('../../../static/outfitr/outfitr_screenshot.jpeg');
    const jumpstart = require('../../../static/jumpstart/square_form.png');
    const godash = require('../../../static/godash/godash_code.png');
    const websiteLogo = require('../../../static/logo/Logo.png');
    return (
      <div>
        <Helmet title="ProjectDashboard"/>
        <p></p>
        <br />
        <h1 className={styles.title}>Projects</h1>

        <Grid>
          <Row className="show-grid">
            {/* Row 1 - Left Column */}
            <LinkContainer to="/projects/the_runners">
              <NavItem eventKey={3} className={styles.no_list}>
                <Col xs={12} sm={6} md={4} className={styles.projectTab}>

                  <h4> The Runners </h4>
                  <img src={runners}/>
                  <p className="about">Video game I led with other talented engineers and artists</p>
                  <div className="toolsWrapper">
                    <p className="toolsList"><b>Tools: </b>Unity3D | Autodesk Maya | C# | Photoshop </p>
                  </div>
                </Col>
              </NavItem>
            </LinkContainer>

            {/* Row 1 - Middle Column */}
            <LinkContainer to="/projects/outfitr">
              <NavItem eventKey={3} className={styles.no_list}>
                <Col xs={12} sm={6} md={4} className={styles.projectTab}>
                  <h4> Outfitr </h4>
                  <img src={outfitr}/>
                  <p>Created fashion application that allows you to mix and match clothes to find your style</p>
                  <div className="toolsWrapper">
                    <p className="toolsList"><b>Tools: </b>AWS | Node.js | Android | PostgreSQL</p>
                  </div>
                </Col>
              </NavItem>
            </LinkContainer>

            <LinkContainer to="/projects/go_algo">
              <NavItem eventKey={3} className={styles.no_list}>
                <Col xs={12} sm={6} md={4} className={styles.projectTab}>
                  <h4> Go-Algo </h4>
                  <img src={godash}/>
                  <p>The Missing Go Library</p>
                  <div className="toolsWrapper">
                    <p className="toolsList"><b>Tools: </b>Golang</p>
                  </div>
                </Col>
              </NavItem>
            </LinkContainer>

          </Row>

          <Row className="show-grid">

            {/* Row 2 - Left Column */}
            <LinkContainer to="/projects/personal_website">
            <NavItem eventKey={3} className={styles.no_list}>
              <Col xs={12} sm={6} md={4} className={styles.projectTab}>
                <h4> Website </h4>
                <img src={websiteLogo}/>
                <p>The website you are currently looking at! Click the Github
                icon on the top right to see the source code.</p>
                <div className="toolsWrapper">
                  <p className="toolsList"><b>Tools: </b>React | Redux | Node.js | ESLint | AWS</p>
                </div>
              </Col>
              </NavItem>
            </LinkContainer>

            {/* Row 2 - Middle Column */}
            <LinkContainer to="/projects/jumpstart_gui">
            <NavItem eventKey={3} className={styles.no_list}>
              <Col xs={12} sm={6} md={4} className={styles.projectTab}>
                <h4> Jumpstart GUI </h4>
                <img src={jumpstart}/>
                <p>Led the development of application created for Booz Allen Hamilton that
                allows new teams to have a customizable DevOps
                Architecture for each of their microservices using a simple form.</p>
                <div className="toolsWrapper">
                  <p className="toolsList"><b>Tools: </b>React | Redux | Node.js | ESLint | AWS | Cloudformation |
                   Splunk | Prometheus | Simian Army | Jenkins 2.0 | Elastic Container Service</p>
                </div>
              </Col>
              </NavItem>
            </LinkContainer>

            <Col xs={12} sm={6} md={4} className={styles.projectTab}>
              <h4> More </h4>
              <p>More coming soon!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
