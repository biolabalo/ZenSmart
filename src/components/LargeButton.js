
const  LargeButton = ({ text, bgColor }) =>  {
    return (
      <button className="btn"
       style={{
        backgroundColor: bgColor ? bgColor : '#0d6efd',
       }}
      >
        {text || "Close Shipment"}
      </button>
    );
  }

 
export default LargeButton;