import React from 'react'
import styled from 'styled-components';
import getRandomRgbaColor from '../../hooks/getRandomRgba';


type Props = {
  data?: {
    id: string,
    title?: string,
    desc?: string;
    cards: {
      id: string,
      title?: string,
      desc: string,
    }[]
  };
}

const HomeListItem: React.FC<Props> = ({
  data,
}) => {

  return (
    <div className='mx-auto flex column width-100' style={{maxWidth:'1200px'}}>
      <div className='flex column gap-8 px-24'>
        <div className='fs-24 fw-600 color-gray-2'>{data?.title}</div>
        <div className='fs-16 fw-600 color-primary'>{data?.desc}</div>
      </div>
      <div className='flex width-100 border-box scrollbar-none' style={{paddingBlock: '60px'}}>
        <div className='flex px-24' style={{gap:'60px',width:'fit-content'}}>
        {
            data?.cards?.map((item, index) => <StyledHomeListItem
              key={item.id ?? index}
              className='relative flex-1 flex column gap-12 p-24 bg-white border-box'
              style={{ minWidth: '240px' }}
              color={getRandomRgbaColor(1)}
            >
            <div className='fs-24 fw-600 color-gray-2'>{item.title}</div>
            <div className='fs-16 color-gray-4'>{ item.desc}</div>
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
  height: 240px;
  border: ${props => `2px solid ${props.color}`};
  &::before{
    content: '';
    position: absolute;
    bottom: 12px;
    left: 100%;
    width: 10%;
    height: 100%;
    border: ${props => `2px solid ${props.color}`};
    transform: skewY(-45deg);
    z-index: -1;
  }
  &::after{
    content: '';
    position: absolute;
    bottom: 12px;
    left: 0;
    width: 10%;
    height: 100%;
    border: ${props => `2px solid ${props.color}`};
    transform: skewY(-45deg);
    z-index: -1;
  }

`
export default HomeListItem;
