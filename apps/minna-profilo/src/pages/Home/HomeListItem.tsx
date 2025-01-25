import React from 'react'
import styled from 'styled-components';

export type HomeDataItemType = {
  id: string,
  title?: string,
  desc?: string;
  cards: {
    id: string,
    title?: string,
    desc?: string,
    color?:string,
    type?:string,
    href?:string,
    target?:string;
    details?:string|React.ReactNode;
  }[]
}
type Props = {
  type?:string;
  data?: HomeDataItemType;
}

const HomeListItem: React.FC<Props> = ({
                                         type='',
  data,
}) => {
  return (
    <div className='mx-auto flex column width-100'>
      <div className='flex column width-100 gap-8 px-24 border-box' style={{maxWidth:'1200px',marginInline:'auto'}}>
        <div className='fs-24 fw-600 color-gray-2'>{data?.title}</div>
        <div className='fs-16 fw-600 color-gray-3'>{data?.desc}</div>
      </div>
      <div className='flex width-100 border-box scrollbar-none' style={{paddingBlock:'32px',paddingInline: 'calc((100vw - 1200px) / 2)'}}>

        <div className='flex px-24' style={{gap:'24px'}}>
        {
            data?.cards?.filter(j=>j.type?.includes(type))?.map((item, index) => <StyledHomeListItem
                key={item.id ?? index}
                className='relative flex justify-end'
            >
              <div className={'relative height-100'} style={{width: '200px'}}>
                {/*封面*/}
                <div className={'cover absolute top-0 left-0 width-100 height-100 shadow-light'}>
                  <div className={'cover-content absolute width-100 height-100 top-0 left-0'}
                       style={{backgroundColor: item.color, opacity: 0.2}}></div>
                  <div className={'cover-text flex column gap-12 items-center'} style={{color: item.color}}>
                    <div className={'cover-title'}>{item.title}</div>
                    {item?.desc && <div className={'cover-desc flex justify-end fs-12'}
                          style={{color: item.color, opacity: 0.5}}>{item?.desc}</div>}
                  </div>
                  <div className={'cover-left absolute top-0 left-0 height-100'}
                       style={{backgroundColor: item.color, opacity: 0.2}}></div>
                </div>
                {/*内页*/}
                <div className={'inner-page right absolute left-0 flex column items-center p-24 border-box bg-white'}>
                  <div className={'inner-details fs-16 color-gray-2'}>{item.details}</div>
                  {item.href&&<a className={'flex both-center fs-14 cursor-pointer'} style={{backgroundColor: item.color}}
                      href={item.href} target={item.target ?? '_self'}>查看详情</a>}
                </div>
                {/*背后封面*/}
                <div className={'cover-back absolute left-0 top-0 width-100 height-100'}
                     style={{backgroundColor: item.color, opacity: 0.2}}>
                </div>
                <div className={'cover-back-left absolute top-0 left-0 height-100'}
                     style={{backgroundColor: item.color, opacity: 0.2}}></div>
              </div>
            </StyledHomeListItem>)
        }
        </div>
      </div>
    </div>
  )
}

const StyledHomeListItem = styled.div<{
  color?: string;
}>`
  width: 200px;
  height: 240px;
  border: ${props => `2px solid ${props.color}`};
  transition: width 800ms ease-in-out;
  user-select: none;

  .cover {
    top: 0;
    transition: transform 800ms ease-in-out;
    transform-origin: left center;
    z-index: 1;
    .cover-content{
      transition: border-radius 800ms ease-in-out;
      border-radius: 4px 13px 13px 4px;
      overflow: hidden;
    }

    .cover-text {
      margin-left: auto;
      width: 92%;
      margin-top: 20%;
    }
    .cover-title{
      font-size: 24px;
      font-family: "Momozhuanji", sans-serif;
    }
  }
  .cover  .cover-left, 
  .cover-back-left{
    width: 10%;
    border-radius: 4px 0 0 4px;
    transition: border-radius 800ms ease-in-out;
    pointer-events: none;
  }
  .inner-page{
    top: 2px;
    width: calc(100% - 2px);
    height: calc(100% - 4px);
    border-radius: 0 12px 12px 0;
    z-index: 0;
    .inner-details{
      text-indent: 2em;
      line-height: 1.5em;
      font-family: "Momozhuanji", sans-serif;
    }
    a{
      appearance: none;
      border: none;
      outline: none;
      width: 60%;
      height: 28px;
      margin-top: auto;
      color: white;
      border-radius: 4px;
      transition: transform .2s linear;
      &:hover{
        transform: scale(1.1);
      }
    }
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 12px;
      background-color: white;
      transition: opacity 600ms ease-in-out;
      backdrop-filter: blur(4px);
      pointer-events: none;
    }
  }
  .cover-back{
    transition: border-radius 800ms ease-in-out;
    border-radius: 4px 13px 13px 4px;
    z-index: -2;
    pointer-events: none;
}
  .cover-back-left{
    z-index: -2;
    pointer-events: none;
  }
  &:hover{
    width: 400px;
    .cover{
      transform: perspective(1000px) rotateY(-180deg);
    }
    .cover-content,
    .cover-back{
      border-radius: 0 16px 16px 0;
    }
    .cover .cover-left,
    .cover-back-left{
      border-radius: 0;
    }
    .inner-page::before{
      opacity: 0;
      transition-delay: 200ms;
    }
  }
`
export default HomeListItem;
