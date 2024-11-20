import { useMemo, useState } from "react";
import Edit from "./Edit";
import Prompt from "./Prompt";
import StyleConfig from "./StyleConfig";
import TransitionConfig from "./TransitionConfig";
import { LandAffixContainer, LandButton } from "@suminhan/land-design";

export default function Create() {
  const stepsData = [
    { id: 1, element: <Prompt /> },
    { id: 2, element: <StyleConfig /> },
    { id: 3, element: <TransitionConfig /> },
    { id: 4, element: <Edit /> }
  ]
  const lastIndex = useMemo(() => stepsData.length - 1, [stepsData]);
  const [step, setStep] = useState<number>(0);
  return (
    <LandAffixContainer className="flex height-100"
      rbOption={{
        content: <div className='flex gap-12 transition'>
          <LandButton type='background' onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0}>上一步</LandButton>
          <LandButton type='background' onClick={() => step < lastIndex && setStep(step + 1)} disabled={step === lastIndex}>下一步</LandButton>
        </div>,
        gap: 20
      }}
      tcOption={{
        content: <div className="flex gap-12">
          {Array.from({ length: lastIndex + 1 }).map((_i, idx) => <div
            key={idx}
            className="radius-50 transition"
            style={{ width: '8px', height: '8px', backgroundColor: step === idx ? 'var(--color-primary-6)' : 'var(--color-primary-2)' }}
          ></div>)}
        </div>
      }}
    >
      {/* 步骤：1.描述（布局） —— 原型图 —— 2.配置（风格） —— 设计稿 —— 3.优化（交互）—— 重构稿 —— 4.编辑（页面）  */}
      {
        stepsData.map((item, index) => <div
          key={item.id ?? index}
          className={`height-100 overflow-hidden transition ${index < step ? 'border-right' : ''}`}
          style={{ width: index < step ? '10vw' : step === index ? `${70 + (lastIndex - index) * 10}vw` : '0px' }}
        >
          {item.element}
        </div>)}
    </LandAffixContainer>
  )
}
