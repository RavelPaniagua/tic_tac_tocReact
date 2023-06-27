import {useState} from 'react';

const TURNS = {
  X: 'x',
  O: 'o',
};

const Square = (children,updateBoard,index) =>{
  return(
    <div className="square">
      {children}
    </div>
  )
}


export default function Juego() {
  const [board,setBorad] = useState(Array(9).fill(null));
  return (
    <section className="game">
      {board.map((_, index) => {
        return (
          <div className="cell" key={index}>
            <div className="cell_content">{index}</div>
          </div>
        );
      })}
    </section>
  );
}
