import { useState } from "react";

export const Field = (props: { userIsX: boolean; onFieldClick: Function }) => {
  const { userIsX, onFieldClick } = props;
  const [value, setValue] = useState<String>("");

  const handleClick = () => {
    if (userIsX) {
      setValue("X");
    } else {
      setValue("O");
    }
    onFieldClick();
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};
