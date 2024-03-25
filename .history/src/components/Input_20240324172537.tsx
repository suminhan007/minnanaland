import React from "react";
import styled from "styled-components";

type Props = {
  value?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (val: string) => void;
};
const Input: React.FC<Props> = ({
  value,
  placeholder,
  prefix,
  suffix,
  onChange,
}) => {
  return (
    <StyleInputWrap className="StyleInputWrap flex items-center gap-8 px-12 width-100 border radius-8 overflow-hidden">
      {prefix}
      <input
        className="flex-1 height-100 fs-14 color-gray-1"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {suffix}
    </StyleInputWrap>
  );
};

const StyleInputWrap = styled.div`
  input {
    width: 100%;
    height: 36px;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    caret-color: #f78891;
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    &::placeholder {
      color: #dadada;
    }
    &::selection {
      background-color: #d7f0ff;
    }
  }
`;
export default Input;
