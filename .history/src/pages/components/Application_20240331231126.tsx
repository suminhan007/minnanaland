import React from "react";

type Props = {
  data?: { name: string; icon: string | React.ReactNode; link?: string }[];
};

const Application: React.FC<Props> = ({
  data = [
    { name: "首页", icon: <>Home</> },
    { name: "Colors", icon: <>Colors</>, link: "/Colors" },
  ],
}) => {
  return (
    <Style>
      {data.map((item) => (
        <div></div>
      ))}
    </Style>
  );
};
export default Application;
