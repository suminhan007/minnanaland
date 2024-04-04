import React, { CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  value?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  w?: number | string;
  onChange?: (val: string) => void;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};
const Input: React.FC<Props> = ({
  value,
  placeholder,
  prefix,
  suffix,
  w,
  onChange,
  className,
  style,
  ...restProps
}) => {
  return (
    <StyleInputWrap className={`land-input ${className}`} style={{,...style}}>
      {prefix}
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...restProps}
      />
      {suffix}
    </StyleInputWrap>
  );
};

const StyleInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 4px;
  border: var(--border-1) solid var(--color-border-1);
  border-radius: var(--radius-4);
  input {
    width: 100%;
    height: 32px;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    caret-color: var(--color-primary-6);
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    &::placeholder {
      color: var(--color-text-3);
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
`;
export default Input;
