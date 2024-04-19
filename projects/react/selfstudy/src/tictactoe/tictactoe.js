import {useState} from 'react';

function Cell({index, onCellClick}){
    return (
        <button data-index={index} className="square" onClick={onCellClick}>{cells[index]}</button>
    );
}

function Board({onCellClick}){
    return(
        <>
            <div className="board-row">
                <Cell index={0} onCellClick={onCellClick}></Cell>
                <Cell index={1} onCellClick={onCellClick}></Cell>
                <Cell index={2} onCellClick={onCellClick}></Cell>
            </div>
            <div className="board-row">
                <Cell index={3} onCellClick={onCellClick}></Cell>
                <Cell index={4} onCellClick={onCellClick}></Cell>
                <Cell index={5} onCellClick={onCellClick}></Cell>
            </div>
            <div className="board-row">
                <Cell index={6} onCellClick={onCellClick}></Cell>
                <Cell index={7} onCellClick={onCellClick}></Cell>
                <Cell index={8} onCellClick={onCellClick}></Cell>
            </div>            
        </>
    );
}

// These are shared by all the instances of the Game element
const cells = Array(9).fill(null);
const player = {
    current: 'X'
    ,change: function(){this.current = this.current === 'X' ? 'O' : 'X';}
};

const winningCombinations = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const hasWon = (currentPlayer, cells) => {
    for(let i = 0; i < winningCombinations.length; i++){
        const [a,b,c] = winningCombinations[i];
        if(cells[a] === currentPlayer && cells[b] === currentPlayer && cells[c] === currentPlayer){
            return true;
        }
    }

    return false;
};

let message = '';
let isGameOver = false;


export default function Game() {
    //const [cells, setCells] = useState(Array(9).fill(null));
    //const [renderer, setRender] = useState(true);
    const [status, setStatus] = useState(`Player ${player.current}`);

    
    //function refresh(){
    //    setRender(!renderer);
    //}

    function onCellClick(evt){
        if(isGameOver) return;
        //console.debug(evt.target.dataset.index);
        const index = evt.target.dataset.index;
        if(cells[index] !== null) return;

        cells[index] = player.current;          
        //console.debug(cells);
        //console.debug(player);
        
        if(hasWon(player.current, cells)){
            message = `Player ${player.current} has won!`;
            console.log(message);
            isGameOver = true;
            setStatus('GAME OVER!');
            return;
        }
        //refresh();
        player.change();
        setStatus(`Player ${player.current}`);
        
    }

    return (
        <div>
            <div>{status}</div>
            <div>{message}</div>
            <Board onCellClick={onCellClick}></Board>
        </div>
    );
}