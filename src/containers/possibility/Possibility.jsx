import React from 'react'
import './Possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility image"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possiblities are beyond your imagination</h1>
        <p>ChatGPT offers vast possibilities, from enhancing customer support with real-time, accurate responses to assisting in education by providing explanations and generating study material. It can streamline content creation, automate routine tasks, and facilitate creative writing, making it a versatile tool for businesses, educators, and individuals alike.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility