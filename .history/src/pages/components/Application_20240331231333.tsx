import React from "react";
import styled from "styled-components";

type Props = {
  data?: { name: string; icon: string | React.ReactNode; link?: string }[];
};

const Application: React.FC<Props> = ({
  data = [
    { name: "首页", icon: <>Home</> },
    { name: "Colors", icon: <>cai</>, link: "/Colors" },
  ],
}) => {
  return (
    <StyleApplicationWrap className="flex flex-column">
      {data.map((item) => (
        <div>
          {item.icon}
          <p>{item.name}</p>
        </div>
      ))}
    </StyleApplicationWrap>
  );
};

const StyleApplicationWrap = styled.div``;
export default Application;