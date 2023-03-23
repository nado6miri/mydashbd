import React, { Fragment } from "react";
// component 는 반드시 부모 요소로 감싸져야 함. 보통 <div></div>를 많이 쓰나 { Fragment } 를 import 해서 <Fragement></Fragement>를 사용해도 됨.
import MyComponent from "../study/props";

function MainBody() {
  return (
    <Fragment>
      <h2>Second Div Area</h2>
      <p>This is the second div area.</p>
      <input></input>
      <br></br>
      <input />
      <MyComponent name="홍길동">여기가 Chidren영역 입니다.</MyComponent>
    </Fragment>
  );
}

export default MainBody;
