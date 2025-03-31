import { useCallback, useEffect, useState } from "react";
import UserItem from "./AgentScroller/components/UserItem.tsx";
import AgentScrollLayout from "./AgentScroller/components/AgentScrollLayout.tsx";
import TypewriterMarkdown from "./AgentScroller/components/TypewriterMarkdown.tsx";
import ServerItem from "./AgentScroller/components/ServerItem.tsx";
import { LandButton } from "@suminhan/land-design";

const AgentScroller2: React.FC = () => {
  const [innerContent, setInnerContent] = useState<{ id: string, content: React.ReactNode }[]>([]);
  const [answering, setAnswering] = useState<boolean>(false);
  useEffect(() => {
    const scroller = document.querySelector('.ckt-agent-scroll-layout');
    scroller?.scrollTo({
      top: scroller?.scrollHeight,
    })
  }, []);
  const scrollToBottom = useCallback(() => {
    const scroller = document.querySelector('.ckt-agent-scroll-layout');
    scroller?.scrollTo({
      top: scroller?.scrollHeight,
      behavior: 'smooth',
    })
  }, []);
  useEffect(() => {
    if (answering) {
      scrollToBottom()
      setTimeout(() => {
        setInnerContent([...innerContent, {
          id: `${Date.now()}`, content: <ServerItem message={<TypewriterMarkdown
            content="# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
"
            speed={20}
            onComplete={() => console.log('Render complete!')}
          />} />
        }]);
        setAnswering(false);
      }, 1000);
    }
  }, [answering])

  const loadHistory = () => {
    setTimeout(() => {
      setInnerContent([{
        id: '111', content: <div className="flex column gap-24">
          <UserItem message="历史问了一个问题" />
          <div>一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答一段历史回答</div>
        </div>
      }, ...innerContent])
    }, 2000)
  }
  return <div className="width-100 flex column bg-gray" style={{ height: '400px' }}>
    <AgentScrollLayout onPreLoad={loadHistory} isEnd className={'px-12 border-box'}>
      {innerContent?.map(i => i.content)}
    </AgentScrollLayout>
    <div className={'flex justify-end px-12 py-12'}>
      <LandButton text={'开始'} onClick={() => {
        setInnerContent([...innerContent, { id: `${Date.now()}`, content: <UserItem message={'问了一个问题'} /> }]);
        setAnswering(true);
      }} />
    </div>
  </div>
}

export default AgentScroller2;
