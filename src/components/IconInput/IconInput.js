import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--size": 16 + "px",
    "--stroke-width": 24 + "px",
  },
  large: {
    "--size": 24 + "px",
    "--stroke-width": 32 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];
  styles["--width"] = width + "px";
  return (
    <Wrapper>
      <VisuallyHidden> {label}</VisuallyHidden>
      <IconWrapper style={{ "--size": 16 + "px" }}>
        <Icon id={icon} size={16} strokeWidth="24" />
      </IconWrapper>
      <TextInput type="text" {...delegated} style={styles} />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${}
`;

const TextInput = styled.input`
  height: ${24 / 16}rem;
  width: var(--width);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    font-weight: 700;
  }
`;

export default IconInput;
