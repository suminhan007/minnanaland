import React, { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { IconArrow, IconFile, IconMore, IconAdd } from '../../components/Icon'

const NavData = [
    {
        id: 1,
        title: '标题1',
        children: [
            {
                secondTitle: '标题1.1',
                children: [
                    { thirdTitle: '标题1.1.1', }
                ]
            },
            {
                secondTitle: '标题标题标题标题标题标题1.2',
                children: [
                    {
                        thirdTitle: '标题标题标题标题标题标题1.1.1',
                        children: [
                            { forthTitle: '标题标题标题标题标题1.1.1.1', }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: '标题标题标题标题标题标题标题2',
        children: [
            {
                secondTitle: '标题2.1',
                children: [
                    { thirdTitle: '标题2.1.1', }
                ]
            },
            {
                secondTitle: '标题2.2',
                children: [
                    { thirdTitle: '标题2.1.1', }
                ]
            }
        ]
    }
]
type Props = {

}
const MDEditor: React.FC<Props> = ({

}) => {
    const [open, setOpen] = useState<number[]>([]);
    const handleTitleClick = (index: number) => {
        let newOpen: number[] = open;
        if (newOpen.includes(index)) {
            newOpen.splice(index, 1)
        } else {
            newOpen.splice(index, 0, index)
        }
        setOpen(newOpen);
        console.log(open, open.includes(index));
    }
    return (
        <StyleContentWrap className='StyleContentWrap flex'>
            <StyleLeftWrap className="StyleLeftWrap p-16 border overflow-auto">
                {
                    NavData.map((item1, index1) =>
                        <StyleNavItem
                            key={index1}
                            className='StyleNavItem color-gray-3 fs-14 transition pointer'
                        >
                            <StyleTitleItem className={`StyleTitleItem first ${open.includes(0) ? 'open' : ''}`} onClick={() => handleTitleClick(index1)}>
                                <IconArrow />
                                <IconFile />
                                <p>{item1.title}</p>
                                <IconMore size={24} />
                                <IconAdd size={24} />
                            </StyleTitleItem>
                            {
                                item1.children?.map((item2, index2) =>
                                    <>
                                        <StyleTitleItem key={index2} className='StyleTitleItem second'>
                                            <IconArrow />
                                            <p>{item2.secondTitle}</p>
                                        </StyleTitleItem>
                                        {
                                            item2.children?.map((item3, index3) =>
                                                <>
                                                    <StyleTitleItem key={index3} className='StyleTitleItem third'>
                                                        <IconArrow />
                                                        <p>{item3.thirdTitle}</p>
                                                    </StyleTitleItem>
                                                </>
                                            )
                                        }
                                    </>
                                )
                            }
                        </StyleNavItem>
                    )
                }
            </StyleLeftWrap>
            <StyleRightWrap className="StyleRightWrap flex-1 px-24 border">
                <Swiper
                >
                    <StyleSwiperSlide className='StyleSwiperSlide'>1</StyleSwiperSlide>
                </Swiper>
            </StyleRightWrap>
        </StyleContentWrap>
    )
}

const StyleContentWrap = styled.div`
    height: 100vh;
`

const StyleLeftWrap = styled.div`
    width: 320px;
    flex-shrink: 0;
`
const StyleRightWrap = styled.div`
    min-width: 800px;
`

const StyleNavItem = styled.div`
    
`

const StyleTitleItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px 8px 0;
    border-radius: 4px;
    p{
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .IconArrow{
        transition: all 0.2s;
        transform: rotate(-90deg);
    }
    .IconAdd,
    .IconMore{
        padding: 4px;
        border-radius: 4px;
        &:hover{
            background-color: #f1f1f1;
        }
    }
    &.first{
        padding-left: 12px;
        &:hover{
            background-color: #f8f8f8;
        }
    }
    &.second{
        padding-left: 24px;
    }
    &.third{
        padding-left: 36px;
    }
    &.forth{
        padding-left: 48px;
    }
    &.open{
        .IconArrow{
            transform: rotate(0);
        }
    }
`

const StyleSwiperSlide = styled(SwiperSlide)`
    
`

export default MDEditor;
