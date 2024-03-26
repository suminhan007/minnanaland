import React from "react";
import styled from "styled-components";

type Props = {
  value?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (val: string) => void;
  className?: string;
  [key: string]: any;
};
const Input: React.FC<Props> = ({
  value,
  placeholder,
  prefix,
  suffix,
  onChange,
  className,
  ...restProps
}) => {
  return (
    <StyleInputWrap className={`land-input ${className}`}>
      {prefix}
      <input
        className="flex-1 height-100 fs-14 color-gray-1"
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
  gap: var(--gap-8);
  padding: 0 12px;
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
