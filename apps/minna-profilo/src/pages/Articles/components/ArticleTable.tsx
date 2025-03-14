import styled from "styled-components";

type Props = {
 children?: React.ReactNode;
}
const ArticleTable:React.FC<Props> = ({
                                               children
                                      }) => <StyledArticleTable>{children}</StyledArticleTable>

const StyledArticleTable = styled.table`
    border-radius: 8px;
    border-collapse: unset;
    thead{
        background-color: var(--color-bg-1);
        th{
            padding-block: 4px;
        }
    }
    th,
    td{
        text-align: center;
        line-height: 40px;
    }
    td{
        border-bottom: 1px solid var(--color-border-1);
        box-sizing: border-box;
        &:not(:first-child){
            border-left: 1px solid var(--color-border-1);
        }
    }
`
export default ArticleTable;
