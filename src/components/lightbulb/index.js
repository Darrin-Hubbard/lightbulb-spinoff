import "./index.css"
function LightBulb1(props) {
  function buttonClick(){
    props.isLightOn(!props.setIsLightOn) 
  }
    const file = props.isLightOn ? 'light_on.png' : 'light_off.jpg'
    
    return (
        <>
          <img src={file} onClick={buttonClick} className="light" />
        </>
    )
}    
export default LightBulb1