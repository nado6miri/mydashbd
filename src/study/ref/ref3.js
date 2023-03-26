import React, { Component, useState } from "react";

// Case 3
// ref id 지정하여 효과를 state를 통해서 낼 수 있으나 reference를 이용해서 component 직접 접근. - document.getElementById('root')
/*
 */
class Ref3 extends Component {
  scrollToTop = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
    const scrollHeight = this.box.scrollHeight;
    const clientHeight = this.box.clientHeight;
    */
    this.box.scrollTop = 0;
  };

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
    const scrollHeight = this.box.scrollHeight;
    const clientHeight = this.box.clientHeight;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div>
        <h1>My component에서 ref 설정 예제</h1>
        <div
          style={style}
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div style={innerStyle}></div>
        </div>
      </div>
    );
  }
}

export default Ref3;
