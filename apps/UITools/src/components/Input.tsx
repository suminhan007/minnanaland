import React, { CSSProperties } from "react";
import styled from "styled-components";

type Props = {
  type?: string;
  value?: string | number;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  w?: number | string;
  max?: number;
  min?: number;
  onChange?: (val: string | number) => void;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};
const Input: React.FC<Props> = ({
  type = "text",
  value,
  placeholder,
  prefix,
  suffix,
  w,
  min,
  max,
  onChange,
  className,
  wrapStyle,
  ...restProps
}) => {
  return (
    <StyleInputWrap
      className={`land-input ${className}`}
      style={{ width: typeof w === "number" ? `${w}px` : w, ...wrapStyle }}
    >
      {prefix && <p className="input-prefix">{prefix}</p>}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        min={min}
        max={max}
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
  padding: 0 12px;
  border: var(--border-1) solid var(--color-border-3);
  border-radius: var(--radius-4);
  input {
    width: 100%;
    height: 34px;
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
      color: var(--color-text-5);
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
`;
export default Input;
