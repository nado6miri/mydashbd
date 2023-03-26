import React from "react";
import PropTypes from "prop-types";

function Props_ex4(props) {
  const { name, age, favoriteNumber, children } = props;
  return (
    <div>
      4안녕하세요. 제 이름은 {name}이고, <br></br>
      나이는 {age}이며, <br></br>
      좋아하는 숫자는 {favoriteNumber} 입니다.<br></br>
      Chidren은 {children} 이네요.
    </div>
  );
}

// propTypes를 통한 props 검증하기 - type, 필수요소 등
Props_ex4.propTypes = {
  name: PropTypes.string,
  age: PropTypes.object,
  favoriteNumber: PropTypes.object,
};

// default 값 지정하기
Props_ex4.defaultProps = {
  name: "기본이름",
  age: 0,
  favoriteNumber: 0,
};

export default Props_ex4;
