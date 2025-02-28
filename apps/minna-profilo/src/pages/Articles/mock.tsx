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
                id:'1-1',
                title: '深色模式的实现方案',
                desc:'',
                date:'1月20日',
                data: <></>
            },
            {
                id:'1-2',
                title: '抽奖轮盘的实现方式',
                desc:'',
                date:'1月20日',
                src: './b38d7d96-61fa-4f09-b322-5329163ec1dd_《Creating_Web_Animations》.pdf'
            }
        ]
    },
    {
        id:'2',
        name:'2月',
        date:'2月',
        bg: getRandomRgbaColor(0.1),
        color: getRandomRgbaColor(1),
        articles: [
            {
                id:'2-1',
                title: '图片像素化',
                desc:'通过对图片的像素数据进行特定处理，输出类似像素画的图片。',
                date:'2月16日',
                data: <></>
            },
            {
                id:'2-2',
                title: '轻量在线数据库——supabase的使用指南',
                desc:'如何借助supebase实现无后端的网站的登录、注册等功能。',
                date:'2月22日',
                data: <></>
            },
            {
                id:'2-3',
                title: 'three.js实现音频数据的粒子化',
                desc:'借助three.js的粒子系统，将音频文件的波形数据可视化。',
                date:'2月24日',
                data: <></>
            },
            {
                id:'2-4',
                title: '深色模式的实现方案',
                desc:'探究常见的网站深色模式的实现方案。',
                date:'2月28日',
                data: <></>
            },
        ]
    },
    {
        id:'3',
        name:'3月',
        date:'3月',
        bg: getRandomRgbaColor(0.1),
        color: getRandomRgbaColor(1),
        articles: [
            {
                id:'3-1',
                title: 'Ant Design 的底层逻辑',
                desc:'从设计、交互、技术三个角度分析 Ant Design 的组件库设计逻辑。',
                date:'3月7日',
                data: <></>
            },
            {
                id:'3-2',
                title: 'TDesign的底层逻辑',
                desc:'通过对图片的像素数据进行特定处理，输出类似像素画的图片。',
                date:'3月16日',
                data: <></>
            },
        ]
    },
    ...Array.from({length:11}).map((_i, index) => ({
        id: `${index+3}`,
        name:`${index+3}月`,
        date:`${index+3}`,
        bg: getRandomRgbaColor(0.1),
        color: getRandomRgbaColor(1),
        articles:[]
    })),
]