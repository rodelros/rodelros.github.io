import Cell from './Cell';
import {useState} from 'react';

const player = {
    current: 'X'
    ,next: function() {
        this.current = this.current === 'X' ? 'O' : 'X';
    }
};

const winningCombinations = [
     [0,1,2]
    ,[3,4,5]
    ,[6,7,8]
    ,[0,3,6]
    ,[1,4,7]
    ,[2,5,8]
    ,[0,4,8]
    ,[2,4,6]
]

function getWinner(cells) {
    for(let i = 0; i < winningCombinations.length; i++) {
        const [a,b,c] = winningCombinations[i];
        if(cells[a] && (cells[a] === cells[b] && cells[a] === cells[c])) {
            return cells[a];
        }
    }
    return null;
}

export default function Board() {

    const [cells, setCells] = useState(Array(9).fill(null));

    const handleClick = (el) => {
        const index = el.target.dataset.index;
        const nextCells = cells.slice();
        nextCells[index] = player.current;
        setCells(nextCells);
        const winner = getWinner(nextCells);

        // get the key
        console.log(el.key?.value);

        if(winner){
            console.log(`${winner} wins!`);
        }
        player.next();
    }

    const rows = [0,3,6].map(x => 
        <div key={x}>
            {[0,1,2].map(y => 
                <Cell index={x+y} key={x+y} handleClick={handleClick} value={cells[x+y]}/>)}
        </div>
    );

    return (
    <>
        {rows}            
    </>   
    );
}