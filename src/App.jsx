import './App.css'
import { Footer, Header, Features, WhatGPT3, Blog, Possibility } from './containers';           //condenses 6 potential lines to just 1 line which obviously marks where the components come from
import { CTA, Brand, NavBar } from './components';                                              //condensing 3 lines to 1 and specifying where these components are coming from

function App() {

  return (
    <div className="App">
      <div className="gradient_bg">
        <NavBar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
