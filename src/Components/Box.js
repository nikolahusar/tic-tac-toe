import "./Box.css";

const Box = ({ onClick, value }) => {
  return (
    <button
      className={`box ${value && "check"} ${value === "X" ? "x" : "o"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Box;
