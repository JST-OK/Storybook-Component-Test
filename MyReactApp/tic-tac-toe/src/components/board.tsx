import { useState } from "react";
import { Field } from "./field";

export const Board = () => {
  const [userIsX, setUserIsX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleOnFieldClick = (field: number) => {
    if (userIsX) {
      squares[field] = "X";
    } else {
      squares[field] = "O";
    }
    setUserIsX(!userIsX);
  };

  return (
    <div>
      <div className="board-row">
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(0)} />
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(1)} />
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(2)} />
      </div>
      <div className="board-row">
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(3)} />
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(4)} />
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(5)} />
      </div>
      <div className="board-row">
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(6)} />
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(7)} />
        <Field userIsX={userIsX} onFieldClick={() => handleOnFieldClick(8)} />
      </div>
    </div>
  );
};
