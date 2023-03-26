import React, { Component } from "react";
import PropTypes from "prop-types";

// Class형 Component에서 props 사용하기
class Props_ex5 extends Component {
  render() {
    const { name, age, favoriteNumber, children } = this.props; // 비 구조화 할당 - class 형 component에서는 this.props로 해 줘야 함.
    return (
      <div>
        5안녕하세요. 제 이름은 {name}이고, <br></br>
        나이는 {age}이며, <br></br>
        좋아하는 숫자는 {favoriteNumber} 입니다.<br></br>
        Chidren은 {children} 이네요.
      </div>
    );
  }
}

// propTypes를 통한 props 검증하기 - type, 필수요소 등
Props_ex5.propTypes = {
  name: PropTypes.string,
  age: PropTypes.object,
  favoriteNumber: PropTypes.object,
};

// default 값 지정하기
Props_ex5.defaultProps = {
  name: "기본이름",
  age: 0,
  favoriteNumber: 0,
};

export default Props_ex5;
