import React from "react";
import styles from "../../css/CSSModule.module.css";

const CSSModule_Ex = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        CSS Module 사용법 입니다. <br></br>
        안녕하세요, 저는 <span className="something">CSS Module</span>
      </div>
      <div className={"${styles.wrapper} ${styles.inverted}"}>
        CSS Module 사용법 입니다. - 2개의 css module을 하나의 클래스에 적용시{" "}
        <br></br>
        안녕하세요, 저는 <span className="something">CSS Module</span>
      </div>
      <div className={[styles.wrapper, styles.inverted].join(" ")}>
        CSS Module 사용법 입니다. - 2개의 css module을 하나의 클래스에 적용시{" "}
        <br></br>
        안녕하세요, 저는 <span className="something">CSS Module</span>
      </div>
    </div>
  );
};

export default CSSModule_Ex;
