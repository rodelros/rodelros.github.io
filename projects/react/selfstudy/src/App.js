import { useState } from 'react';
import Game from './tictactoe/tictactoe';
import ArrayState from './arraystate/arraystate';
import ArrayOfJsx from './arrayofjsx/arrayofjsx';

const Selector = ({onSelectChange}) => {
  return(
    <div>
      <label htmlFor='selector'> Select a topic:</label>
      <select name='selector' onChange={onSelectChange}>
        <option value='Game'>Tic Tac Toe</option>
        <option value='ArrayState'>ArrayState</option>
        <option value='ArrayOfJsx'>Array of JSX</option>
      </select>
    </div>
  );
};

const Display = ({selected}) => {
  switch(selected){
    case 'Game' : return <Game></Game>;
    case 'ArrayState': return <ArrayState></ArrayState>
    case 'ArrayOfJsx': return <ArrayOfJsx></ArrayOfJsx>
  }
  return <Game></Game>;
};

export default function App(){
  const [selected, setSelected] = useState('Game');
  
  function onSelectChange(evt){
    setSelected(evt.target.value)
  }

  return(
    <>
    <div>
      <Selector onSelectChange={onSelectChange}></Selector>
    </div>
    <Display selected={selected}></Display>
    </>
  );
}

  
  