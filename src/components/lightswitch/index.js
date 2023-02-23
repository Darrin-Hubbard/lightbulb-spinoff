import './index.css'
function LightSwitch(props) {
    function buttonClick(){
        props.setIsLightSwitchOn(!props.isLightSwitchOn) 
        props.setIsInnerTextOn(!props.isInnerTextOn)
        props.setIsLightOn1(!props.isLightOn1)
        props.setIsLightOn2(!props.isLightOn2)
        props.setIsLightOn3(!props.isLightOn3)  
    }
    const style = props.isLightSwitchOn ? 'lightswitch-off' : 'lightswitch'
    const innerText = props.isInnerTextOn ? 'Turn Off' : 'Turn On'
    const file1 = props.isLightOn1 ? 'light_on.png' : 'light_off.jpg'
    const file2 = props.isLightOn2 ? 'light_on.png' : 'light_off.jpg'
    const file3 = props.isLightOn3 ? 'light_on.png' : 'light_off.jpg'

    return(
        <>
          <button className={style} onClick={buttonClick}>{innerText}</button>
        </>
    )
}
export default LightSwitch