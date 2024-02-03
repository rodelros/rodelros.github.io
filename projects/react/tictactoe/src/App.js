
import './App.css';
import Board from './components/Board';
import Reducer from './pages/Reducer';
import {useState} from 'react';

function App() {
  const [page, setPage] = useState('');

  const renderPage = () => {
    switch(page){
      case 'board': return <Board/>;
      case 'reducer': return <Reducer/>;       
      default: return <Board/>;
    }
  };

  const renderSelect = () => {
    return (
      <select onChange={e => setPage(e.target.value)}>
        <option value="board" selected>Board</option>
        <option value="reducer">Reducer</option>
      </select>
    );
  };

  return (
    <>
     {renderSelect()}
     {renderPage()}
    </>
  );
}

export default App;