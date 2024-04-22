import React from 'react'
import Model from "./scene/Model";
type Props = {};
const Home: React.FC<Props> = ({}) => {
  return (
    <div style={{ height: "100vh" }}>
      <Model />
    </div>
  );
};

export default Home;