import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--wrapper-height": 8 + "px",
    "--percentage-height": 8 + "px",
    "--margin": "0px",
    "--border-radius": "4px 0px 0px 4px",
  },
  medium: {
    "--wrapper-height": 12 + "px",
    "--percentage-height": 12 + "px",
    "--margin": "0px",
    "--border-radius": "4px 0px 0px 4px",
  },
  large: {
    "--wrapper-height": 24 + "px",
    "--percentage-height": 16 + "px",
    "--margin": "4px",
    "--border-radius": "4px 0px 0px 4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  let percentComplete = value / 100;
  let borderRadius = "4px 0px 0px 4px";
  if (percentComplete >= 1) {
    borderRadius = "4px";
    percentComplete = 1;
  }

  let width = size === "large" ? 362 : 370;
  width = width * percentComplete + "px";
  styles["--width"] = width;
  styles["--border-radius"] = borderRadius;

  return (
    <>
      <WrapperBar
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={styles}
      >
        <PercentageBar style={styles} />
      </WrapperBar>
      <VisuallyHidden>{value}</VisuallyHidden>
    </>
  );
};

const WrapperBar = styled.div`
  position: absolute;
  width: 370px;
  height: var(--wrapper-height);

  /* transparent-gray-15 */
  background: ${COLORS.transparentGray35};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
`;

const PercentageBar = styled.div`
  position: absolute;
  width: var(--width);
  height: var(--percentage-height);

  /* Primary */
  background: ${COLORS.primary};
  border-radius: var(--border-radius);

  margin: var(--margin);
`;

export default ProgressBar;
