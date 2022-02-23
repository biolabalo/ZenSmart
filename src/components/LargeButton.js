
const  LargeButton = ({ text, bgColor, clickHandler }) =>  {
    return (
      <button 
      className="btn"
       style={{
        backgroundColor: bgColor ? bgColor : '#0d6efd',
       }}
       onClick={()=>{
         if(clickHandler) return clickHandler()
       }}
      >
        {text || "Close Shipment"}
      </button>
    );
  }

 
export default LargeButton;