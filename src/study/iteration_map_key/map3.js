import React, { Component, useState } from "react";
import "../../css/Ref.css";

// Case 3
// 초기상태 설정, 데이터 추가 및 삭제 기능 구현하기
// add : concat - 새로운 배열을 만들어 준다. push - 기존 자체 배열을 변경해 준다.
// delete : filter - 불변성을 유지하면서 배열의 특정 항목을 지울때는 배열의 내장함수 filter를 사용함.

/*
const articleList = articles.map((article) => (
  <Article
    title={article.title}
    writer={article.writer}
    key={article.id}
))
 */

//class Map1 extends Component {
function MapAddDeleteItems() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState("5");

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <div>
      <h1>
        map 함수를 이용해서 반복되는 component rendering 및 추가/삭제 예제
      </h1>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add Item</button>
      <ul>{nameList}</ul>
    </div>
  );
}

export default MapAddDeleteItems;
