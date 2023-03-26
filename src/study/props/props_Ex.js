import React from "react";
import PropTypes from "prop-types";

import Props_ex1 from "./props1";
import Props_ex2 from "./props2";
import Props_ex3 from "./props3";
import Props_ex4 from "./props4";
import Props_ex5 from "./props5";

// props 은 부모가 component를 사용하면서 값을 넘길 수 있는 것을 말한다.
// props는 부모가 component 사용시 설정하는 값이며, component 는 props를 read only로만 사용한다.
function Props_Ex() {
  return (
    <div>
      <Props_ex1 name="나도사1" age={21} favoriteNumber={1}>
        ^^children1^^
      </Props_ex1>
      <Props_ex2 name="나도사2" age={22} favoriteNumber={2}>
        ^^children2^^
      </Props_ex2>
      <Props_ex3 name="나도사3" age={23} favoriteNumber={3}>
        ^^children3^^
      </Props_ex3>
      <Props_ex4 name="나도사4" age={24} favoriteNumber={4}>
        ^^children4^^
      </Props_ex4>
      <Props_ex5 name="나도사5" age={25} favoriteNumber={5}>
        ^^children5^^
      </Props_ex5>
    </div>
  );
}

export default Props_Ex;
