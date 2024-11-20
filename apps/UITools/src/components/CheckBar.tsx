import React from 'react'
import Flex from './Flex'
import Button, { ButtonProps } from './Button'

type CheckBarProps = {
  checked?: number | number[];
  data?: ({ value: number } & ButtonProps)[];
}
const CheckBar: React.FC<CheckBarProps> = ({
  checked,
  data
}) => {
  const newChecked = (curValue?: any) => {
    if (Array.isArray(checked)) {
      return checked?.includes(curValue)
    } else {
      return checked === curValue
    }
  }
  return (
    <Flex>
      {data?.map(item =>
        <Button
          status={newChecked(item.value) ? 'primary' : 'default'}
          {...item}
        />
      )}
    </Flex>
  )
}
export default CheckBar;
