import { useState } from "react";
import LightBulb1 from "./components/lightbulb1/";
import LightBulb2 from "./components/lightbulb2/";
import LightBulb3 from "./components/lightbulb3/";
import LightSwitch from "./components/lightswitch/";
import LightSwitch1 from "./components/lightswitch1/";
import LightSwitch2 from "./components/lightswitch2/";
import LightSwitch3 from "./components/lightswitch3/";
import "./index.css"

function App() {
    const [isLightOn1, setIsLightOn1] = useState(false)
    const [isLightOn2, setIsLightOn2] = useState(false)
    const [isLightOn3, setIsLightOn3] = useState(false)
    const [isLightSwitchOn, setIsLightSwitchOn] = useState(false)
    const [isLightSwitchOn1, setIsLightSwitchOn1] = useState(false)
    const [isLightSwitchOn2, setIsLightSwitchOn2] = useState(false)
    const [isLightSwitchOn3, setIsLightSwitchOn3] = useState(false)
    const [isInnerTextOn, setIsInnerTextOn] = useState(false)
    const [isInnerTextOn1, setIsInnerTextOn1] = useState(false)
    const [isInnerTextOn2, setIsInnerTextOn2] = useState(false)
    const [isInnerTextOn3, setIsInnerTextOn3] = useState(false)
  

  return (
    <>
    <div className="columns">
      <div className="column is-full"><LightSwitch setIsLightSwitchOn={setIsLightSwitchOn} isLightSwitchOn={isLightSwitchOn} 
        setIsInnerTextOn={setIsInnerTextOn} isInnerTextOn={isInnerTextOn}
          setIsLightOn1={setIsLightOn1} setIsLightOn2={setIsLightOn2} setIsLightOn3={setIsLightOn3} isLightOn1={isLightOn1} isLightOn2={isLightOn2} isLightOn3={isLightOn3} /></div>
    </div> 
   <div className="columns">
      <div className="column is-one-third"><LightSwitch1 setIsLightSwitchOn1={setIsLightSwitchOn1} isLightSwitchOn1={isLightSwitchOn1} 
        setIsInnerTextOn1={setIsInnerTextOn1} isInnerTextOn1={isInnerTextOn1}
          setIsLightOn1={setIsLightOn1} isLightOn1={isLightOn1} /></div>  
      <div className="column is-one-third"><LightSwitch2 setIsLightSwitchOn2={setIsLightSwitchOn2} isLightSwitchOn2={isLightSwitchOn2} 
        setIsInnerTextOn2={setIsInnerTextOn2} isInnerTextOn2={isInnerTextOn2}
          setIsLightOn2={setIsLightOn2} isLightOn2={isLightOn2} /></div>
      <div className="column is-one-third"><LightSwitch3 setIsLightSwitchOn3={setIsLightSwitchOn3} isLightSwitchOn3={isLightSwitchOn3} 
        setIsInnerTextOn3={setIsInnerTextOn3} isInnerTextOn3={isInnerTextOn3}
          setIsLightOn3={setIsLightOn3} isLightOn3={isLightOn3} /></div>
   </div>
   <div className="columns">
      <div className="column is-one-third"><LightBulb1 isLightOn1={isLightOn1} /></div>
      <div className="column is-one-third"><LightBulb2 isLightOn2={isLightOn2} /></div>
      <div className="column is-one-third"><LightBulb3 isLightOn3={isLightOn3} /></div>
  </div>
    </>
  )
};
export default App;