import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Heading() {
    return (
       <header> 
           <h1> TicTacToe </h1>
        </header>
    )
}

function Square() {
    return (
        <button type="button"></button>
    )
}


function Board() {
    return (
       <div>
         <canvas id="board" width="500" height="500"></canvas>
         <div id="squarebox">
             <Square />
             <Square />
             <Square />
             <br/>
             <Square />
             <Square />
             <Square />
             <br />
             <Square />
             <Square />
             <Square />             
         </div>
        </div>
    )
}

function TicTacToe() {
    return (
        <div>
        <Heading />
        <Board />
        </div>
    )
}

ReactDOM.render(
    <TicTacToe />,
    document.getElementById('root')
);