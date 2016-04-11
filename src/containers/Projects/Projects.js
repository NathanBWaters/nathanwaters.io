import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Home extends Component {
  render() {
    const styles = require('./Projects.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.project}>
        <Helmet title="Projects"/>

        {/* div wrapping parallax to be size of viewport */}
        <p></p>
        <br />
        <h1>Projects2</h1>

        <Grid>
          <Row className="show-grid">
            {/* Row 1 - Left Column */}
            <Col xs={12} md={6}>
              Hello Left
            </Col>

            {/* Row 1 - Right Column */}
            <Col xs={12} md={6}>Hello Right</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
