import React, {useState} from "react";

export const Button = ({title}) => {
  const [checked, setChecked] = useState();

  const handleClick = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <>
      <button
        type="button"
        className={`btn ${checked ? "btn-info" : "btn-light"} w-100 mb-3`}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};
