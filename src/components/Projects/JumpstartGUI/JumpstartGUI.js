import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import ReactMarkdown from 'react-markdown';
// import Markdown2HTML from 'react-markdown-to-html';

export default class JumpstartGUI extends Component {

  render() {
    const pStyles = require('../Projects.scss');
    const rStyles = require('./JumpstartGUI.scss');
    const jumpstartGUI = require('../../../../static/jumpstart/square_form.png');


    return (
      <div>
        <Helmet title="JumpstartGUI"/>
        <div className={rStyles.landing_wrapper}>
          <div className={pStyles.article_info}>
            <img src={jumpstartGUI} className={pStyles.article_image} />
            <h1 className={pStyles.article_title}>JumpstartGUI</h1>
            <p className={pStyles.article_subtitle}>DevOps Automation Tool</p>
            <p className={pStyles.article_subtitle}><b>Role: </b>Lead Engineer, DevOps Engineer</p>
            <p className={pStyles.article_subtitle}><b>Tools: </b>React | Redux | Node.js | ESLint | AWS | Cloudformation |
             Splunk | Prometheus | Simian Army | Jenkins 2.0 | Elastic Container Service</p>
          </div>
        </div>

        <div className={pStyles.article_center}>
          <div className={pStyles.article_content}>
            <h2>Answering a Need</h2>

            <p>I’m incredibly grateful for my job at Booz Allen Hamilton and to be
            in its Strategy & Innovation Group.  I’m fortunate to be on the R&D team where we
            explore enterprise design patterns, simplify the complexities involved in micro service
            architecture, and detail the best practices / limitations of DevOps tools necessary for
            running, monitoring, updating large-scale production applications.</p>

            <p>Setting up the DevOps environment necessary requires a laundry list of portfolio management,
            monitoring, and pipeline tooling</p>

            <p>What’s humorous is that all of these tools are intended for helping teams move fast.
            They’re supposed to facilitate continuous deployment and micro service architecture,
            two paradigms intended to help you move fast.</p>

            <p>Yet all of these tools take a considerable amount of time to understand, setup,
            and maintain. Though this pays off in the long run, it’s a trying exercise to setup
            your DevOps environment when their are seemingly more pressing requirements for your
            application.</p>

            <p>At Booz Allen Hamilton, we have a lot of teams and a lot of clients want our expertise.
            It doesn’t scale well for each team to tackle the same problems over and over.  Our solution?</p>

            <p>JumpstartGUI</p>

            <p>The idea was tossed around the R&D group of couple of times, but after developing a
            MVP of the product over the weekend and presenting it to leadership, it really began
            to gain some traction.</p>

            <h2>Features</h2>

            <p>Jumpstart GUI automatically creates your DevOps environment and all you have to do
            is fill out a form. You fill out a section for the overall application and then a form
            for each of your micro services.  We then provide the following tools for your entire projects:</p>

            <ul>
              <li>AWS VPC for Production and Development Environment</li>
              <li>Route Table Configuration</li>
              <li>Route 53 DNS Name Configuration</li>
              <li>Simian Army *</li>
              <li>Splunk *</li>
              <li>ELK Stack *</li>
              <li>Prometheus  *</li>
              <li>Zipkin *</li>
              <li>Pager Duty *</li>
              <li>Necessary Default IAM Credentials</li>
            </ul>

            <p>All bullets with an asterisk are optional.</p>

            <p>For each micro service we provide:</p>

            <ul>
              <li>Route 53 subdomain name configuration</li>
              <li>Jenkins Pipeline 2.0 - configured with Github to kick off your pipeline on commit</li>
              <li>Autoscaling</li>
              <li>AWS Elastic Container Storage (later we will add the options for either Kubernetes or Mesosphere)</li>
            </ul>

            <p>The Jumpstart GUI is extensible beyond one use.  Once you’ve created the environment
            using JumpstartGUI, you’ll be able to monitor your application
            via two lenses: stack and micro service.</p>

            <p>See your application from the stack point of view provides a clear high-level
            overview of your DevOps environment.  You can see in what regions you’ve
            deployed your applications.</p>

            <p>The micro service view is highly important for an application and is the one
            stop shop for visualizing the health of your many micro services.
            There’s a quick view that shows the following information for each of your microservices</p>

            <ol>
              <li>Name</li>
              <li>Number of instances of your microservice</li>
              <li>Build History Summary</li>
              <li>Number of successful vs unsuccessful builds</li>
              <li>Brief overview of pervious 5 builds</li>
              <li>Pager Duty Contact</li>
            </ol>

            <p>Click on more information for any of the micro services will go further
            in-depth on the state of the micro service.</p>

            <h2>Alternatives</h2>
              <p>There’s a few alternatives to JumpstartGUI but they all either closed source or not quite what we’re looking for.</p>
              <ul>
                <li>SystemZ - By Spotify</li>
                <li>Rancher - by rancher.com </li>
              </ul>

            <h2>Closing</h2>
            <p>Like with everything, there’s a relevant kxcd commit for placing a layer on
            top of your entire DevOps layer and micro service architecture:</p>

            <p>The goals though are to increase visibility into the health and state
            of your application for everyone.  If one team keep failing in the canary
            release layer,  that’s a good sign that the team’s automated tests are not
            of a high enough quality and the errors should have been caught sooner before
            reaching a small percentage of users.  There’s a lot of big plans for JumpstartGUI
            and our clients are very excited to have such a robust DevOps environment setup
            for them in 30 minutes compared to months like before.</p>


          </div>
        </div>
      </div>
    );
  }
}
