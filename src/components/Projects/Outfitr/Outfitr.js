import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class Outfitr extends Component {

  render() {
    const pStyles = require('../Projects.scss');
    const rStyles = require('./Outfitr.scss');
    const olympus = require('../../../../static/outfitr/outfitr_screenshot.jpeg');


    return (
      <div>
        <Helmet title="TheRunners"/>
        <div className={rStyles.landing_wrapper}>
          <div className={pStyles.article_info}>
            <img src={olympus} className={pStyles.article_image} />
            <h1 className={pStyles.article_title}>Outfitr</h1>
            <p className={pStyles.article_subtitle}>Fashion Application</p>
            <p className={pStyles.article_subtitle}><b>Role: </b>Director, Game Designer, Technical Artist, Programmer, Modeler, Texturer, Animator</p>
            <p className={pStyles.article_subtitle}><b>Tools: </b>Java, Node.js, AWS, PostgreSQL</p>
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
