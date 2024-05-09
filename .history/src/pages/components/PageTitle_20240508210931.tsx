import React from 'react'
import Flex from '../../components/Flex'
import { Title } from '@suminhan/land-design'

type Props = {
    mainTitle?: string;
    subTitle?: string;
}
export const PageTitle: React.FC<Props> = ({
    
}) => {
  return (
    <Flex column gap={8}>
          <Title title={} type="h3" />
          <Title
            title="点击或拖拽来上传动画文件"
            type="p"
            className="color-gray-4"
          />
        </Flex>
  )
}
