import getRandomRgbaColor from "../../hooks/getRandomRgba.ts";
//测试数据
// export const ROTARY_FOLDER_DATA = [
//     ...Array.from({length:12}).map((_i, index) => ({
//         id: `${index+1}`,
//         name:`${index+1}月`,
//         date:`${index+1}月`,
//         bg: getRandomRgbaColor(0.1),
//         color: getRandomRgbaColor(1),
//         articles:[
//             ...Array.from({length: Math.random()*20}).map((_i, idx) => ({
//                 id: `${index+1}-${idx+1}`,
//                 title: `${index+1}月第${idx+1}篇`,
//                 desc:'1月第1篇的描述',
//                 date:'1月2日',
//             }))
//         ]
//     })),
// ]

export const ROTARY_FOLDER_DATA = [
    {
        id:'2025-1',
        name:'1月',
        date:'1月',
        bg: getRandomRgbaColor(0.1),
        color: getRandomRgbaColor(1),
        articles: [
            {
                id:'2025-1-1',
                title: '抽奖轮盘的实现方式',
                desc:'',
                date:'1月20日',
                tag: ['css']
            }
        ]
    }
]