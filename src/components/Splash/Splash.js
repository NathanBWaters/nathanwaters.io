import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Parallax, Background } from 'react-parallax';

export default class Splash extends Component {
  render() {
    const styles = require('./Splash.scss');
    const splash = require('../../../static/splash/splash_temp.png');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.project}>
        <Helmet title="Splash"/>

        {/* div wrapping parallax to be size of viewport */}
        <Parallax className={styles.parallax} strength={300}>
					<Background>
              <img src={splash}/>
					</Background>
          <div>
					<h1>A collection of textile samples lay spread out on the table ...</h1>
          </div>
				</Parallax>
      </div>
    );
  }
}
