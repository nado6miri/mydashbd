import React, { Component, useState } from "react";
import "../../css/Ref.css";

// Case 1
// ref id 지정하여 효과를 state를 통해서 낼 수 있으나 reference를 이용해서 component 직접 접근. - document.getElementById('root')
/*
input box에 callback 함수를 통한 reference 설정
<input ref={(ref) => {
            this.input = ref;
          }} />
*/
class Ref1 extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // 이 부분이 가장 중요하고 핵심임.....
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };

  handlefocus = () => {
    this.input.focus();
  };

  // input box에 callback 함수를 통한 reference 설정
  render() {
    return (
      <div>
        <h1>class component에서 callback 함수를 통한 ref 설정 예제</h1>
        <input
          type="text"
          name="password"
          placeholder="비번을 입력하세요."
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={(ref) => {
            this.input = ref;
          }}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default Ref1;
