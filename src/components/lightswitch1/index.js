import './index.css'
function LightSwitch1(props) {
    function buttonClick(){
        props.setIsLightSwitchOn1(!props.isLightSwitchOn1)
        props.setIsLightOn1(!props.isLightOn1)
        props.setIsInnerTextOn1(!props.isInnerTextOn1)    
    }
    const style = props.isLightSwitchOn1 ? 'lightswitch-off' : 'lightswitch'
    const innerText = props.isInnerTextOn1 ? 'Turn Off' : 'Turn On'
    
    return(
        <>
          <button className={style} onClick={buttonClick}>{innerText}</button>
        </>
    )
}
export default LightSwitch1