import React from "react";
import styled from "styled-components";
import { IconCloseCircle } from "./Icon";

type HoverCardIconProps = {
  align?: "left" | "right";
  onClick?: () => void;
  children?: React.ReactNode;
};
const HoverCardIcon: React.FC<HoverCardIconProps> = ({
  align = "right",
  onClick,
  children,
}) => {
  return (
    <StyleHoverCardIcon className="relative">
      {children}
      <div
        className="absolute cursor-pointer top-0 hover-icon"
        onClick={onClick}
        style={{
          left: align === "left" ? "0px" : "100%",
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
    transform: translate(-50%, -50%);
  }
  &:hover {
    .hover-icon {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
export default HoverCardIcon;
