import "./index.css"
function LightBulb3(props) {
  function buttonClick(){
    props.isLightOn3(!props.setIsLightOn3) 
  }
    const file3 = props.isLightOn3 ? 'light_on.png' : 'light_off.jpg'
    
    return (
        <>
          <img src={file3} onClick={buttonClick} className="light" />
        </>
    )
}    
export default LightBulb3