import React, {Fragment} from "react";
import styled from "styled-components";

type RotaryFileDataType = {
    id: string;
    title: string;
    desc: string;
    /** 日期 */
    date:string;
    tag?:string[];
}
type RotaryFolderDataType = {
    id: string;
    name: string;
    /** 月份 */
    date:string;
    articles: RotaryFileDataType[];
    bg?:string;
    color?:string;
}
type Props = {
    data?: RotaryFolderDataType[];
}

const RotaryFolder:React.FC<Props> = ({
                                          data,
                                      }) => {
    const getRotaryAngle = (index:number,idx:number) => {
        let leafNodeCount = 0;
        let found = false;

        data?.some((subArray, i) => {
            return subArray.articles.some((_node:RotaryFileDataType, j:number) => {
                if (i === index && j === idx) {
                    found = true;
                    return true; // 终止内部循环
                }
                leafNodeCount++;
                return false;
            });
        });

        return found ? leafNodeCount : 0; // 如果未找到指定节点，返回 -1
    }

    const getRotateAngle = (index:number,idx:number,item:RotaryFolderDataType) => {
        const double = index%2 === 1;
        const angle = item.articles.length > 15 ? 180/(item.articles.length-1) : 180/14;
        if(!double){
            return -90 + idx*angle
        }else{
           return  90 + idx * angle - angle*2 * idx
        }
    }
    return (
        <StyledRotaryFolderLayout className={'relative flex items-center shrink-0 overflow-auto'}>
            {data?.map?.((item,index) => <Fragment key={item.id ?? index}>
                    <div  className={'relative flex shrink-0'}
                         style={{width: '67%', maxWidth:'1000px',aspectRatio: '2',transform: index%2 ? 'translateY(60%)':'translateY(-60%)',marginLeft: index>0 ? '-30%':''}}
                    >
                        {item.articles.map((itm, idx) =>
                            <StyledRotaryFile
                                key={itm.id ?? idx}
                                className={`absolute ${index % 2 ? 'double' : ''} ${index === 0 ? 'first' : ''}`}
                                style={{
                                    transform: index % 2 ? `translate(-50%,-50%) rotate(${getRotateAngle(index, idx, item)}deg)` : `translate(-50%,-50%) rotate(${getRotateAngle(index, idx, item)}deg)`,
                                }}
                            >
                                <div className={'content width-100'}
                                     style={{animationDelay: `${getRotaryAngle(index, idx) * 15}ms`}}>
                                    <div
                                        className={`relative hover-content flex column ${index%2 ? 'items-end pb-16 ':'pt-16'} px-16 width-100 fs-12 color-gray-2 radius-4 cursor-pointer`}
                                        style={{background:item.bg, color:item.color,border: `1px solid ${item.color}`}}
                                    >
                                        {itm.title}
                                        <div className={'fs-10 color-gray-4'}>{itm.date}</div>
                                        <div className={'absolute top-8 right-0 flex gap-4 fs-10 color-white'}>
                                            {itm.tag?.map((j,jdx) => <div key={jdx} className={'px-4'} style={{writingMode:'horizontal-tb',backgroundColor:item.color,borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px'}}>{j}</div>)}
                                        </div>
                                    </div>
                                </div>
                            </StyledRotaryFile>
                        )}
                        {item.articles.length < 15 && <>
                            {Array.from({length: 15 - item.articles.length}).map((_itm, idx) => <StyledRotaryFile
                                className={`absolute ${index % 2 ? 'double' : ''} ${index === 0 ? 'first' : ''} default`}
                                style={{transform: index % 2 ? `translate(-50%,-50%) rotate(${getRotateAngle(index, item.articles.length+idx, item)}deg)` : `translate(-50%,-50%) rotate(${getRotateAngle(index, item.articles.length+idx, item)}deg)`}}
                            >
                                <div className={'content width-100'}
                                     style={{animationDelay: `${(getRotaryAngle(index,idx) + item.articles.length) * 15}ms`}}>
                                    <div
                                        className={'hover-content flex gap-12 pt-16 px-16 width-100 fs-12 radius-4 cursor-pointer'}
                                        style={{background:item.bg, color:item.color,border: `1px solid ${item.color}`,opacity:0.3}}
                                    >
                                    </div>
                                </div>
                            </StyledRotaryFile>)}
                        </>}
                        <div className={`absolute ${index%2 ? 'top-0 pt-32':'bottom-0'} fw-600`} style={{color:item.color,left:'50%',transform:index%2?'translate(-50%,-20%)':'translate(-50%,-20%)'}}>{item.name}</div>
                    </div>
                </Fragment>
            )}
        </StyledRotaryFolderLayout>
    )
}

const StyledRotaryFile = styled.div`
    top: 50%;
    left: 50%;
    height: 50%;
    writing-mode: vertical-lr;
    text-orientation: upright;
    transform-origin: bottom center;
    user-select: none;
    padding-bottom: 20%;
    &.double {
        transform-origin: top center;
        padding-bottom: 0;
        padding-top: 20%;
        &:hover:not(.default) {
            .hover-content {
                transform: translateY(20px);
            }
        }
    }

    .content {
        width: 80px;
        opacity: 0;
        animation: rotateIn .2s ease-in-out forwards;
    }

    .desc {
        opacity: 0;
    }

    .hover-content {
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }

    &:hover:not(.default) {
        transform: rotate(0deg);

        .hover-content {
            transform: translateY(-20px);
        }
    }

    @keyframes rotateIn {
        0% {
            opacity: 0;
            transform: scaleY(0.2);
        }
        100% {
            opacity: 1;
            transform: scaleY(1);
        }
    }
`

const StyledRotaryFolderLayout = styled.div`
    width: 100vw;
`
export default RotaryFolder;
