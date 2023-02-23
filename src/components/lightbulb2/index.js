import "./index.css"
function LightBulb2(props) {
  function buttonClick(){
    props.isLightOn2(!props.setIsLightOn2) 
  }
    const file2 = props.isLightOn2 ? 'light_on.png' : 'light_off.jpg'
    
    return (
        <>
          <img src={file2} onClick={buttonClick} className="light" />
        </>
    )
}    
export default LightBulb2