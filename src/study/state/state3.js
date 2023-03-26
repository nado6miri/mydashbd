import React, { Component } from "react";
import PropTypes from "prop-types";

// Case 3
// constructor에서 state 초기값을 설정하지 않고 state 초기값을 설정하는 방법 - 이 방법이 가장 normal하게 사용함
// this.setState 함수를 사용할 경우 비동기로 동작하기 때문에 여러번 호출시 값이 업데이트 되지 않는 현상이 있어 prevState를 이용해야 함.
class Counter3 extends Component {
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
          초기값을 설정하는 방법 + 비동기 동작시 문제점 회피 방안 - 이 방법이
          가장 normal하게 사용함
        </h5>
        <h1>바뀌는 값 {number}</h1>
        <h2>바뀌지 않는 값 {fixedNumber}</h2>
        <button
          onClick={() => {
            {
              /* prevState 는 이전값, props 는 현재값  */
            }
            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1,
              };
            });
          }}
        >
          ++
        </button>
        {/*위 코드와 동일함  */}
        <button
          onClick={() => {
            this.setState((prevState, props) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          ++
        </button>
      </div>
    );
  }
}

export default Counter3;
