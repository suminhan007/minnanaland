import React from "react";

type Props = {
    children?: React.ReactNode;
}
const ArticlePreface: React.FC<Props> = ({
                                          children = '前言内容...',
                                      }) => <div className={'p-16 fs-14 color-gray-3 radius-8 bg-gray indent-2 radius-8'}>{children}</div>

export default ArticlePreface;