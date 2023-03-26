import React from "react";
import PropTypes from "prop-types";

// Case 1
// 새로 생성한 component의 파라미터를 사용하기 위해서 아래와 같이 기본 작성하면 되는데
// 이럴경우 매번 parameter를 접근할때 마다 props. 을 붙여서 접근해야 하는 단점이 있음.
const Props_ex1 = (props) => {
  return (
    <div>
      안녕하세요. 제 이름은 {props.name}이고, <br></br>
      나이는 {props.age}이며, <br></br>
      좋아하는 숫자는 {props.favoriteNumber} 입니다.<br></br>
      Chidren은 {props.children} 이네요.
    </div>
  );
};

// propTypes를 통한 props 검증하기 - type, 필수요소 등
Props_ex1.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.object,
  favoriteNumber: PropTypes.object,
};

// default 값 지정하기
Props_ex1.defaultProps = {
  name: "기본이름",
  age: 0,
  favoriteNumber: 0,
};

export default Props_ex1;
