import React from 'react'
import './Features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: "Natural Language Understanding",
    text: "ChatGPT can comprehend and process human language, making it capable of understanding context and responding appropriately."
  },
  {
    title: "Text Generation",
    text: "GPT-3 can generate coherent and contextually relevant text, enabling it to create essays, stories, and dialogues."
  },
  {
    title: "Conversational Abilities",
    text: "ChatGPT can engage in interactive conversations, answering questions, and maintaining dialogue flow."
  },
  {
    title: "Knowledge Access",
    text: "GPT-3 has access to a vast amount of information and can provide detailed answers and explanations on a wide range of topics."
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into the Future Today and Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features