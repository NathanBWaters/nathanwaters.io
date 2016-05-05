import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  render() {
    const styles = require('./About.scss');
    const profPic = require('../../../static/prof3.jpg');
    return (
      <div className={styles.aboutMe}>
        <div>
        <Helmet title="About"/>

        <div className={styles.flexContainer}>

            <div className={styles.picture}>
              {/* Profile Picture */}
              <img className={styles.centerImage} src={profPic}/>
            </div>
            <div className={styles.aboutContent}>
              {/* Main Content */}
              <h4 className={styles.secondaryText} textDecoration="underline">About Me</h4>
              <p style={{'color': '#f2f2f2', 'text-align': 'center'}}> Inventor&nbsp;  ●&nbsp; Software Engineer&nbsp;  ●&nbsp;  VFX Artist&nbsp;&nbsp;  (in that order)</p>
              <br />
              <p className={styles.mainText} >I aspire to make the world a better place
              through technology and art. I love realizing challenging projects where I learn a tremendous amount each day.
              Found that outlet first through filmmaking, then video game development, and now in software products.
              I graduated with honors from UT Austin studying media, computer science, and digital technology.
                It’s a great time for a hardworking geek to be alive.</p>

            </div>
            <div className={styles.socialLinks}>
              {/* Holds my twitter, linkedin, and github links */}
                <a href="https://www.linkedin.com/in/nathan-waters-79692652"><p className={styles.rightItems}><i className="fa fa-linkedin fa-lg"></i>&nbsp; LinkedIn</p></a>
                <a href="https://www.github.com/NathanBWaters"><p className={styles.rightItems}><i className="fa fa-github fa-lg"></i>&nbsp; Github</p></a>
                {/* <p className={styles.rightItems}><i className="fa fa-file fa-lg"></i>&nbsp; Resume</p> */}
            </div>

        </div>

        </div>
      </div>
    );
  }
}
