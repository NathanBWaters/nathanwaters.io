import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class JumpstartGUI extends Component {

  render() {
    const pStyles = require('../Projects.scss');
    const rStyles = require('./JumpstartGUI.scss');
    const olympus = require('../../../../static/outfitr/outfitr_screenshot.jpeg');


    return (
      <div>
        <Helmet title="JumpstartGUI"/>
        <div className={rStyles.landing_wrapper}>
          <div className={pStyles.article_info}>
            <img src={olympus} className={pStyles.article_image} />
            <h1 className={pStyles.article_title}>JumpstartGUI</h1>
            <p className={pStyles.article_subtitle}>DevOps Automation Tool</p>
            <p className={pStyles.article_subtitle}><b>Role: </b>Lead Engineer, DevOps Engineer</p>
            <p className={pStyles.article_subtitle}><b>Tools: </b>React | Redux | Node.js | ESLint | AWS | Cloudformation |
             Splunk | Prometheus | Simian Army | Jenkins 2.0 | Elastic Container Service</p>
          </div>
        </div>

        <div className={pStyles.article_center}>
          <div className={pStyles.article_content}>

            <h2>Coming Soon!</h2>
          </div>
        </div>
      </div>
    );
  }
}
