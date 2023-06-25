// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { useEffect } from 'react';

function App() {


const areEq = (acts, wins) => {
  const check = acts.length >= wins.length && wins.every((number) => acts.includes(number));;
  return check;
}


const winCombs = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

let win_x=[];
let win_o=[];
let check_x=false;
let check_o=false;

const [swit, setSwit] = useState({
  stat: false,
  cells: [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  chars: ['', '', '', '', '', '', '', '', '', '', ],
  winner: '',
});



const handleClick = (event) => {
  const key = parseInt(event.target.getAttribute('key-key'));

  setSwit((prev) => {
    const storArr = [...prev.cells];
    const storChars = [...prev.chars];

    if (storArr[key] === 0) {
      storArr[key] = 1;
      storChars[key] = prev.stat ? 'o' : 'x';
    
      
    } 


    win_x= storChars.reduce((acc,char,ind) => {
      if (char === 'x') {acc.push(ind)}
      return acc;
      },[])
      
    win_o= storChars.reduce((acc1,char1,ind1) => {
      if (char1 === 'o') {acc1.push(ind1)}
      return acc1;
      },[])
      
    
    check_x = winCombs.reduce((acc2, num2) => {
      if (areEq(win_x, num2)) {
        acc2=true;
      }
      return acc2;
    }, false)
  
    check_o = winCombs.reduce((acc3, num3) => {
      if (areEq(win_o, num3)) {
        acc3=true;
      }
      return acc3;
    }, false)

    
    let team = '';

    if (check_x ) {
      team = 'x';
      check_o=false;
     
      // win_o=[];
    }
    if (check_o ) {
      team = 'o';
      check_x=false;
      
      // win_x=[];
    }


    return {
      ...prev,
      stat: storArr[key]-prev.cells[key] ? !prev.stat : prev.stat,
      cells: storArr,
      chars: storChars,
      winner: team,
    };
    
    
  });


  
};

const handleButton = () => {
  setSwit({
  cells: [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  chars: ['', '', '', '', '', '', '', '', '', '', ],
  winner: '',
  })
}

const noth = () => {};


return (
<div>
<p>{swit.winner==='x' ? 'team x wins!' : ''}{swit.winner==='o' ? 'team o wins!' : ''}</p>
<table>
  <tr>
    <td key-key='0' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[0]}</td>
    <td key-key='1' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[1]}</td>
    <td key-key='2' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[2]}</td>
  </tr>
  <tr>
  <td key-key='3' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[3]}</td>
  <td key-key='4' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[4]}</td>
  <td key-key='5' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[5]}</td>
  </tr>
  <tr>
  <td key-key='6' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[6]}</td>
  <td key-key='7' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[7]}</td>
  <td key-key='8' onClick={swit.winner === '' ? handleClick : noth}>{swit.chars[8]}</td>
  </tr>
</table>
<button onClick={handleButton}>New game</button>
</div>
)

}

export default App;


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

