import { LandInput } from '@suminhan/land-design';
import React from 'react'

type Props = {
};

const Prompt: React.FC<Props> = ({
}) => {
  return (
    <div className='flex both-center width-100 height-100'>
      <LandInput />
    </div>
  )
}

export default Prompt;
