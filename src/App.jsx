import { useState } from 'react'
import './App.css'
import {motion } from "framer-motion";
import Button from  './Components/Buttons.jsx';
import Row from './Components/rows.jsx';
import Screen from './Components/screen.jsx';
import Bs from './Components/bigbutton.jsx';
function App() {
  const [val,Setval]=useState(' ฅ^•ﻌ•^ฅ ');
  const handleButtonClick=(input) =>{ 
    if (val === '0' || val ===' ฅ^•ﻌ•^ฅ ') {
      Setval(input);
    } else {
      Setval(val + input);
    }
    console.log(val);
  }
  const Equals = () => {
    try {
      const result = eval(val);
      Setval(result.toString());
    } catch (error) {
      Setval('Error');
    }
  }
  const sign=()=>{
    // console.log(val);
    if (val[0]==='-'){
      Setval(val.substring(1));
    }
    else{
      Setval('-' + val);
    }
  }
  return (
    <>
    <div className='container'>
      <div className='calc'>
      <Screen> {val} </Screen>
        <Row>
          <Button indx={Math.random() * 5} id="grey" onClick={()=>Setval('0')}>AC</Button>
          <Button indx={Math.random() * 5} id="grey" onClick={() => {gitlink()}} ><svg id="git" style={{paddingTop:"4px",paddingLeft:"2.5px"}}height="56" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></Button>
          <Button indx={Math.random() * 5} id="grey" onClick={()=>sign()}>+/-</Button>
          <Button indx={Math.random() * 5} id="orange" onClick={() => handleButtonClick('/')} >/</Button>
        </Row>
        <Row>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('7')} >07</Button>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('8')}>08</Button>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('9')}>09</Button>
          <Button indx={Math.random() * 5} id="orange" onClick={() => handleButtonClick('*')}>X</Button>
        </Row>
        <Row>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('4')}>04</Button>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('5')}>05</Button>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('6')}>06</Button>
          <Button indx={Math.random() * 5} id="orange" onClick={() => handleButtonClick('-')} >-</Button>
        </Row>
        <Row>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('1')}>01</Button>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('2')}>02</Button>
          <Button indx={Math.random() * 5} onClick={() => handleButtonClick('3')}>03</Button>
          <Button indx={Math.random() * 5} id="orange" onClick={() => handleButtonClick('+')} >+</Button>
        </Row>
        <Row>
          <Bs indx={Math.random() * 5} onClick={() => handleButtonClick('0')}>0</Bs>
          <Button  indx={Math.random() * 5} onClick={() => handleButtonClick('.')}>.</Button>
          <Button indx={Math.random() * 5} id="orange" onClick={() => Equals()}>=</Button>
        </Row>
      </div>
    </div>
    </>
  )
}

function gitlink(){
  window.open("https://github.com/amoreX", "_blank");
}

export default App
