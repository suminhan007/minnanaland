//@ts-nocheck
import { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface TypewriterMarkdownProps {
  content: string;
  speed?: number;
  onComplete?: () => void;
}

const TypewriterMarkdown = ({
  content,
  speed = 30,
  onComplete
}: TypewriterMarkdownProps) => {
  const [displayContent, setDisplayContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCompleted = useRef(false);

  // 滚动到底部的函数
  const scrollToBottom = useCallback(() => {
    const scroller = document.querySelector('.ckt-agent-scroll-layout');
    scroller?.scrollTo({
      top: scroller?.scrollHeight,
      behavior: 'smooth',
    })
  }, []);

  // 核心逐字输出逻辑
  useEffect(() => {
    if (currentIndex >= content.length) {
      if (!isCompleted.current) {
        isCompleted.current = true;
        onComplete?.();
      }
      return;
    }

    const timeoutId = setTimeout(() => {
      // 优先保证段落完整性
      const nextNewline = content.indexOf('\n\n', currentIndex);
      const chunkSize = nextNewline !== -1 && nextNewline - currentIndex < 80
        ? nextNewline - currentIndex + 2
        : 1;

      setDisplayContent(prev => prev + content.slice(currentIndex, currentIndex + chunkSize));
      setCurrentIndex(prev => prev + chunkSize);
      scrollToBottom();
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, speed, onComplete]);

  // Markdown 渲染组件
  const renderMarkdown = useCallback(() => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {displayContent}
    </ReactMarkdown>
  ), [displayContent]);

  return (
    <div
      className="markdown-container"
      style={{
        position: 'relative'
      }}
    >
      {isCompleted ?  <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                  <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
              ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
              );
            }
          }}
      >
        {content}
      </ReactMarkdown>:renderMarkdown()}

      {/* 闪烁光标效果 */}
      {!isCompleted.current && (
        <div
          style={{
            display: 'inline-block',
            width: 2,
            height: '1.2em',
            backgroundColor: '#fff',
            animation: 'blink 1s step-end infinite',
            marginLeft: 4,
            verticalAlign: 'middle'
          }}
        />
      )}
    </div>
  );
};

export default TypewriterMarkdown;