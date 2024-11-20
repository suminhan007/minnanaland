import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Divider from "./Divider";

export type TaccSelectProps = {
  background?: boolean;
  value: string;
  percentage?: boolean;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};

const TaccNumberInput: React.FC<TaccSelectProps> = ({
  // value,
  background,
  prefix,
  className,
  style,
  // ...restProps
}) => (
  <StyledNumberInputWrap
    className={`radius-6 ${
      background ? "flex items-center background" : ""
    } ${className}`}
    style={style}
  >
    {prefix && (
      <>
        {prefix}
        <Divider direction="column" margin={7} lang="16px" />
      </>
    )}
    {/* <StyleNumberInput
      buttonPosition="right"
      min={0}
      value={value}
      {...restProps}
    /> */}
  </StyledNumberInputWrap>
);

const StyledNumberInputWrap = styled.div`
  padding-right: 8px;
  padding-left: 12px;
  &:hover {
        background-color: var(--od-gray-12);
      }
   &.background {
      background-color: var(--od-gray-12);
      &:hover {
        background-color: var(--od-gray-09);
      }
    }
`

// const StyleNumberInput = styled.input`
//   input,
//   button {
//     border: none;
//     background-color: transparent;
//     cursor: pointer;
//   }
//   input {
//     max-width: 66px;
//     padding-right: 26px;
//     cursor: text;
//     &:active,
//     &:hover,
//     &:focus,
//     &:focus-within,
//     &:focus:hover {
//       border: none;
//       background-color: transparent;
//     }
//   }
//   button {
//     width: 16px;
//     &:hover {
//       background-color: transparent;
//       svg {
//         color: var(--od-gray-01);
//       }
//     }
//     &:active {
//       background-color: transparent;
//     }
//   }
// `;
export default TaccNumberInput;
