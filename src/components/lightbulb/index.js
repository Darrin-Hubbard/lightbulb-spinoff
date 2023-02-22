import "./index.css"
function LightBulb(props) {
  function buttonClick(){
    function buttonToggle() {
    props.setIsLightOn(false)
    }
  }
    const file = props.isLightOn ? 'light_off.jpg' : 'light_on.png'
    
    return (
        <>
          <img src={file} onClick={buttonClick} className="light" />
        </>
    )
}    
export default LightBulb