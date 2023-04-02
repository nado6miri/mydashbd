import React, { useState } from "react";

const Hooks_UseState_Ex = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <h1>Hooks - useState 예제</h1>
      <div>
        <p>
          현재 값은 <b>{value}</b> 입니다.
        </p>
        <button onClick={() => setValue(value + 1)}>증가</button>
        <button onClick={() => setValue(value - 1)}>감소</button>
      </div>
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

export default Hooks_UseState_Ex;
