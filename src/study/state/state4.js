import React, { Component, useState } from "react";

// Case 4
// 함수형 Component에서 useState 사용하기 - React 16.8 이후버터 사용 가능함.
const Counter4 = () => {
  // [원소, setter]
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");

  const [color, setColor] = useState("black");
  const onClickRed = () => setColor("red");
  const onClickGreen = () => setColor("green");
  const onClickBlue = () => setColor("blue");

  return (
    <div>
      <h5>
        함수형 component에서 useState를 사용하는 예제입니다. - React
        16.8이상부터 사용가능
      </h5>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={onClickRed}>
        Red
      </button>
      <button style={{ color: "green" }} onClick={onClickGreen}>
        Green
      </button>
      <button style={{ color: "blue" }} onClick={onClickBlue}>
        Blue
      </button>
    </div>
  );
};

export default Counter4;
