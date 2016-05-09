import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class GoAlgo extends Component {

  render() {
    const pStyles = require('../Projects.scss');
    const rStyles = require('./GoAlgo.scss');
    const olympus = require('../../../../static/godash/godash_code.png');


    return (
      <div>
        <Helmet title="GoAlgo"/>
        <div className={rStyles.landing_wrapper}>
          <div className={pStyles.article_info}>
            <img src={olympus} className={pStyles.article_image} />
            <h1 className={pStyles.article_title}>Go-Algo</h1>
            <p className={pStyles.article_subtitle}>Algorithms Library for Golang</p>
            <p className={pStyles.article_subtitle}><b>Role: </b>Software Engineer</p>
            <p className={pStyles.article_subtitle}><b>Tools: </b>Golang</p>
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
