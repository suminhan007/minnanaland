import React from "react";
import { IconCloseCircle } from "./Icon";

type HoverCardIconProps = {
  children?: React.ReactNode;
};
const HoverCardIcon: React.FC<HoverCardIconProps> = ({ children }) => {
    return <div>{children}
    <div
                  className="absolute cursor-pointer close-icon"
                  onClick={() => onClick()}
                >
                  <IconCloseCircle fill="var(--color-red-6)" />
                </div></div>;
};

export default HoverCardIcon;
