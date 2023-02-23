import "./index.css"
function LightBulb1(props) {
  function buttonClick(){
    props.isLightOn1(!props.setIsLightOn1) 
  }
    const file1 = props.isLightOn1 ? 'light_on.png' : 'light_off.jpg'
    
    return (
        <>
          <img src={file1} onClick={buttonClick} className="light" />
        </>
    )
}    
export default LightBulb1