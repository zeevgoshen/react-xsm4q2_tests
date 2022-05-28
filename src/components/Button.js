import React from "react";


// export default function Button(props) {
//   return (
    
//       <button>Click it !</button>
      
//   );
// }


function Button({className, buttonLabel}) {
  return <button className={className}>{buttonLabel}</button>;
}
export default Button;