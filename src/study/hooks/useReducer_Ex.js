import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function reducer_etarget(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Hooks_Reducer_Ex = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // e.target 이용해서 작성하기....
  const [state_etarget, dispatch_etarget] = useReducer(reducer_etarget, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state_etarget;

  const onChange = (e) => {
    dispatch_etarget(e.target);
  };

  return (
    <div>
      <h1>Hooks - Reducer Example 입니다.</h1>
      <p>
        Value 는 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <br></br>
      <div>
        <p>e.target을 이용한 예제 입니다.</p>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>별명:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Hooks_Reducer_Ex;
