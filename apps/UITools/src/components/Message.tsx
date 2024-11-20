import React, { CSSProperties, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

type Props = {
  show?: boolean;
  type?: "success" | "fail" | "warn" | "default";
  text?: string | React.ReactNode;
  style?: CSSProperties;
  className?: string;
};
const Message: React.FC<Props> = ({
  show = false,
  type = "default",
  text = "咕噜咕噜～",
  style,
  className = "",
}) => {
  const [newShow, setNewShow] = useState<boolean>(show);
  useEffect(() => {
    setNewShow(show)
  }, [show])
  useEffect(() => {
    if (newShow) {
      const timer = setTimeout(() => {
        setNewShow(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [newShow])
  const toastType = useMemo(() => {
    switch (type) {
      case "default":
        return { color: "white", background: "black", icon: null };
    }
  }, [type]);
  return (
    <StyleToastContainer
      className={`StyleToastContainer fixed radius-6 px-12 py-4 fs-14 ${newShow ? "show" : "close"
        } ${className}`}
      style={{
        color: toastType?.color,
        backgroundColor: toastType?.background,
        ...style,
      }}
    >
      {text}
    </StyleToastContainer>
  );
};

const StyleToastContainer = styled.div`
  z-index: var(--zIndex-5);
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-2) linear, top var(--transition-2) linear;
  &.show {
    top: 24px;
    opacity: 0.9;
  }
  &.close {
    top: 32px;
    opacity: 0;
  }
`;
export default Message;
