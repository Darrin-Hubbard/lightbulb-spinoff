import { useState } from "react";
import LightBulb from "./components/lightbulb/";
import LightSwitch from "./components/lightswitch/";
import "./index.css"

function App() {
  return (
    <>
    <div class="columns">
      <div class="column is-full"><LightSwitch /></div>
    </div> 
    <div class="columns">
      <div class="column is-one-third"><LightSwitch /></div>  
      <div class="column is-one-third"><LightSwitch /></div>
      <div class="column is-one-third"><LightSwitch /></div>
    </div>
    <div class="columns">
      <div class="column is-one-third"><LightBulb /></div>
      <div class="column is-one-third"><LightBulb /></div>
      <div class="column is-one-third"><LightBulb /></div>
    </div>
    </>
  )
};
export default App;
