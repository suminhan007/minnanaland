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
    align-items: flex-start;
    gap: 12px;
    border-radius: var(--radius-6);
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:first-of-type {
      width: 100%;
    }
  }
  .icon {
    aspect-ratio: 1;
  }
`;
export default Application;
