import React from "react";

type Props = {
  data?: { name: string; icon: string | React.ReactNode; link?: string }[];
};

const Application: React.FC<Props> = ({
    data = [
        { name: '首页', icon: <>Home</> },
        {name: 'Colors', icon: <>Color</>}
    ]
}) => {
    return <div>
        {data.map(item =>
            <div></div>
        )}
  </div>;
};
export default Application;
