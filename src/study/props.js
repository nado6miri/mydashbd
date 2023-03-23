import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      <br></br>
      안녕하세요, 제 이름은 {props.name} 입니다. <br />
      Age는 {props.age}이며, Children값은 {props.children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
  age: 26,
};

export default MyComponent;
