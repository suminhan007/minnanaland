import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../Colors";

type Props = {
  data?: {
    name: string;
    icon: string | React.ReactNode;
    path: string;
  }[];
};

const Application: React.FC<Props> = ({
  data = [
    { name: "首页", icon: <>🏠🏠🏠</>, path: "/" },
    {
      name: "Colors",
      icon: <>🌈🌈🌈</>,
      path: "/Colors",
      component: <Colors />,
    },
  ],
}) => {
  return (
    <StyleApplicationWrap className="flex column">
      {data.map((item) => (
        <Link to={item.path}>
          <div className="flex gap-12 px-12 py-8">
            {item.icon}
                  <p className="fs-16">{item.name}</p>
                  <IconA
          </div>
        </Link>
      ))}
    </StyleApplicationWrap>
  );
};

const StyleApplicationWrap = styled.div`
  width: 200px;
  p {
    font-size: 16px;
    color: var(--color-text-1);
    font-weight: var(--font-weight-600);
  }
`;
export default Application;