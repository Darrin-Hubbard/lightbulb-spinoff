import './index.css'
function LightSwitch(props) {
    function buttonClick(){
        props.setIsLightOn(false)     
    }
    return(
        <>
          <button className='lightswitch' onClick={buttonClick}>Turn On</button>
        </>
    )
}
export default LightSwitch