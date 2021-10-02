import React from 'react';

import { contributingData } from "./contributingData.js";
import ListStepsData from "./ListStepsData.js";
import TitleContent from "./TitleContent.js";

import './Beginners.css';
import githubImage from '../../images/github-light.png';

export default function Beginners() {
  return (
    <div>
      <p className="BeginnersLinks__text">
        New to Github and Open Source Contributions?
      </p>
      <div className="BeginnersLinks__links">
        <a
          href="https://github.com/Girlscript-Chapter-Bilaspur/Front-End-Hackathon-Resources/tree/master/Fifth%20Session"
          target="_blank"
          rel="noreferrer"
          className="BeginnersLinks__github-link"
        >
          <img src={githubImage} alt="github link" />
          Learn Github
        </a>
        <a
          href="https://opensource.guide/how-to-contribute/"
          target="_blank"
          rel="noreferrer"
          className="BeginnersLinks__open-source-link"
        >
          Learn How Open Source Work
        </a>
      </div>
      <div className="content">
      <TitleContent headerType="h2" content={contributingData.guideline} />
      <ListStepsData content={contributingData.steps_to_contribute} />
      <ListStepsData content={contributingData.steps_to_PR} />
      <TitleContent content={contributingData.updating_PR} />
      <TitleContent content={contributingData.creating_issues} />
    </div>
    </div>
  );
}