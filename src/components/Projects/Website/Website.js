import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class Website extends Component {

  render() {
    const pStyles = require('../Projects.scss');
    const rStyles = require('./Website.scss');
    // const websiteBG = require('./website_bg.png');
    const logo = require('../../../../static/logo/Logo.png');


    return (
      <div>
        <Helmet title="Website"/>

        <div className={rStyles.landing_wrapper}>
          <div className={pStyles.article_info}>
            <img src={logo} className={pStyles.article_image} />
            <h1 className={pStyles.article_title}>Website</h1>
            <p className={pStyles.article_subtitle}>Personal website and blog at nathanwaters.io</p>
            <p className={pStyles.article_subtitle}><b>Role: </b>Software Engineer</p>
            <p className={pStyles.article_subtitle}><b>Tools: </b>React, Redux, Node.js, AWS Elastic Beanstalk</p>
          </div>
        </div>

        <div className={pStyles.article_center}>
          <div className={pStyles.article_content}>

            <h2>Tools Used</h2>
            <p>I built this website using the following tools:</p>

            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React-Redux Template</li>
              <li>https://github.com/erikras/react-redux-universal-hot-example</li>
              <li>React-Router</li>
              <li>ESLint</li>
              <li>SCSS</li>
              <li>Webpack</li>
              <li>Node.js</li>
              <li>AWS Elastic Beanstalk</li>
              <li>Forever</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
