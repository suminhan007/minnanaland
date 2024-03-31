import React from "react";

type Props = {
  data?: { name: string; icon: string | React.ReactNode; link?: string }[];
};

const Application: React.FC<Props> = ({
    data = []
}) => {
    return <div>
        {data.map(item =>
            <div></div>
        )}
  </div>;
};
export default Application;
