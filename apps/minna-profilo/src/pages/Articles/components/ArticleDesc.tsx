import React from "react";
import styled from "styled-components";

type Props = {
    children?: React.ReactNode;
}
const ArticleDesc: React.FC<Props> = ({
                                          children = '正文内容...',
                                      }) => <StyledArticlesDesc className={'fs-16 color-gray-2 indent-2'}>{children}</StyledArticlesDesc>
const StyledArticlesDesc = styled.p`
    em{
        font-weight: bold;
        font-style: italic;
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
`
export default ArticleDesc;