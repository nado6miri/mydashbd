import React, { Component, useState } from "react";
import "../../css/Ref.css";

// Case 1
// map 함수를 이용해서 반복되는 component rendering 예제
/*
<ul>
  <li>눈사람</li>
  <li>얼음</li>
  <li>눈</li>
  <li>바람</li>
</ul>
 */

//class Map1 extends Component {
function Map1() {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li>{name}</li>);

  return (
    <div>
      <h1>map 함수를 이용해서 반복되는 component rendering 예제</h1>
      <ul>{nameList}</ul>
    </div>
  );
}

export default Map1;
