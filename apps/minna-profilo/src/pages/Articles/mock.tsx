import getRandomRgbaColor from "../../hooks/getRandomRgba.ts";
import {articles2025_2_1} from "./articles/articles2025_2_1.tsx";
import {article2025_1_1} from "./articles/article2025_1_1.tsx";
import {article2025_1_2} from "./articles/article2025_1_2.tsx";
import {articles2025_2_2} from "./articles/articles2025_2_2.tsx";

// import {articles2025_2_2} from "./articles/articles2025_2_2.tsx";
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
                data: article2025_1_1
            },
            {
                id:'1-2',
                title: '抽奖轮盘的实现方式',
                desc:'',
                date:'1月20日',
                src: article2025_1_2
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
                title: '图片处理（像素化、提色、换色）',
                desc:'通过对图片的像素数据进行特定处理，输出类似像素画的图片。',
                date:'2月16日',
                data: articles2025_2_1
            },
            {
                id:'2-2',
                title: 'supabase使用指南',
                desc:'如何借助supebase实现无后端的网站的登录、注册等功能。',
                date:'2月22日',
                data: articles2025_2_2
            },
            {
                id:'2-3',
                title: '音频数据的粒子可视化',
                desc:'借助three.js的粒子系统，将音频文件的波形数据可视化。',
                date:'2月24日',
                data: <></>
            }
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
                date:'3月15日',
                data: <></>
            },
            {
                id:'3-3',
                title: '认识 claude.ai',
                desc:'通过实践总结账号密码登录、邮箱验证登录、电话验证登录、微信扫码登录的实现步骤。',
                date:'3月16日',
                data: <></>
            },
        ]
    },
    ...Array.from({length:9}).map((_i, index) => ({
        id: `${index+4}`,
        name:`${index+4}月`,
        date:`${index+4}`,
        bg: getRandomRgbaColor(0.1),
        color: getRandomRgbaColor(1),
        articles:[]
    })),
]