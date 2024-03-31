import React from "react";

type Props = {
    data?: {name:string,icon:string|React.ReactNode,link?:string}[];
};

const Application: React.FC<Props> = ({}) => {
  return <div>Application</div>;
};
export default Application;
