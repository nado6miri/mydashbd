import React, { Component } from "react";
import PropTypes from "prop-types";

// Case 1
// constructor에서 state 초기값을 설정하는 방법

class Counter1 extends Component {
  // state를 작성하기 위해서는 constructor를 작성하여 설정한다.
  constructor(props) {
    super(props);
    // state 초기값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h5>
          class형 component에서 constructor에서 state 초기값을 설정하는 방법
        </h5>
        <h1>바뀌는 값 {number}</h1>
        <h2>바뀌지 않는 값 {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          ++
        </button>
        <button
          onClick={() => {
            this.setState({ number: 0 });
          }}
        >
          Reset Value
        </button>
      </div>
    );
  }
}

export default Counter1;
