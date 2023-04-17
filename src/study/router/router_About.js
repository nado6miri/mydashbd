import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

const About = () => {
  const location = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>About Page입니다.</h1>
      <p>
        이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.
      </p>
      <p>query string : {location.search}</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요.</p>}
      <p>mode 값을 {query.mode}로 설정하셨군요.</p>
    </div>
  );
};

export default About;

// 입력 : http://localhost:3000/about?detail=true&mode=1
// query string : ?detail=true&mode=1 의 ? & 분리는 npm qs or querystring 패키지 이용 처리
