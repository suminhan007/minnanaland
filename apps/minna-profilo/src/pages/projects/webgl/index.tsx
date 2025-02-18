import {WEBGL_PROJECT_DATA} from "./mock.ts";
import {useNavigate} from "react-router-dom";
import React from 'react'

const WebglProjects:React.FC = () => {
    const navigate = useNavigate();
    return (<div className={'width-100 height-100 overflow-auto'}>
        <div style={{maxWidth:'1248px',padding:'88px 24px',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))'}} className={'grid gap-16 mx-auto width-100'}>
            {WEBGL_PROJECT_DATA.map((item,index:number) => <a key={item.id??index} className={'flex column gap-12 cursor-pointer'} onClick={() => navigate(`${item.src}`)}>
                <div className={'width-100 radius-12 bg-gray overflow-hidden'} style={{aspectRatio:'1'}}>
                    <iframe src={item.src} width={'100%'} height={'100%'} style={{border:'none'}} className={'events-none'}/>
                </div>
                <div className={'flex column gap-8'}>
                    {item.title && <div className={'fs-14 fw-600 color-gray-2'}>{item.title}</div>}
                    {item.desc && <div className={'fs-12 color-gray-4'}>{item.desc}</div>}
                    {item.date && <div className={'fs-12 color-gray-4'}>{item.date}</div>}
                </div>
            </a>)}
        </div>
    </div>)
}

export default WebglProjects;