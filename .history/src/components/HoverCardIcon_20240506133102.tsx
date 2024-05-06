import React from "react";
import { IconCloseCircle } from "./Icon";

type HoverCardIconProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};
const HoverCardIcon: React.FC<HoverCardIconProps> = ({ onClick, children }) => {
  return (
    <StyleHoverCardIcon className="relative">
      {children}
      <div className="absolute cursor-pointer close-icon" onClick={onClick}>
        <IconCloseCircle fill="var(--color-red-6)" />
      </div>
    </StyleHoverCardIcon>
  );
};

const StyleHoverCardIcon = styled.div
export default HoverCardIcon;
