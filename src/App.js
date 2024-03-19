import { useState } from 'react';
import './App.css';
import Cell from './components/cell/Cell';

const arr = ['', '', '', '', '', '', '', '', ''];

function App() {

  const [isX, setIsX] = useState(true);
  const [cells, setSells] = useState(arr);
  const [winner, setWinner] = useState('')

  const onClickHandler = (id) => {
    if(cells[id] === ''){
      console.log(id);

      const temp = isX ? 'X' : 'O';   
      
      arr[id] = temp;

      setSells([...arr]);

      isWin();

      setIsX(!isX);
    }
  }

  const isWin = () => {
    const temp = isX ? 'X' : 'O';

    console.log(temp);
    console.log(arr);

    if ((arr[0] === temp && arr[1] === temp && arr [2] === temp) ||
      (arr[3] === temp && arr[4] === temp && arr[5] === temp) ||
      (arr[6] === temp && arr[7] === temp && arr[8] === temp) ||
      (arr[0] === temp && arr[3] === temp && arr[6] === temp) ||
      (arr[1] === temp && arr[4] === temp && arr[7] === temp) ||
      (arr[2] === temp && arr[5] === temp && arr[8] === temp) ||
      (arr[0] === temp && arr[4] === temp && arr[8] === temp) ||
      (arr[6] === temp && arr[4] === temp && arr[2] === temp))
      setWinner(`${temp} is winner`);
  }

  return (
    <div className="field">
      <div className='row'>
        <Cell id={0} content={cells[0]} onClickHandler={onClickHandler} />
        <Cell id={1} content={cells[1]} onClickHandler={onClickHandler} />
        <Cell id={2} content={cells[2]} onClickHandler={onClickHandler} />
      </div>
      <div className='row'>
        <Cell id={3} content={cells[3]} onClickHandler={onClickHandler} />
        <Cell id={4} content={cells[4]} onClickHandler={onClickHandler} />
        <Cell id={5} content={cells[5]} onClickHandler={onClickHandler} />
      </div>
      <div className='row'>
        <Cell id={6} content={cells[6]} onClickHandler={onClickHandler} />
        <Cell id={7} content={cells[7]} onClickHandler={onClickHandler} />
        <Cell id={8} content={cells[8]} onClickHandler={onClickHandler} />
      </div>
      <h1>{winner}</h1>
    </div>
  );
}

export default App;

/* {cells.map((el, index) => <Cell key={index} id={index} content={el} onClickHandler={onClickHandler} />)}   */
