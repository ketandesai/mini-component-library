import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Bar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={size}
    >
      {value} %
    </Bar>
  );
};

const Bar = styled.div`
  position: absolute;
  width: 370px;
  height: 8px;

  /* transparent-gray-15 */

  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 4px;
`;

export default ProgressBar;
