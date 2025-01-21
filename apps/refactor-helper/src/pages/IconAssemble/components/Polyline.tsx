import React from "react";
import styled from "styled-components";

type Props = {
    show?:boolean;
}
const Polyline:React.FC<Props> = ({
                                      show=true
                                  }) => {
    return (
        <div className={`absolute width-100 height-100 events-none ${show ? '':'opacity-0'} transition`}>
            <StyledDiagonal className={'absolute top-0 left-0'}></StyledDiagonal>
            <StyledDiagonal className={'absolute top-0 right-0 right'}></StyledDiagonal>
            <div className={'absolute-center radius-4'}
                 style={{width: '364px', height: '364px', border: '1px solid var(--color-link-2)'}}></div>
            <div className={'absolute-center radius-4'}
                 style={{width: '420px', height: '312px', border: '1px solid var(--color-link-2)'}}></div>
            <div className={'absolute-center radius-4'}
                 style={{width: '312px', height: '420px', border: '1px solid var(--color-link-2)'}}></div>
            <div className={'absolute-center radius-50'}
                 style={{width: '312px', height: '312px', border: '1px solid var(--color-orange-2)'}}></div>
            <div className={'absolute-center radius-50'}
                 style={{width: '420px', height: '420px', border: '1px solid var(--color-orange-2)'}}></div>
            <div className={'absolute-center radius-50'}
                 style={{width: '156px', height: '156px', border: '1px solid var(--color-orange-2)'}}></div>
            <svg width="480" height="480" viewBox="0 0 480 480">
                <polygon stroke-linejoin="round" points="240,30 58,345 422,345" stroke={'var(--color-green-2)'}
                         fill={'none'}/>
            </svg>
            <svg width="480" height="480" viewBox="0 0 480 480">
                <polygon stroke-linejoin="round" points="240,30 58,345 422,345" stroke={'var(--color-green-2)'}
                         fill={'none'}/>
            </svg>
            <div className={'absolute top-0 left-0 width-100 height-100 radius-4'}
                 style={{border: '2px solid var(--color-red-2)', zIndex: 2}}></div>
        </div>
    )
}

const StyledDiagonal = styled.div`
    width: 141.4%;
    height: 1px;
    background-color: var(--color-red-1);
    transform: rotate(45deg);
    transform-origin: left center;

    &.right {
        transform:rotate(-45deg);
        transform-origin:right center;
    }
`
export default Polyline;
