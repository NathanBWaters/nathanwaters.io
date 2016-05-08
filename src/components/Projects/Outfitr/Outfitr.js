import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class Outfitr extends Component {

  render() {
    const pStyles = require('../Projects.scss');
    const rStyles = require('./Outfitr.scss');
    const olympus = require('../../../../static/outfitr/outfitr_screenshot.jpeg');
    const badResult1 = require('./BadResult1.png');


    return (
      <div>
        <Helmet title="TheRunners"/>
        <div className={rStyles.landing_wrapper}>
          <div className={pStyles.article_info}>
            <img src={olympus} className={pStyles.article_image} />
            <h1 className={pStyles.article_title}>Outfitr</h1>
            <p className={pStyles.article_subtitle}>Fashion Application</p>
            <p className={pStyles.article_subtitle}><b>Role: </b>Software Engineer, DevOps Engineer, Photographer</p>
            <p className={pStyles.article_subtitle}><b>Tools: </b>Java, Node.js, AWS, PostgreSQL</p>
          </div>
        </div>

        <div className={pStyles.article_center}>
          <div className={pStyles.article_content}>

          <h2>Introduction</h2>

          <p>Fall of my senior year at the University of Texas at Austin, I was tasked with creating
          an Android application for my mobile development class.  I love being at the intersection
          of art and technology, and the idea of exploring how to best digitally represent fashion
          interested me.  The goal of solving “fit” online has been tried hundreds of times and still is
          not solved.  Many great ideas out there but not one has taken the market. </p>

          <p>Creating an application to allows users to find their style and clothes that fit them requires
           determine the answer to two problems:</p>
          <ol>
            <li>The ideal visual representation / presentation of the clothing for the users to
             best see how the clothes look and fit on their body.</li>
            <li>The best method of digitization to achieve the first goal.</li>
          </ol>

          <p>In answering first question, I imagined an application that would let me see how the clothes
          would fit on my body quickly, on my own time, and from all angles.  I would also like to see how
          the clothes fit on me in different poses and animations.  That cuts out the following:</p>

          <ol>
            <li>Taking out large chunks of my time to go to a designated spot like a mall or shopping center.</li>
            <li>Only being able to see how the clothes look on someone else with another body type / style.</li>
            <li>Two-dimensional representations</li>
          </ol>

          <p>The answering of the second question proved to be too intensive for the two months
          that I was allotted to tackle the project.  I experimented with 3D imagery using tools
           like Microsoft Kinect, Photogrammetry, and the results were humorous but disappointing. </p>

          <figure>
            <img src={badResult1} alt="Bad Result 1" />
            <figcaption>Trying to use Skanect.</figcaption>
          </figure>

          <p>I jumped back to 2D for the sake of an MVP to test my product.</p>

          <p>This allowed for the following application to be developed.</p>

          <h2>Tools Used</h2>
          <p>Outfitr was a great entry point into the incredible technology available with AWS. Route53,
          Elastic Beanstalk, and PostgreSQL hosted on …. is a powerful, scalable, and
          inexpensive (especially when you’re at the MVP stage) combo that quickly provide great results. </p>

          <h2>Challenges to Overcome</h2>
          <ul>
            <li><b>Data modeling</b></li>
            <li><b>Node.js</b> - I’m heavily considering re-writing the entire backend in Golang.  I love backend Golang development.</li>
            <li><b>Layering Images</b> - The app can look very solid like in the above Gif.  But here’s the application going very wrong...</li>
            <li><b>Scaling</b> - 2D doesn’t scale very well.  Tons of images.
            Let’s do some math if we wanted to show 2D images from a 360 point of view.
            How about if we want to show how a large shirt would look on a smaller body?
            Hello Combinatorial Explosion my old friend.</li>
            <li><b>Time Consuming</b> - Shlep.  Photographing the clothes is time consuming.
            Fortunately it’s pretty easy to automate the rest using Photoshop using Actions.
            Shout out to Adobe for making incredible software.</li>
          </ul>

          <h2>Feedback</h2>
          <p>The response I have received so far from Outfitr has been tremendous and very helpful.
           I was able to pitch it to investors at SXSW and have received a handful of offers from people
           wanting to invest… which is kind of crazy.</p>

           <p>In reality, the response from users has been a range of lukewarm to ecstatic.  Which is fair!
           I personally am not satisfied with the quality of the application quite yet and looking to take
           all of the feedback to move it in a better direction.  For me, that direction seems to be
           3D. With a ton of reading, experimentation, and improved tools I’m thinking I’m getting closer
           to the initial vision.</p>

          <h2>Lessons Learned</h2>
          <ul>
            <li>
              <h4><b>Ask for help.</b></h4>
              <p>	I reached out to one incredibly talented software engineer from UT Austin named Nick Shelton.
              He definitely guided me in the right direction and helped me understand the ecosystem of 3D
              imagery much better.  You can find him at nshelton.net</p>
            </li>
            <li>
              <h4><b>Learning rigorously > working late hours.</b></h4>
              <p>	This has been proven to me time and time again.  What used to take me a month to set
              up now takes me a day, and that’s because I’ve invested time into learning my tools
               and languages.  Practice and hard work helps but there are tools and resources out
               there that can cut your work in half.</p>
            </li>
            <li>
              <h4><b>Automate everything</b></h4>
              <p>If you do it more than once (maybe twice), automate it.
              It will save you time in the long run and you’ll learn valuable DevOps skills along the way</p>
            </li>
            <li>
              <h4><b>Talk to users</b></h4>
              <p>Its really encouraging when people like what you have built.  It is also really encouraging
              when people do <i>not</i> like your applicatoin and tell you ways to fix it so they might then like it.</p>
              <p>Some techniques I like to use when showing off my application:</p>
              <ul>
                <li>“My friend made this app”. You’re looking for the harsh truths.
                Nobody wants to criticize your idea in front of you, but they’ll be far more honest anonymously.</li>
                <li>Don’t tell them anything about it</li>
                <li>Notice what they don’t do just as much as what they do.</li>
                <li>Ask questions that don’t guide towards an obvious answer.
                Don’t ask them to choose between two things.  Their thinking might be outside of your box.
                Limiting them between your provided two options inherently limits outside perspective.</li>
              </ul>
            </li>
          </ul>

          <h2>Moving Forward</h2>
          <p>To reach the vision that I initially set out to achieve with Outfitr is going to
          require overcoming a formidable learning curve. Currently studying Machine Learning,
          Computer Vision, and Graphics (specifically Three.js) to take Outfitr as a product to the next level.</p>

          <p>Let me know if you have any feedback on Outfitr by reaching out to me via email</p>
          </div>
        </div>
      </div>
    );
  }
}
