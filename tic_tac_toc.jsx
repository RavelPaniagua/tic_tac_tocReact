const TURNS = {
  X: 'x',
  O: 'o',
};

//esto es un arreglo de 9 espacios rellenados con null
const board = Array(9).fill(null);

export default function Juego() {
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
