import React, { useState } from 'react';

import './style.css';
import Title from './components/Title';
import Button from './components/Button';
import { StyledButton } from './components/Button.style';

export default function App() {
  let name = 'Zeev';
  const [clickedOnce, setClickedOnce] = useState(false);

  // function clicked() {
  //   setClickedOnce((prevCheck) => !prevCheck);
  // }
  
  const clicked = () =>  {
    setClickedOnce((prevCheck) => !prevCheck);
  }



  return (
    <div className="content-area">
      <h1>Hello StackBlitz Starter !</h1>
      
      <Title name={name} />

      <StyledButton buttonLabel="Click here" backgroundColor="violet" />
      

      <button
        style={{ width: '80px', height: '50px' }}
        type="button"
        onClick={clicked}
      >
        {clickedOnce.toString()}
      </button>

      <div style={{ marginTop: '20px' }}>
        
        clicked - {clickedOnce.toString()}
      </div>
    </div>
  );
}


