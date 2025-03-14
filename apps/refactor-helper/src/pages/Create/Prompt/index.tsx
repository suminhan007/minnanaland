/* 步骤：
  ······1. 简要描述
  ······2.
 */
import { LandButton, LandDivider, LandFlex, LandInput, LandRadio, LandSelect, LandSlider, LandTitle } from '@suminhan/land-design';
import React, { useMemo, useState } from 'react'

type Props = {
};

const Prompt: React.FC<Props> = ({
}) => {
  const [input, setInput] = useState<string>('');
  const [radio, setRadio] = useState<number | string>(1);
  const [similarity, setSimilarity] = useState<number>(5);
  const submitDisabled = useMemo(() => {
    return !input || !radio || !similarity
  }, [input, radio, similarity])
  return (
    <div className='flex column both-center px-24 pt-32 pb-24 mx-auto width-100 height-100 border-box' style={{ maxWidth: '960px' }}>
      <LandTitle title='step1: 结构描述' type='h3' />
      <LandDivider margin={32} />
      <LandFlex column gap={24}>
        <LandFlex column gap={12}>
          <LandTitle title='1. 模块描述' type='p' />
          <LandInput
            placeholder='例如：一个左右切换浏览的【成功案例】模块'
            value={input}
            onChange={val => setInput(val)}
            onClear={() => setInput('')}
            width='100%'
            type='background'
          />
        </LandFlex>

        <LandFlex column gap={12}>
          <LandTitle title='2. 布局限制' type='p' />
          <LandRadio data={[
            { value: 1, label: '不限' },
            { value: 2, label: '中心布局' },
            { value: 3, label: '左右布局' },
            { value: 4, label: '上下布局' },
            { value: 5, label: 'grid 布局' },
            { value: 6, label: 'swiper 布局' },
            {
              value: 7, label: <>其他布局<LandInput
                placeholder='例如：田字格'
                value={input}
                onChange={val => setInput(val)}
                width='100%'
                type='background'
              /></>
            },
          ]}
            checked={radio}
            onChange={val => setRadio(val.value)}
          />
          <LandInput
            placeholder='例如：每行 3 个，共 2 行'
            prefix='其他：'
            value={input}
            onChange={val => setInput(val)}
            onClear={() => setInput('')}
            width='100%'
            type='background'
          />
        </LandFlex>

        <LandFlex column gap={12}>
          <LandTitle title='3. 生成配置' type='p' />
          <LandSelect
            data={[
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '4' }
            ]}
          />
        </LandFlex>

        <LandFlex column gap={12}>
          <LandTitle title='5. 限制程度' type='p' info='限制程度越高' />
          <LandSlider min={0} max={10} value={similarity} onChange={val => setSimilarity(val)} activeBg='white' />
        </LandFlex>

        <LandDivider margin={8} />
        <LandButton type='background' status='primary' className='mx-auto' disabled={submitDisabled}>生成原型图</LandButton>
      </LandFlex>
    </div>
  )
}

export default Prompt;
