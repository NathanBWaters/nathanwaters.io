import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class TheRunners extends Component {

  render() {
    const pStyles = require('../Projects.scss');
    const rStyles = require('./TheRunners.scss');
    const olympus = require('./olympus.png');
    const newman = require('./runnerschar.gif');
    const storyline = require('./storyline.png');
    const research = require('./research.png');

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

        <div className={pStyles.article_center}>
          <div className={pStyles.article_content}>

            <p>The Runners was born out of curiosity on how to build a video game and how to create a world from scratch.</p>
            <p>I was blessed to have known some <a href="https://github.com/jkhust">incredibly </a>
              <a href="https://github.com/davidmfinol/">smart</a> <a href="https://github.com/thomascardwell7">
              and</a> <a href="https://www.youtube.com/channel/UC-B06UJxJ20HYv15lzrm9mA">talented</a> people who were up
              for the task as well as some wonderful mentors. &nbsp;Making a video game was challenging,
              and in my opinion it was far harder than making a film. &nbsp;What I got out of it was invaluable
              learning experience.</p>

            <figure>
              <img src={newman} alt="Newman 3D Model"/>
              <figcaption>Newman - main character of The Runners.  Untextured model</figcaption>
            </figure>
            <p>It was developed over the period of my junior year and ended with the tech lead graduating from UT Austin. &nbsp;</p>
            <h2>Beginning the Journey</h2>
            <p>The Runners began right before the summer of my junior year. &nbsp;I reached out for advice to <a href="http://gammaprogram.utexas.edu/about/the-team/">Professor Toprac</a>,
             head of Game and Mobile Media Applications at the University of Texas at Austin.
             &nbsp;He took me under his wing and in return I did <a href="https://drive.google.com/file/d/0B14FG4S3JgjVVnZjQVJIb2FjaU0/view">research</a> with him on
              3D video game development. &nbsp;The output was used for future teams developing three-dimensional video games,
              starting with the first 3D video game development at UT Austin in Spring 2014. &nbsp;</p>

            <figure>
              <img src={research} alt="Research" />
              <figcaption>Explaining the fundamentals to save future teams time. That way they have more time to make a better game!</figcaption>
            </figure>

            <h2>Scope</h2>
            <p>As a first time product developer I learned some valuable lessons in striving for a vision: it’s important to maintain
            a clear long-term vision but you must break down that vision into achievable milestones.  We made the rookie mistake of
            starting out the race shooting for the moon without focusing on first nailing the core of the gameplay</p>

            <figure>
              <img src={storyline} alt="WorldBuilding" />
              <figcaption>Worldbuilding. We were prepping for making the entire game</figcaption>
            </figure>

            <p>After some <del>consideration</del> months we realized we probably could not make a 2.5D game on the scale of Grand Theft Auto
            with a team of five people (and only 3 developers). &nbsp;So we tied up loose ends for the demo day at the end of
            the year and had the following product that I could not be more proud of:</p>
            <iframe src="http://www.youtube.com/embed/4rTT_eflPGs?autoplay=0" className={pStyles.header_media}></iframe>
            <h2>Conclusions</h2>
            <p>I am super grateful for the experience to have worked so tirelessly on a video game. &nbsp;Helped shape my career, introduced me to the power and fun of computer science,
            and taught me an immeasurable amount about making art. &nbsp;</p>
            <p>I now know the importance of three things:</p>
            <ul>
              <li>Learning constantly when tackling big projects</li>
              <li>Making a minimum viable product that people liked. &nbsp;Then progress.</li>
              <li>Whatever the project, understand the entire system. &nbsp;</li>
            </ul>
            <p><br/></p>
            <p><br/></p>
            <p><br/></p>
          </div>
        </div>
      </div>
    );
  }
}
