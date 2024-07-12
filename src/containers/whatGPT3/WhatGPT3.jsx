import React from 'react'
import './WhatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wGPT3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art language processing AI developed by OpenAI. It is designed to understand and generate human-like text based on the input it receives."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 can generate human-like responses for customer service and conversational agents."/>
        <Feature title="Knowledge" text="GPT-3 can summarize large volumes of texts and extract key information"/>
        <Feature title="Education" text="GPT-3 can create quizzes, provide explanations, and answer educational questions."/>
      </div>
    </div>
  )
}

export default WhatGPT3