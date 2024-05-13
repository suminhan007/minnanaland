import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../Colors";
import { IconArrowLine } from "../../components/Icon";
import Flex from "../../components/Flex";

type Props = {
  data?: {
    name: string;
    desc?: string;
    icon?: string | React.ReactNode;
    path: string;
  }[];
};

const Application: React.FC<Props> = ({
  data = [
    {
      name: "首页",
      icon: <>🏠🏠🏠</>,
      desc: "minna的小屋",
      path: "/",
    },
    {
      name: "Colors",
      icon: <>🌈🌈</>,
      desc: "",
      path: "/Colors",
      component: <Colors />,
    },
    {
      name: "Colors",
      icon: <>🌈🌈</>,
      desc: "",
      path: "/Colors",
      component: <Colors />,
    },
    {
      name: "Colors",
      icon: <>🌈🌈</>,
      desc: "",
      path: "/Colors",
      component: <Colors />,
    },
  ],
}) => {
  return (
    <StyleApplicationWrap className="flex flex-wrap justify-between">
      {data.map((item, index) => (
        <Link to={item.path}>
          <div className="flex gap-12">
            {item.icon}
            <div className="flex column justify-start">
              <p className="fs-16">{item.name}</p>
              <p className="fs-12 color-gray-4">{item.desc}</p>
            </div>
          </div>
          {index === 0 && (
            <IconArrowLine style={{ transform: "rotate(-90deg)" }} />
          )}
        </Link>
      ))}
    </StyleApplicationWrap>
  );
};

const StyleApplicationWrap = styled.div`
  width: 240px;
  a {
    padding: var(--padding-medium);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    border-radius: var(--radius-6);
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:first-of-type {
      width: 100%;
    }
  }
  p {
    font-size: 16px;
    color: var(--color-text-1);
    font-weight: var(--font-weight-600);
  }
`;
export default Application;
