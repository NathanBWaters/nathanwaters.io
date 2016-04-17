import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class ProjectDashboard extends Component {
  render() {
    return (
      <div>
        <Helmet title="ProjectDashboard"/>
        <p></p>
        <br />
        <h1>Projects2</h1>

        <Grid>
          <Row className="show-grid">
            {/* Row 1 - Left Column */}
            <Col xs={12} sm={6} md={4}>
              <h4> The Crucible </h4>
              <p>Video game I created</p>
            </Col>

            {/* Row 1 - Middle Column */}
            <Col xs={12} sm={6} md={4}>
              <h4> Outfitr </h4>
              <p>Fashion Startup</p>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <h4> Go-Dash </h4>
              <p>The Missing Go Library</p>
            </Col>
          </Row>
          <Row className="show-grid">
            {/* Row 1 - Left Column */}
            <Col xs={12} sm={6} md={4}>
              <h4> Website </h4>
              <p>Video game I created</p>
            </Col>

            {/* Row 1 - Middle Column */}
            <Col xs={12} sm={6} md={4}>
              <h4> Jumpstart GUI </h4>
              <p>Fashion Startup</p>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <h4> More </h4>
              <p>Check out my other projects!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
