import React, { CSSProperties } from 'react'
type Props = {
  open?: boolean;
  finished?: boolean;
  lastDisabled?: boolean;
  nextDisabled?: boolean;
  onLastStep?: () => void;
  onNextStep?: () => void;
  children?: React.ReactNode;
  style?: CSSProperties;
}
const CreateFlexLayout: React.FC<Props> = ({
  children,
  style,
}) => (
  <div
    className={`height-100 border-right overflow-hidden transition`}
    style={style}
  >
    {children}
  </div>
)
export default CreateFlexLayout;

