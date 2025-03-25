import React from "react";
import styled from "styled-components";

type Props = {
    noIndent?: boolean;
    children?: React.ReactNode;
}
const ArticleDesc: React.FC<Props> = ({
                                          noIndent,
                                          children = '正文内容...',
                                      }) => <StyledArticlesDesc className={`fs-14 color-gray-2 ${noIndent ? '':'indent-2'}`}>{children}</StyledArticlesDesc>
const StyledArticlesDesc = styled.div`
    em{
        font-weight: bold;
        font-style: italic;
    }
    .bold{
        font-weight: bold;
    }
    iframe{
        border: none;
        border-radius: 8px;
    }
    .highlight{
        background: var(--color-primary-1);
        border-radius: 2px;
        padding: 2px 4px;
    }
    ol,
    ul{
        padding-left: 2em;
        li{
            text-indent: 0;
        }
    }
`
export default ArticleDesc;