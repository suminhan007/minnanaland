import getRandomRgbaColor from "../../hooks/getRandomRgba.ts";

export const randomCoverColor = [
    {
    name:'articles',
    value:getRandomRgbaColor(1)
},
    {
        name:'life',
        value:getRandomRgbaColor(1)
    },
    {
        name:'project',
        value:getRandomRgbaColor(1)
    },
]
export const HomeData = [
    {
        id: '2025',
        title: '2025年',
        desc: '健康·技术·成熟·丰富',
        cards: [
            {
                id: '2025-2',
                title: '2025年度文章',
                desc: '3D·后端·样式',
                color: randomCoverColor[0].value,
                href:'/2025articles',
                details: '记录2025年零碎的和系统的技术',
                type:randomCoverColor[0].name,
            },
            {
                id: '2025-4',
                title: '做过的组件',
                desc: '演讲·说话·摄影',
                details: '收集在了一个专门的网站～',
                color: randomCoverColor[2].value,
                type: randomCoverColor[2].name
            },
            {
                id: '2025-5',
                title: '摄影集',
                desc: '人像·佳能8R·猫咪·旅行',
                color: randomCoverColor[1].value,
                type: randomCoverColor[1].name
            },
            {
                id: '2025-6',
                title: '项目合集',
                desc: '织作时光·重构工具·AI应用',
                details: <>《织作时光》、《重构工具》、《电子手帐工具》...</>,
                color: randomCoverColor[2].value,
                type: randomCoverColor[2].name
            },
        ],
    },
    {
        id: '2024',
        title: '2024年',
        desc: '锻炼·学习·改变·进步',
        cards: [
            {
                id: '2024-1',
                title: '2024年度文章',
                desc: '2024年度文章',
                color: randomCoverColor[0].value,
                type:randomCoverColor[0].name,
            }
        ],
    },
    {
        id: '2023',
        title: '2023年',
        desc: '挑战·熟练·探索·忙碌',
        cards: [
            {
                id: '2024-1',
                title: '2023年度文章',
                desc: '2024年度文章',
                color: randomCoverColor[0].value,
                type:randomCoverColor[0].name,
            }
        ],
    },
]