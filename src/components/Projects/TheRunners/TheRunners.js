import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class TheRunners extends Component {

  render() {
    const pStyles = require('../projects.scss');
    const rStyles = require('./TheRunners.scss');
    const olympus = require('./olympus.png');
    const newman = require('./runnerschar.gif');
    return (
      <div>
        <Helmet title="TheRunners"/>
        <div className={rStyles.landing_wrapper}>
          <div className={pStyles.article_info}>
            <img src={olympus} className={pStyles.article_image} />
            <h1 className={pStyles.article_title}>The Runners</h1>
            <p className={pStyles.article_subtitle}>Video Game created in Unity3D</p>
            <p className={pStyles.article_subtitle}><b>Role: </b>Director, Game Designer, Technical Artist, Programmer, Modeler, Texturer, Animator</p>
            <p className={pStyles.article_subtitle}><b>Tools: </b>Unity3D, C#, Autodesk Maya, Adobe Photoshop</p>
          </div>
        </div>

        <div className={pStyles.article_content}>
          <p>The Runners was born out of curiousity on how to build a video game mixed with some for </p>
          <img src={newman}/>
          <p>asdfasdf</p>
        </div>

        {/* <div style={{backgroundImage: 'url(' + 'http://i.imgur.com/926CrCL.jpg' + ')'}} className={pStyles.header_container}>
          <div className={pStyles.black_overlay}>
            <h1 className={pStyles.article_title}>The Runners</h1>
          </div>
        </div> */}
        <p>errr</p>


        <p>Hello!</p>
        <iframe src="https://drive.google.com/file/d/0B14FG4S3JgjVTk5lZGZubjhCTEE/preview" className={pStyles.header_media}></iframe>
      </div>
    );
  }
}
