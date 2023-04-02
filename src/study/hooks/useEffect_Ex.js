import React, { useState, useEffect } from "react";

const Hooks_UseEffect_Ex = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const effectFunc = () => {
    console.log("useEffect - 렌더링이 완료 되었습니다.");
    console.log({ name, nickName });
    // clean up function
    return () => {
      console.log("clearn up");
      console.log(name);
    };
  };

  useEffect(effectFunc, [name, nickName]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <h1>Hooks - useEffect 예제 : componentDidMount + componentDidUpdate</h1>
      <div>
        이름:
        <input value={name} onChange={onChangeName} />
        <br></br>
        별명:
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <b>이름:</b> {name}
        <br></br>
        <b>별명:</b> {nickName}
      </div>
    </div>
  );
};

export default Hooks_UseEffect_Ex;
