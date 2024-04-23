import React, { Fragment } from "react";
import styled from "styled-components";
import { IconCheck, IconInfoStroke } from "./Icon";
import Pop from "./Pop";
import Title, { TitleProps } from "./Title";

type CheckItemType = {
  value: number,
  label: string,
  pop?: string
}
type RadioProps = {
  checked?: number;
  data?: CheckItemType[];
  titleProps?: TitleProps;
  onChange?: (data: CheckItemType) => void;
};
const Radio: React.FC<RadioProps> = ({
  checked = 1,
  data = [{ value: 1, label: '选项1' }, { value: 2, label: '选项2' }, { value: 3, label: '选项3' }],
  titleProps,
  onChange,
}) => {
  return (
    <div>
      {titleProps && <Title {...titleProps} />}
      <StyleRadioContainer className="land-radio-container">
        {
          data?.map(item =>
            <Fragment>
              <StyleRadioLabel
                onClick={() => {
                  onChange?.(item);
                }}
              >
                <StyleRadioCircle className={`${checked === item.value ? "checked" : ""}`}>
                  <IconCheck size={10} strokeWidth={0} fill="var(--color-bg-white)" />
                </StyleRadioCircle>
                {item.label}
              </StyleRadioLabel>
              {item.pop && (
                <StyleRadiopop className="hover-pop">
                  <IconInfoStroke stroke="var(--color-text-4)" />
                  <Pop content={item.pop} theme="dark" style={{ maxWidth: "200px" }} />
                </StyleRadiopop>
              )}
            </Fragment>
          )
        }
      </StyleRadioContainer>
    </div>
  );
};

const StyleRadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  margin-top: 12px;
`
const StyleRadioLabel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`;

const StyleRadioCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`;

const StyleRadiopop = styled.div`
  position: relative;
  height: 16px;
`;
export default Radio;
