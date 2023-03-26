import React, { Component } from "react";
import PropTypes from "prop-types";

import Map1 from "./map1";
import MapKey from "./map2";
import MapAddDeleteItems from "./map3";

//
/*
 */

function Iteration_Ex() {
  return (
    <div>
      ref를 통해 DOM접근 예제 입니다.
      <Map1 />
      <MapKey />
      <MapAddDeleteItems />
    </div>
  );
}

export default Iteration_Ex;
