import React from "react";
import Flex from "../../components/Flex";
import { Title } from "../../components/Title";

type Props = {
  mainTitle?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
};
export const PageTitle: React.FC<Props> = ({ mainTitle, subTitle }) => {
  return (
    <Flex column gap={8}>
      <Title title={mainTitle} type="h3" />
      <Title title={subTitle} type="p" className="color-gray-4" />
    </Flex>
  );
};
