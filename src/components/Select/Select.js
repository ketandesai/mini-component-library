import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const width = displayedValue.length * 12 + 16 + 52;
  return (
    <>
      <Wrapper
        value={value}
        onChange={onChange}
        style={{
          "--width": width + "px",
        }}
      >
        {children}
      </Wrapper>
    </>
  );
};
const icon = <Icon id="chevron-down" size="6" strokeWidth="12" />;

const Wrapper = styled.select`
  content: ${icon};
  height: 43px;
  width: var(--width);
  background: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;

  align-items: center;
  padding: 12px 52px 12px 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  /* gray-700 */
  color: ${COLORS.gray700};

  &:focus {
    border: 2px solid #4374cb;
    border-radius: 3px;
  }

  &:hover {
    border: revert;
    border-radius: revert;
    color: ${COLORS.black};
  }
`;

export default Select;
