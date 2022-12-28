import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { ToggleTheme } from "../App";

function UseContext() {
  const [isClicked, setIsClicked] = useState(false);
  const [like, setLike] = useState(0);
  const theme = useContext(ToggleTheme);

  const [initialRender, setIR] = useState(true);
  useEffect(() => {
    if (initialRender) {
      setIR(false);
    } else {
      alert("Content button clicked!");
      document.getElementById("para").classList.toggle("active");
    }
  }, [isClicked]);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  function content() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <div style={themeStyle}>
        <p id="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed, fugiat temporibus perspiciatis asperiores officia fugit nam vitae a iure. Ab aperiam ex incidunt velit! Ab eaque laboriosam vitae temporibus.
        </p>
        <button onClick={content}>Content</button>
        <div className="like">{like}</div>
        <button
          onClick={() => {
            setLike((like) => like + 1);
          }}
        >
          Like
        </button>
      </div>
    </>
  );
}

export default UseContext;
