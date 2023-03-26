import React from "react";
import PropTypes from "prop-types";
import Counter1 from "./state1";
import Counter2 from "./state2";
import Counter3 from "./state3";
import Counter4 from "./state4";

// state는 Component 내부에서 바뀔 수 있는 값을 말한다. props는 부모가 component 사용시 설정하는 값이며, component 는 props를 read only로만 사용한다.
/*
state는 2가지 종류가 있음.
1. class형 component에서 가지고 있는 state
2. 함수형 component에서 useState 라는 함수를 통해 사용하는 state
*/

function State_Ex() {
  return (
    <div>
      state 예제 입니다.
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Counter4 />
    </div>
  );
}

export default State_Ex;
