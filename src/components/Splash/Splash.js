import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Parallax, Background } from 'react-parallax';

export default class Splash extends Component {
  render() {
    const styles = require('./Splash.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.project}>
        <Helmet title="Splash"/>

        {/* div wrapping parallax to be size of viewport */}
        <Parallax className={styles.parallax} strength={300}>
					<Background>
              <img style={{width: 800, height: 600}} src="http://media.mnn.com/assets/images/2014/04/swan.jpg"/>
					</Background>
          <div>
					<h1>A collection of textile samples lay spread out on the table ...</h1>
          </div>
				</Parallax>
      </div>
    );
  }
}
