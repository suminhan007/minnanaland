import ArticleTitle from "../components/ArticleTitle.tsx";
import ArticleSectionLayout from "../components/ArticleSectionLayout.tsx";
import ArticlePartLayout from "../components/ArticlePartLayout.tsx";
import ArticleDesc from "../components/ArticleDesc.tsx";
import ArticleLayout from "../components/ArticleLayout.tsx";
import ArticleImage from "../components/ArticleImage.tsx";
import {LandLink} from "@suminhan/land-design";
import ArticleContentLayout from "../components/ArticleContentLayout.tsx";

export const article2025_1_1 = <ArticleLayout>
    <ArticleSectionLayout>
        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'一. 什么是深色模式？'}/>
            <ArticleContentLayout>
                <ArticleDesc>深色模式（Dark Mode）也叫做作暗黑模式，是一种低光用户界面（low-light UI）。深色模式可降低设备屏幕发出的亮度，同时满足最低色彩对比度，具有一定用处：
                    <ul>
                        <li>有助于改善视觉人体工程学，减少眼睛疲劳</li>
                        <li>方便在黑暗环境中使用屏幕</li>
                        <li>节省电池电量</li>
                    </ul>
                </ArticleDesc>
                <ArticleDesc>例如，<LandLink style={{fontSize:'16px'}} href={'https://support.apple.com/zh-cn/108350'}>在 iPhone 或 iPad 中切换深色模式</LandLink>体验深色模式的效果。</ArticleDesc>
                <ArticleImage url={'https://cdsassets.apple.com/live/7WUAS350/images/ios/locale/zh-cn/ios-17-iphone-15-pro-settings-control-center.gif'}/>
            </ArticleContentLayout>
        </ArticlePartLayout>
        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'二. 深色模式的兴起与发展'}/>
            <ArticleDesc>深色模式的概念最早可以追溯到早期的计算机界面设计。在图形用户界面（GUI）出现之前，命令行界面普遍采用浅色文字配深色背景的显示方式。随着Web技术的发展，受印刷品设计影响，白底黑字成为网页设计的主流。

                技术革新为深色模式的回归创造了条件。CSS3的成熟使得样式定制更加灵活，CSS变量（Custom Properties）的引入为主题切换提供了技术基础。JavaScript引擎性能的提升，使得实时主题切换成为可能。此外，现代显示技术的发展，特别是OLED屏幕的普及，凸显了深色模式在节能方面的优势。

                用户需求的转变推动了深色模式的普及。随着移动设备使用时间的增加，用户对夜间浏览体验的要求不断提高。系统级深色模式的支持（如macOS的Dark Mode和Windows的夜间模式），也促使网页开发者必须考虑深色模式的实现。
            </ArticleDesc>
        </ArticlePartLayout>

        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'三. 深色模式的设计原则'}/>
            <ArticleContentLayout>
                <ArticleTitle type={'h3'} title={'1. 用深灰色，而不是纯黑色'}/>
                <ArticleDesc>
                    纯白色会反射所有波长的光线，纯黑色会吸收所有波长的光线，是对比度最大的两种颜色。白底黑字时，文字过于刺眼，会使眼睛感觉疲劳，而黑底白字时，文字又难以辨认。
                </ArticleDesc>
                <ArticleTitle type={'h3'} title={'2. 有限的强调色彩'}/>
                <ArticleDesc>
                    使用有限的色彩强调，使大部分空间专用于深色表面。
                </ArticleDesc>
                <ArticleTitle type={'h3'} title={'3. 节省能源'}/>
                <ArticleTitle type={'h3'} title={'4. 增强可访问性'}/>
            </ArticleContentLayout>
        </ArticlePartLayout>
    </ArticleSectionLayout>
    </ArticleLayout>