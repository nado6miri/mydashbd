import React, { Component } from "react";
import PropTypes from "prop-types";

// Case 2
// constructor에서 state 초기값을 설정하지 않고 state 초기값을 설정하는 방법 - 이 방법이 가장 normal하게 사용함
class Counter2 extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h5>
          class형 component constructor에서 state 초기값을 설정하지 않고 state
          초기값을 설정하는 방법 + Callback 설정하기 - 이 방법이 가장 normal하게
          사용함
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
            this.setState(
              {
                number: 0,
              },
              () => {
                console.log(
                  "방금 Reset Value Callback - setState함수가 호출되었습니다."
                );
                console.log(this.state);
              }
            );
          }}
        >
          Reset Value - Callback
        </button>
      </div>
    );
  }
}

export default Counter2;
