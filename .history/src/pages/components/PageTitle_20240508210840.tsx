
import Flex from '../../components/Flex'
import { Title } from '@suminhan/land-design'

export default function PageTitle() {
  return (
    <Flex column gap={8}>
          <Title title="Step 02: 上传文件" type="h3" />
          <Title
            title="点击或拖拽来上传动画文件"
            type="p"
            className="color-gray-4"
          />
        </Flex>
  )
}
