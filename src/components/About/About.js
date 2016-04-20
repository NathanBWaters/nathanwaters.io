import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class About extends Component {

  render() {
    const styles = require('./About.scss');
    return (
      <div className={styles.aboutMe}>
        <Helmet title="About"/>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={3} className={styles.projectTab}>
              {/* Holds my twitter, linkedin, and github links */}
              <h4> 1) Inventor </h4>
              <h4> 2) Software Engineer </h4>
              <h4> 3) VFX Artist </h4>
              <p> In that order </p>
            </Col>
            <Col xs={12} md={7} className={styles.projectTab}>
              {/* Holds my twitter, linkedin, and github links */}
              <h4> About Me </h4>
              <p>I like working hard on inspiring projects where I am learning a tremendous amount each day.</p>

            </Col>
            <Col xs={12} md={1} className={styles.projectTab}>
              {/* Holds my twitter, linkedin, and github links */}
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Github</p>
              <p>Resume</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
