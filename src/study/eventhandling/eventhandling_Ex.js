import React from "react";
import PropTypes from "prop-types";
import Event1 from "./event1";
import Event2 from "./event2";
import Event3 from "./event3";
import Event4 from "./event4";

// state는 Component 내부에서 바뀔 수 있는 값을 말한다. props는 부모가 component 사용시 설정하는 값이며, component 는 props를 read only로만 사용한다.
/*
state는 2가지 종류가 있음.
1. class형 component에서 가지고 있는 state
2. 함수형 component에서 useState 라는 함수를 통해 사용하는 state
*/

function EventHandling_Ex() {
  return (
    <div>
      Event handling 예제 입니다.
      <Event1 />
      <Event2 />
      <Event3 />
      <Event4 />
    </div>
  );
}

export default EventHandling_Ex;
