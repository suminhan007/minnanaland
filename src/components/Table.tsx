import React, { CSSProperties } from 'react'
import styled from 'styled-components'

export type TableProps = {
    titleData?: { title: string | React.ReactNode, value: string }[];
    data?: any[]
    style?: CSSProperties;
    className?: string;
}

const Table: React.FC<TableProps> = ({
    titleData,
    data = [],
    style,
    className = ''
}) => {
    return (
        <StyledTable className={`land-table ${className}`} style={style}>
            <thead>
                <tr>
                    {titleData?.map((item1, index1) =>
                        <th key={index1}>{item1.title}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map(item2 =>
                    <tr>
                        {Object.values(item2).map((item3: any) =>
                            <td>{item3}</td>
                        )}
                    </tr>
                )}
            </tbody>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`

export default Table;