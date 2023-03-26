import React, { Component } from "react";
import PropTypes from "prop-types";
import Ref1 from "./ref1";
import Ref2 from "./ref2";
import Ref3 from "./ref3";

// ref는 class component에서만 사용 가능하기 때문에 class형 component로 변경함.
/*
 */

class Ref_Ex extends Component {
  //function Ref_Ex() {
  render() {
    return (
      <div>
        ref를 통해 DOM접근 예제 입니다.
        <Ref1 />
        <Ref2 />
        <Ref3 ref={(ref) => (this.ref3 = ref)} />
        <button onClick={() => this.ref3.scrollToBottom()}>
          맨 밑으로....
        </button>
        <button onClick={() => this.ref3.scrollToTop()}>맨 위로....</button>
      </div>
    );
  }
}

export default Ref_Ex;
