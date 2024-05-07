import React from "react";

type HoverCardIconProps = {
  children?: React.ReactNode;
};
const HoverCardIcon: React.FC<HoverCardIconProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default HoverCardIcon;
