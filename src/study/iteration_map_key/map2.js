import React, { Component, useState } from "react";
import "../../css/Ref.css";

// Case 2
// key 설정 - key값은 유일해야 함.
/*
const articleList = articles.map((article) => (
  <Article
    title={article.title}
    writer={article.writer}
    key={article.id}
))
 */

//class Map1 extends Component {
function MapKey() {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <div>
      <h1>
        map 함수를 이용해서 반복되는 component rendering 예제 - unique key지정
      </h1>
      <ul>{nameList}</ul>
    </div>
  );
}

export default MapKey;
