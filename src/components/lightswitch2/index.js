import './index.css'
function LightSwitch2(props) {
    function buttonClick(){
        props.setIsLightSwitchOn2(!props.isLightSwitchOn2)
        props.setIsLightOn2(!props.isLightOn2)
        props.setIsInnerTextOn2(!props.isInnerTextOn2)    
    }
    const style = props.isLightSwitchOn2 ? 'lightswitch-off' : 'lightswitch'
    const innerText = props.isInnerTextOn2 ? 'Turn Off' : 'Turn On'
    
    return(
        <>
          <button className={style} onClick={buttonClick}>{innerText}</button>
        </>
    )
}
export default LightSwitch2