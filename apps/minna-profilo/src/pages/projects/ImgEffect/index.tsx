import {IMG_EFFECT_PROJECT_DATA} from "./mock.ts";
import {useNavigate} from "react-router-dom";
import React, {useState} from 'react'
import {LandInput} from "@suminhan/land-design";

const ImgEffect:React.FC = () => {
    const navigate = useNavigate();
    const originData = IMG_EFFECT_PROJECT_DATA;
    const [data,setData]=useState< {id: string,title: string, desc: string, date: string, src: string }[]>(originData);

    return (<div className={'width-100 height-100 overflow-auto'}>
        <div className={'flex column gap-24 mx-auto width-100'} style={{ maxWidth: '1248px', padding: '88px 24px',boxSizing : 'border-box'}}>
            <div className={'flex justify-between'}>
                <LandInput placeholder={'输入关键词'}
                           onChange={(val:string) => {
                               const newData = originData.filter(i => i.title.includes(val) || i.desc.includes(val));
                               setData(newData);
                           }}/>
            </div>
            <div style={{
                gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))'
            }} className={'grid gap-20'}>
                {data?.map((item, index: number) => <a key={item.id ?? index}
                                                       className={'flex column gap-12 cursor-pointer'}
                                                       onClick={() => navigate(`${item.src}`)}>
                    <div className={'width-100 radius-12 bg-gray overflow-hidden'} style={{aspectRatio: '1'}}>
                        <iframe src={'#/imgEffect/'+item.src} width={'100%'} height={'100%'} style={{border: 'none'}}
                                className={'events-none'}/>
                    </div>
                    <div className={'flex column gap-8'}>
                        {item.title && <div className={'fs-14 fw-600 color-gray-2'}>{item.title}</div>}
                        {item.desc && <div className={'fs-12 color-gray-4'}>{item.desc}</div>}
                        {item.date && <div className={'fs-12 color-gray-4'}>{item.date}</div>}
                    </div>
                </a>)}
            </div>
        </div>
    </div>)
}

export default ImgEffect;