import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

type Props = {
  data?: { name: string; icon: string | React.ReactNode; link?: string }[];
};

const Application: React.FC<Props> = ({ data = [] }) => {
    return <div>
        {data.map(item =>
            div
        )}
  </div>;
};
export default Application;
