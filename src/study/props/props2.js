import React from "react";
import PropTypes from "prop-types";

// Case 2
// 새로 생성한 component의 파라미터를 사용하기 위해서 아래와 같이 () 내부에 사용할 parameter 를 {} 객체를 생성하고 안에 나열하면 됨.
const Props_ex2 = ({ name, age, favoriteNumber, children }) => {
  return (
    <div>
      2안녕하세요. 제 이름은 {name}이고, <br></br>
      나이는 {age}이며, <br></br>
      좋아하는 숫자는 {favoriteNumber} 입니다.<br></br>
      Chidren은 {children}이네요.
    </div>
  );
};

// propTypes를 통한 props 검증하기 - type, 필수요소 등
Props_ex2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.object.isRequired,
  favoriteNumber: PropTypes.object,
};

// default 값 지정하기
Props_ex2.defaultProps = {
  name: "기본이름",
  age: 0,
  favoriteNumber: 0,
};

export default Props_ex2;
