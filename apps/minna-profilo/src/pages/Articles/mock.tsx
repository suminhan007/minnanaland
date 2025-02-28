import getRandomRgbaColor from "../../hooks/getRandomRgba.ts";
import {articles2025_1_20} from "./articles/articles2025_1_20/articles2025_1_20.tsx";
// import {articles2025_2_18} from "./articles/articles2025_2_18.tsx";
//测试数据
// export const ROTARY_FOLDER_DATA = [
//     ...Array.from({length:12}).map((_i, index) => ({
//         id: `${index+1}`,
//         name:`${index+1}`,
//         date:`${index+1}`,
//         bg: getRandomRgbaColor(0.1),
//         color: getRandomRgbaColor(1),
//         articles:[
//             ...Array.from({length: Math.random()*20}).map((_i, idx) => ({
//                 id: `${idx+1}`,
//                 title: `${index+1}月第${idx+1}篇`,
//                 desc:'1月第1篇的描述',
//                 date:'1月2日',
//                 data: articles2025_1_20,
//                 tag: (idx === 3||idx === 8) ? ['tag']:[]
//             }))
//         ]
//     })),
// ]
export const ROTARY_FOLDER_DATA = [
    {
        id:'1',
        name:'1月',
        date:'1月',
        bg: getRandomRgbaColor(0.1),
        color: getRandomRgbaColor(1),
        articles: [
            {
                id:'23',
                title: '抽奖轮盘的实现方式',
                desc:'',
                date:'1月20日',
                tag: ['总结'],
                data: <></>
            },
            {
                id:'24',
                title: '抽奖轮盘的实现方式',
                desc:'',
                date:'1月20日',
                src: './b38d7d96-61fa-4f09-b322-5329163ec1dd_《Creating_Web_Animations》.pdf'
            }
        ]
    },
    ...Array.from({length:11}).map((_i, index) => ({
        id: `${index+1}`,
        name:`${index+2}月`,
        date:`${index+1}`,
        bg: getRandomRgbaColor(0.1),
        color: getRandomRgbaColor(1),
        articles:[]
    })),
]