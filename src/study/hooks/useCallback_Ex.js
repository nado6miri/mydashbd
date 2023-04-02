import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
} from "react";

const Hooks_UseCallback_Ex = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  /*
  const onChange = (e) => {
    setNumber(e.target.value);
  };
  */
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  /*
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  */
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);

  const getAverage = (numbers) => {
    console.log("평균값 계산중입니다....");
    if (numbers.length === 0) {
      return 0;
    }
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  // useMemo의 핵심
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h1>Hooks - useCallback 사용 예제</h1>
      <input value={number} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/*<b>평균값</b> {getAverage(list)} */}
        <b>평균값</b> {avg}
      </div>
    </div>
  );
};

export default Hooks_UseCallback_Ex;
