import React, {useState} from "react";

export const Button = ({title, filter}) => {
  const [selectedFilter, setSelectedFilter] = useState(false);

  const handleClick = () => {
    filter();
    setSelectedFilter(true);
  };
  return (
    <>
      <button
        type="button"
        className={`btn ${
          selectedFilter ? "btn-info" : "btn-light"
        } w-100 mb-3`}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};
