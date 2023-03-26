import React, { Component, useState } from "react";

// Case 2
// class component에서 임의의 handler를 만들어서 event handling하기
// [e.target.name] 을 가지고 여러개의 input의 handler를 설정 활용하기... 이부분이 핵심임.
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
class Event2 extends Component {
  state = {
    message: "",
    username: "",
    passwd: "",
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }); // 이 부분이 가장 중요하고 핵심임.....
  }

  handleClick() {
    alert(
      this.state.username + ":" + this.state.passwd + ":" + this.state.message
    );
    this.setState({ message: "", username: "", passwd: "" });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>
          class component 이벤트 연습2 - 별도의 handler함수 정의 및 여러개 input
          event 다루기
        </h1>
        <input
          type="text"
          name="username"
          placeholder="ID 입력하세요"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type="text"
          name="passwd"
          placeholder="비번을 입력하세요"
          value={this.state.passwd}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type="text"
          name="message"
          placeholder="메세지를 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default Event2;
