import React from "react";
import styles from "../../css/CSSModule.module.css";
import classNamesBind from "classnames/bind";
import classNames from "classnames";

const cx = classNamesBind.bind(styles);

const ClassNames_Ex = ({ wrapper, theme }) => {
  return (
    <div>
      <div className={classNames("ClassNames_Ex", { wrapper }, theme)}>
        CSS Module - classnames 사용법 입니다. <br></br>
        안녕하세요, 저는 <span className="something">CSS Module</span>
      </div>
      <div className={cx("wrapper", "inverted")}>
        CSS Module 사용법 입니다. - classnames.bind를 이용해서 2개의 css
        module을 하나의 클래스에 적용
        <br></br>
        안녕하세요, 저는 <span className="something">CSS Module</span>
      </div>
    </div>
  );
};

export default ClassNames_Ex;
