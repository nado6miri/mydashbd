import React, { Component, useState } from "react";

// Case 3
// 함수형 component에서 별도의 handler함수 정의 및 여러개 input 사용
/*
1. Event 이름은 Camel 표기법을 사용 : html의 onclick --> onClick 으로 작성
2. Event에 실행할 자바스크립트 코드 전달이 아닌 함수 형태의 값을 전달해야 함.
3. DOM 요소에만 Event를 설정할 수 있음. - div, button, input, form, span등 
4. 우리가 만든 컴포넌트에는 event를 설정할 수 없음.
   부모에서 우리가 만든 컴포넌트 사용시 props에 eventhandler를 전달하고 component 내부에 props을 이용해서 event를 설정가능함.
   <MyComopnent onClick={dosomething} />  - onClock 이 Event가 아니고 component에 전달할 props임.
   <div onClick={this.props.onClick}></div>
5. react event 종류 : https://facebook.github.io/react/docs/events.html
*/
function Event3() {
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePasswd = (e) => setPasswd(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ":" + passwd + ":" + message);
    setUsername("");
    setPasswd("");
    setMessage("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>
        함수형 component 이벤트 연습 - 별도의 handler함수 정의 및 여러개 input
        event 다루기
      </h1>
      <input
        type="text"
        name="username"
        placeholder="ID 입력하세요"
        value={username}
        onChange={onChangeUsername}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="passwd"
        placeholder="비번을 입력하세요"
        value={passwd}
        onChange={onChangePasswd}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지를 입력하세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />

      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default Event3;
