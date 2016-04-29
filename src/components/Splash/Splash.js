import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { Parallax, Background } from 'react-parallax';

export default class Splash extends Component {
  render() {
    const styles = require('./Splash.scss');
    const banner = require('../../../static/logo/Banner.png');
    // const splash = require('../../../static/splash/splash_temp.png');

    return (
      <div>
        <div>
          <Helmet title="Splash"/>
          <div className={styles.image_container}>
            <img src={banner} className={styles.banner}/>
          </div>
        </div>

        {/* div wrapping parallax to be size of viewport
        <Parallax className={styles.parallax} strength={300}>
					<Background>
              <div className={styles.black_background}>
                <img src={splash} className={styles.background}/>
              </div>
					</Background>
          <br />
          <br />
          <br />
          <br />
          <img src={banner} className={styles.banner}/>
          <br />
          <br />
				</Parallax>
        */}
      </div>
    );
  }
}
