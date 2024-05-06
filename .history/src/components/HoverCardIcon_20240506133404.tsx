import React from "react";
import styled from "styled-components";
import { IconCloseCircle } from "./Icon";

type HoverCardIconProps = {
  align?: "left-top" | "right-top";
  onClick?: () => void;
  children?: React.ReactNode;
};
const HoverCardIcon: React.FC<HoverCardIconProps> = ({
  align = "right-top",
  onClick,
  children,
}) => {
  return (
    <StyleHoverCardIcon className="relative">
      {children}
      <div
        className="absolute cursor-pointer hover-icon"
        onClick={onClick}
        style={{
          top: "-8px",
          left: align === "left-top" ? "0px" : "100%",
        }}
      >
        <IconCloseCircle fill="var(--color-red-6)" />
      </div>
    </StyleHoverCardIcon>
  );
};

const StyleHoverCardIcon = styled.div`
  .hover-icon {
    opacity: 0;
    pointer-events: none;
  }
  &:hover {
    .hover-icon {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
export default HoverCardIcon;
