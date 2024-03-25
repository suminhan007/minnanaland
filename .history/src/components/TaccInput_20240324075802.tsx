import React from 'react';
import { Input, Icon, InputProps } from '@tencent/spaui';
import { IconSearch } from '@tencent/tacc-icons';
import styled from 'styled-components';

export type TaccInputProps = {
  type?: 'background' | 'border';
  width?: string;
  className?: string;
  onClear?: () => void;
  [key: string]: any;
} & InputProps;

const TaccInput: React.FC<TaccInputProps> = ({
  type = 'background',
  width = '200px',
  className,
  onClear,
  ...restProps
}) => (
    <StyleInputWrap
      className={`StyleInputWrap relative radius-6 ${type === 'background' ? 'background' : 'border'}`}
      style={{
        width,
      }}
    >
      <StyleSearchInput
        borderless
        wrapperClassName="input-wrapper"
        prefix={<IconSearch className="mr-8 StyleIconSearch" name="search-outlined" color="var(--od-gray-03)" />}
        className={` ${className ? className : ''}`}
        width={restProps.width}
        {...restProps}
      />
      {restProps.value?.length > 0 && <StyleSearchClear onClick={onClear} name="clear-outlined" className="absolute" />}
    </StyleInputWrap>
);

const StyleSearchClear = styled(Icon)`
  color: var(--od-gray-04);
  right: 8px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  &:hover {
    color: var(--od-gray-03);
  }
  &:active {
    color: var(--od-gray-02);
  }
`;

const StyleInputWrap = styled.div`
  &.background {
    .input-wrapper {
      border: none;
      background-color: var(--od-gray-12);
      &:hover,
      &:focus-within {
        background-color: var(--od-gray-09);
      }
    }
  }
`;
const StyleSearchInput = styled(Input)`
  color: var(--od-gray-01);
  font-size: 14px;
  border: none;
  padding: 0 24px 0 0;
  height: 100%;
  &:hover {
    background: transparent;
  }
`;

export default TaccInput;
