import React from "react";
import PropTypes from "prop-types";

// Case 3 - 비구조화 할당 문법을 통해 props 내부 값 추출하기
// 새로 생성한 component의 파라미터를 사용하기 위해서 아래와 같이 (props) 으로 기본 설정하고
// const { name, age, favoriteNumber, children } = props; 를 통해 매번 parameter 접근시 props. 을 적지 않아도 됨.
const Props_ex3 = (props) => {
  const { name, age, favoriteNumber, children } = props;
  return (
    <div>
      3안녕하세요. 제 이름은 {name}이고, <br></br>
      나이는 {age}이며, <br></br>
      좋아하는 숫자는 {favoriteNumber} 입니다.<br></br>
      Chidren은 {children} 이네요.
    </div>
  );
};

// propTypes를 통한 props 검증하기 - type, 필수요소 등
Props_ex3.propTypes = {
  name: PropTypes.string,
  age: PropTypes.object,
  favoriteNumber: PropTypes.object,
};

// default 값 지정하기
Props_ex3.defaultProps = {
  name: "기본이름",
  age: 0,
  favoriteNumber: 0,
};

export default Props_ex3;
