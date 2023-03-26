import React, { Component, useState } from "react";

// Case 1
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
class Event1 extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <h1>class component 이벤트 연습 </h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={(e) => {
            console.log(e.target.value);
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: "" });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default Event1;
