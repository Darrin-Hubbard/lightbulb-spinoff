import './index.css'
function LightSwitch3(props) {
    function buttonClick(){
        props.setIsLightSwitchOn3(!props.isLightSwitchOn3)
        props.setIsLightOn3(!props.isLightOn3)
        props.setIsInnerTextOn3(!props.isInnerTextOn3)    
    }
    const style = props.isLightSwitchOn3 ? 'lightswitch-off' : 'lightswitch'
    const file = props.isLightOn3 ? 'light_on.png' : 'light_off.jpg'
    const innerText = props.isInnerTextOn3 ? 'Turn Off' : 'Turn On'
    
    return(
        <>
          <button className={style} onClick={buttonClick}>{innerText}</button>
        </>
    )
}
export default LightSwitch3