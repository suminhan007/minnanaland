import getRandomRgbaColor from "../../hooks/getRandomRgba.ts";

export const randomCoverColor = [
    {
    name:'articles',
    value:getRandomRgbaColor(1)
},
    {
        name:'project',
        value:getRandomRgbaColor(1)
    },
    {
        name:'collect',
        value:getRandomRgbaColor(1)
    },
    {
        name:'exercises',
        value:getRandomRgbaColor(1)
    },
    {
        name:'life',
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
                desc: '全栈·交互·扩展',
                color: randomCoverColor[0].value,
                href:'/#/2025articles',
                details: '记录2025年输入的知识们。',
                type:randomCoverColor[0].name,
            },
            {
                id: '2025-4',
                title: '组件库',
                desc: '持续更新、优化做过的组件',
                details: '立志做一个日益完善、交互友好的组件库，收集在了一个专门的网站。',
                href:'https://suminhan.cn/land-design',
                target: '_blank',
                color: randomCoverColor[2].value,
                type: randomCoverColor[2].name
            },
            {
                id: '2025-7',
                title: '3D 案例实践',
                desc: '每周实现一个three.js案例。',
                href: '/#/webgl',
                details: <>从基础简单到3D效果入手，逐渐积累，熟悉three.js，丰富3D网页的想象，如粒子效果、书本翻页模拟等...</>,
                color: randomCoverColor[3].value,
                type: randomCoverColor[3].name
            },
            // {
            //     id: '2025-6',
            //     title: '项目合集',
            //     href: '/#/works',
            //     desc: '把一些idea用代码记录下来。',
            //     details: <></>,
            //     color: randomCoverColor[1].value,
            //     type: randomCoverColor[1].name
            // },
            {
                id: '2025-5',
                title: '摄影集',
                desc: '人像·佳能8R·猫咪·旅行',
                details: '主攻人像摄影，记录自己的进步。',
                href: 'https://photos.app.goo.gl/FrEQd258cqVpboiy8',
                target: '_blank',
                color: randomCoverColor[4].value,
                type: randomCoverColor[4].name
            },
            {
                id: '2025-6',
                title: '织作时光',
                href: 'https://croknittime.com',
                desc: '独立全栈打造的手工编织集合站',
                details: <></>,
                color: randomCoverColor[1].value,
                type: randomCoverColor[1].name
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
            },
            {
                id: '2024-2',
                title: '组件库（初建）',
                desc: '持续更新、优化做过的组件',
                details: '立志做一个日益完善、交互友好的组件库，收集在了一个专门的网站。',
                href:'https://suminhan.cn/land-design',
                target: '_blank',
                color: randomCoverColor[2].value,
                type: randomCoverColor[2].name
            },
        ],
    },
    {
        id: '2023',
        title: '2023年',
        desc: '挑战·熟练·探索·适应',
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