import React, {Fragment} from "react";
import styled from "styled-components";

export type RotaryFileDataType = {
    id: string;
    title: string;
    desc: string;
    /** 日期 */
    date:string;
    tag?:string[];
}
export type RotaryFolderDataType = {
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
    onClick?: (item:RotaryFileDataType,parentItem:RotaryFolderDataType) => void;
}

const RotaryFolder:React.FC<Props> = ({
                                          data,
                                          onClick
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
    const minCount = 8;
    const getRotateAngle = (index:number,idx:number,item:RotaryFolderDataType) => {
        const double = index%2 === 1;
        const angle = item.articles.length > minCount ? 180/(item.articles.length-1) : 180/(minCount-1);
        if(!double){
            return -90 + idx*angle
        }else{
           return  90 + idx * angle - angle*2 * idx
        }
    }
    return (
        <StyledRotaryFolderLayout className={'relative flex items-center shrink-0 overflow-auto'}>
            {data?.map?.((item, index) => <Fragment key={item.id ?? index}>
                    <div className={'relative flex shrink-0'}
                         style={{
                             width: '67%',
                             maxWidth: '900px',
                             minWidth: '600px',
                             aspectRatio: '2',
                             transform: index % 2 ? `translate(-${45 * index}%,60%)` : `translate(-${45 * index}%,-60%)`
                         }}
                    >
                        {item.articles.map((itm, idx) =>
                            <StyledRotaryFile
                                key={itm.id ?? idx}
                                className={`absolute ${index % 2 ? 'double' : ''} ${index === 0 ? 'first' : ''}`}
                                style={{
                                    transform: index % 2 ? `translate(-50%,-50%) rotate(${getRotateAngle(index, idx, item)}deg)` : `translate(-50%,-50%) rotate(${getRotateAngle(index, idx, item)}deg)`,
                                }}
                                onClick={() => onClick?.(itm, item)}
                            >
                                <div className={'content width-100'}
                                     style={{animationDelay: `${getRotaryAngle(index, idx) * minCount}ms`}}>
                                    <div
                                        className={`relative hover-content flex column ${index % 2 ? 'items-end pb-16 ' : 'pt-16'} px-16 width-100 fs-12 color-gray-2 radius-4 cursor-pointer`}
                                        style={{background: item.bg, color: item.color, border: `1px solid ${item.color}`}}
                                    >
                                        {itm.title}
                                        <div className={'fs-10 color-gray-4'}>{itm.date}</div>
                                        <div className={`absolute ${index%2?'bottom-8':'top-8'} right-0 flex gap-4 fs-10 color-white`}>
                                            {itm.tag?.map((j, jdx) => <div key={jdx} className={'px-4'} style={{
                                                writingMode: 'horizontal-tb',
                                                backgroundColor: item.color,
                                                borderTopLeftRadius: '4px',
                                                borderBottomLeftRadius: '4px'
                                            }}>{j}</div>)}
                                        </div>
                                    </div>
                                </div>
                            </StyledRotaryFile>
                        )}
                        {item.articles.length < minCount && <>
                            {Array.from({length: minCount - item.articles.length}).map((_itm, idx) => <StyledRotaryFile
                                key={idx}
                                className={`absolute ${index % 2 ? 'double' : ''} ${index === 0 ? 'first' : ''} default events-none`}
                                style={{transform: index % 2 ? `translate(-50%,-50%) rotate(${getRotateAngle(index, item.articles.length + idx, item)}deg)` : `translate(-50%,-50%) rotate(${getRotateAngle(index, item.articles.length + idx, item)}deg)`}}
                            >
                                <div className={'content width-100'}
                                     style={{animationDelay: `${(getRotaryAngle(index, idx) + item.articles.length) * minCount}ms`}}>
                                    <div
                                        className={'hover-content flex gap-12 pt-16 px-16 width-100 fs-12 radius-4 cursor-pointer'}
                                        style={{
                                            background: item.bg,
                                            color: item.color,
                                            border: `1px solid ${item.color}`,
                                            opacity: 0.3
                                        }}
                                    >
                                    </div>
                                </div>
                            </StyledRotaryFile>)}
                        </>}
                        <div className={`absolute ${index % 2 ? 'top-0 pt-32' : 'bottom-0'} fw-600`} style={{
                            color: item.color,
                            left: '50%',
                            transform: index % 2 ? 'translate(-50%,-20%)' : 'translate(-50%,-20%)'
                        }}>{item.name}</div>
                        {index===0&&<svg width="34%" viewBox="0 0 103 86" fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={'absolute'} style={{top: '100%', left: '6%',transform:'translateY(20%)'}}>
                            <path
                                d="M102 0.5C102 28.3904 79.3904 51 51.5 51M51.5 51C23.6096 51 1 28.3904 1 0.5M51.5 51V77.5M51.5 77.5L39.5 85.5M51.5 77.5L61 85.5"
                                stroke={data ? data[0].color : ''}
                                strokeWidth={0.3}
                            />
                        </svg>}
                        {index === data?.length - 1 && <svg width={'34%'} viewBox="0 0 85 100" fill="none" style={{bottom: '100%', right: '6%', transform: 'translateY(-20%)'}}>
                            <path
                                d="M35.4068 38.5778C28.0674 37.6863 13.3064 30.451 11.1166 19.6454C9.90718 13.6777 13.7646 7.85942 19.7323 6.65001C23.3869 5.90939 26.9854 7.06889 29.5037 9.44952C30.8964 6.27629 33.7596 3.80728 37.4142 3.06666C43.3819 1.85725 49.2002 5.71468 50.4096 11.6824C52.5994 22.488 41.8199 34.8992 35.4068 38.5778ZM35.4068 38.5778C39.8586 50.4269 40.8982 57.1118 41.5911 69.0938"
                                stroke={data ? data[data?.length - 1].color : ''}
                                strokeWidth={0.3}
                                opacity={data[data?.length - 1].articles.length >= minCount ? 1 : 0.3}
                                stroke-linecap="square" stroke-linejoin="round"
                            />
                            <path
                                d="M84.29 99.5C78.0437 82.2838 61.6905 70 42.5002 70C23.3099 70 6.95677 82.2838 0.710449 99.5"
                                stroke={data ? data[data?.length - 1].color : ''}
                                strokeWidth={0.3}
                                opacity={data[data?.length - 1].articles.length >= minCount ? 1 : 0.3}
                            />
                        </svg>
                        }
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
        width: 120px;
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
