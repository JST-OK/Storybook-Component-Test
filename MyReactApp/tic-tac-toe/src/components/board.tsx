import { Field } from "./field";

export const Board = () => {
  return (
    <div>
      <div className="board-row">
        <Field />
        <Field />
        <Field />
      </div>
      <div className="board-row">
        <Field />
        <Field />
        <Field />
      </div>
      <div className="board-row">
        <Field />
        <Field />
        <Field />
      </div>
    </div>
  );
};
