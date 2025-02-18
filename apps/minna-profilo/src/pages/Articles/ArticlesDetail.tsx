import React, { useMemo} from "react";
import styled from "styled-components";
import {ROTARY_FOLDER_DATA} from "./mock.tsx";
import {useNavigate} from "react-router-dom";
import {RotaryFolderDataType} from "./RotaryFolder.tsx";

type Props = {
    initialRotate?:number;
}
const ArticlesDetail:React.FC<Props> = ({
                                            // initialRotate=0,
}) => {
    const navigate = useNavigate();
    const activeItem = useMemo(() => {
        const href = window.location.href.split('details/')[1]?.split('-');
        if(href){
            return ROTARY_FOLDER_DATA.filter(i => i.id === href[0])[0].articles.filter(j => j.id === href[1])[0];
        }
        return null;
    },[window.location.href]);
    const activeParentItem = useMemo(() => {
        const href = window.location.href.split('details/')[1]?.split('-');
        if(href){
            return ROTARY_FOLDER_DATA.filter(i => i.id === href[0])[0];
        }
        return null;
    }, [window.location.href])
    function findNodeAndParentIndex( data:RotaryFolderDataType[],nodeId:string, parentId:string) {
        let nodeIndex = -1;
        let parentIndex = -1;

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].articles.length; j++) {
                if (data[i].articles[j].id === nodeId && data[i].id === parentId) {
                    nodeIndex = j;
                    parentIndex = i;
                    return { nodeIndex, parentIndex };
                }
            }
        }

        return { nodeIndex, parentIndex };
    }

    const rotateDirection = useMemo(() => {
        const href = window.location.href.split('details/')[1]?.split('-');
        if(href){
            const { nodeIndex } = findNodeAndParentIndex(ROTARY_FOLDER_DATA,href[1],href[0]);
            const length = ROTARY_FOLDER_DATA.filter(i => i.id === href[0])[0].articles.length;
            if(length > 15){
                return nodeIndex < length/2 ? 'leftIn':'rightIn'
            }else{
                return nodeIndex < 7 ? 'leftIn':'rightIn'
            }
        }
        return 'leftIn'
    },[window.location.href])

    const newData = ROTARY_FOLDER_DATA?.filter(i => i.articles?.length > 0);
    const handleNavigateLast = () => {
        const href = window.location.href.split('details/')[1]?.split('-');
        if(href){
            const { nodeIndex,parentIndex } = findNodeAndParentIndex(newData,href[1],href[0]);
            if(nodeIndex === 0){
                navigate(`/2025articles/details/${newData[parentIndex-1].id}-${newData[parentIndex-1].articles[newData[parentIndex-1].articles.length-1].id}`);
            }else{
                navigate(`/2025articles/details/${newData[parentIndex].id}-${newData[parentIndex].articles[nodeIndex-1].id}`);
            }
        }
    }
    const handleNavigateNext = () => {
        const href = window.location.href.split('details/')[1]?.split('-');
        if(href){
            const { nodeIndex,parentIndex } = findNodeAndParentIndex(newData,href[1],href[0]);
            if(nodeIndex === newData[parentIndex].articles.length-1){
                navigate(`/2025articles/details/${newData[parentIndex+1].id}-${newData[parentIndex+1].articles[0].id}`);
            }else{
                navigate(`/2025articles/details/${newData[parentIndex].id}-${newData[parentIndex].articles[nodeIndex+1].id}`);
            }
        }
    }
    const lastDisabled = useMemo(() => {
        const href = window.location.href.split('details/')[1]?.split('-');
        if(href){
            const { nodeIndex,parentIndex } = findNodeAndParentIndex(newData,href[1],href[0]);
            return nodeIndex === 0 && parentIndex === 0;
        }
        return false;
    },[window.location.href])
    const nextDisabled = useMemo(() => {
        const href = window.location.href.split('details/')[1]?.split('-');
        if(href){
            const { nodeIndex,parentIndex } = findNodeAndParentIndex(newData,href[1],href[0]);
            return nodeIndex === newData[parentIndex].articles.length-1 && parentIndex === newData?.length-1;
        }
        return false;
    },[window.location.href])
    return (
        <StyledArticlesDetailLayout className={`fixed top-0 left-0 flex justify-center width-100 height-100 pt-32 overflow-auto ${rotateDirection}`}>
            <div className={`mask absolute top-0 left-0 width-100 height-100`} ></div>
            <div className={`content relative p-24 radius-12`} style={{border: `1px solid ${activeParentItem?.color}`, backgroundColor: activeParentItem?.bg}}>
                <div className={'article-content'}>
                    <div className={'flex column gap-8'}>
                        <h1 className={'fs-20 color-gray-2'}>{activeItem?.title}</h1>
                        <div className={'fs-12 color-gray-3'}>2025年{activeItem?.date}</div>
                        <div className={'fs-12 color-gray-3'}>{activeItem?.desc}</div>
                    </div>
                    {activeItem?.data && <div className={'fs-14 color-gray-2'}>{activeItem?.data}</div>}
                    {activeItem?.src && <iframe src={activeItem?.src} width={'100%'} height={'100%'} className={'overflow-auto'}/>}
                </div>

                <div className={'back absolute flex both-center radius-100 cursor-pointer'}
                     style={{border: `1px solid ${activeParentItem?.color}`}} onClick={() => navigate('/2025articles')}>
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.79889 24H41.7989" stroke={activeParentItem?.color} strokeWidth="3"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.7988 36L5.79883 24L17.7988 12" stroke={activeParentItem?.color} strokeWidth="3"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className={`last absolute flex both-center radius-100 cursor-pointer ${lastDisabled ? 'disabled':''}`}
                     style={{border: `1px solid ${activeParentItem?.color}`}} onClick={handleNavigateLast}>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 36L19 24L31 12" stroke={activeParentItem?.color} stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={`next absolute flex both-center radius-100 cursor-pointer  ${nextDisabled ? 'disabled':''}`}
                     style={{border: `1px solid ${activeParentItem?.color}`}} onClick={handleNavigateNext}>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 36L19 24L31 12" stroke={activeParentItem?.color} stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </StyledArticlesDetailLayout>
    )
}

const StyledArticlesDetailLayout = styled.div`
    height: 100vh;
    width: 100vw;
    padding-inline: 68px;
    box-sizing: border-box;

    .mask {
        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(4px);
        transition: opacity 0.2s ease-in-out;
        z-index: 1;
    }

    &.leftIn .content{
        animation: leftRotateShowIn .2s ease-in-out;
    }
    &.rightIn .content{
        animation: rightRotateShowIn .2s ease-in-out;
    }
    @keyframes leftRotateShowIn {
        0%{
            transform: rotate(-12deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    @keyframes rightRotateShowIn {
        0%{
            transform: rotate(12deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    .content {
        width: 80%;
        max-width: 1000px;
        z-index: 2;

        .back {
            right: 100%;
            top: 0;
            width: 32px;
            height: 32px;
            transform: translateX(-16px);
        }
        .last,
        .next{
            left: 100%;
            bottom: 0;
            width: 32px;
            height: 32px;
            &.disabled {
                opacity: 0.6;
                pointer-events: none;
            }
        }
        .last{
            transform: translate(16px,-60px);
            svg{
                transform: rotate(90deg);
            }
        }
        .next{
            transform: translate(16px,-16px);
            svg{
                transform: rotate(-90deg);
            }
        }
    }
`
export default ArticlesDetail;