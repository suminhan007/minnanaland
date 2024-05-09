import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { IconInfoStroke } from "./Icon";
import Pop from "./Pop";

export type TitleProps = {
  /* 标题内容 */
  title?: string | React.ReactNode;
  /* 标题层级 */
  type?: "h1" | "h2" | "h3" | "p";
  /* 标题前缀 */
  prefix?: string;
  /* 标题角标 */
  sub?: string | React.ReactNode;
  info?: string | React.ReactNode;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

const Title: React.FC<TitleProps> = ({
  title,
  type = "h1",
  prefix,
  sub,
  info,
  style,
  className = "",
  onClick,
}) => {
  return (
    <StyledTitle
      className={`land-title ${className}`}
      style={style}
      onClick={() => onClick?.()}
    >
      {prefix && <span className="land-title-prefix">{prefix}</span>}
      {type === "h1" && <h1>{title}</h1>}
      {type === "h2" && <h2>{title}</h2>}
      {type === "h3" && <h3>{title}</h3>}
      {type === "p" && <p>{title}</p>}
      {info && (
        <div className="land-title-info hover-pop">
          <IconInfoStroke stroke="var(--color-text-4)" />
          <Pop content={info} style={{ maxWidth: "200px" }} />
        </div>
      )}
      {sub && typeof sub === "string" ? (
        <div className="land-title-sub">{sub}</div>
      ) : (
        <>{sub}</>
      )}
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  .land-title-sub {
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
  .land-title-info {
    position: relative;
    display: flex;
    align-items: center;
  }
`;

export default Title;