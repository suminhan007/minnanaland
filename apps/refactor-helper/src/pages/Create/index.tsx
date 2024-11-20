import { useMemo, useState } from "react";
import Edit from "./Edit";
import Prompt from "./Prompt";
import StyleConfig from "./StyleConfig";
import TransitionConfig from "./TransitionConfig";
import { LandAffixContainer, LandButton } from "@suminhan/land-design";

export default function Create() {
  const stepsData = [
    { id: 1, element: <Prompt />, placeholder: '1.结构描述' },
    { id: 2, element: <StyleConfig />, placeholder: '2.风格配置' },
    { id: 3, element: <TransitionConfig />, placeholder: '3.交互配置' },
    { id: 4, element: <Edit />, placeholder: '4.编辑' }
  ]
  const lastIndex = useMemo(() => stepsData.length - 1, [stepsData]);
  const [step, setStep] = useState<number>(0);
  return (
    <LandAffixContainer className="flex height-100"
      rbOption={{
        content: <div className='flex gap-12 transition'>
          <LandButton width="80px" type='background' className={`${step === 0 ? 'opacity-0 evens-none' : ''} transition`} onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0}>上一步</LandButton>
          <LandButton width="80px" type='background' status={step === lastIndex ? 'primary' : 'default'} onClick={() => step < lastIndex && setStep(step + 1)} >{step === lastIndex ? '完成' : '下一步'}</LandButton>
        </div>,
        gap: 20,
        custom: true,
      }}
      tcOption={{
        content: <div className="flex gap-12">
          {Array.from({ length: lastIndex + 1 }).map((_i, idx) => <div
            key={idx}
            className="radius-50 transition"
            style={{ width: '8px', height: '8px', backgroundColor: step === idx ? 'var(--color-primary-6)' : 'var(--color-primary-2)' }}
          ></div>)}
        </div>,
        custom: true,
      }}
    >
      {/* 步骤：1.描述（结构） —— 原型图 —— 2.配置（风格） —— 设计稿 —— 3.配置（交互）—— 重构稿 —— 4.编辑（页面）  */}
      {
        stepsData.map((item, index) => <div
          key={item.id ?? index}
          className={`relative height-100 overflow-hidden transition ${index < step ? 'border-right' : ''}`}
          style={{ width: index < step ? '120px' : step === index ? `calc(100vw - ${index * 120}px)` : '0px' }}
        >
          {item.element}
          <div className={`absolute top-0 left-0 flex items-center justify-center width-100 height-100 bg-white color-gray-4 transition ${step === index ? 'opacity-0 events-none' : ''}`} onClick={() => setStep(index)}>{item.placeholder}</div>
        </div>)}
    </LandAffixContainer>
  )
}
