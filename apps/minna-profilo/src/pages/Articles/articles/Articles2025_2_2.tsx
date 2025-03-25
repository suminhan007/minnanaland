import ArticleSectionLayout from "../components/ArticleSectionLayout.tsx";
import ArticlePartLayout from "../components/ArticlePartLayout.tsx";
import ArticleDesc from "../components/ArticleDesc.tsx";
import ArticleTitle from "../components/ArticleTitle.tsx";
import ArticleLayout from "../components/ArticleLayout.tsx";
import styled from "styled-components";
import React from "react";
import ArticleImage from "../components/ArticleImage.tsx";

const Articles2025_2_2:React.FC = () => <ArticleLayout>
    <ArticleSectionLayout>
        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'一. 什么是 Morph 变形动画'}/>
            <ArticleDesc>变形动画（Morphing Animation）是一种使元素在不同形状之间平滑过渡的视觉效果，广泛应用于UI交互、数据可视化和动态图形设计，常见于按钮状态切换、图标变换、加载动画等场景。传统实现方式依赖 JavaScript 或 Flash，现在 CSS 提供了多种方式实现变形动画，包括 transition、clip-path、SVG等技术。</ArticleDesc>
            <ArticleDesc>
                <ul>
                    <li>transition + border-radius（基础变形）</li>
                    <li>clip-path 路径裁剪（复杂形状变换）</li>
                    <li>{`SVG < path > 变形（矢量图形动画）`}</li>
                </ul>
            </ArticleDesc>
            </ArticlePartLayout>
            <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'二. CSS 实现 Morph 变形动画的几种方案'}/>
            <ArticleTitle type={'h3'} title={'1.1. 基础变形：transition 与 border-radius'}/>
            <ArticleDesc>最简单的变形动画可通过 CSS transition 结合 border-radius 实现，适用于圆形、圆角矩形等基本形状的过渡。</ArticleDesc>
            <ArticleDesc>
                <div className={'flex justify-center py-12'}><StyledAnimationDemo1></StyledAnimationDemo1></div>
            </ArticleDesc>
            <ArticleTitle type={'h3'} title={'1.2. 高级变形：clip-path 路径裁剪'}/>
            <ArticleDesc>CSS 属性 clip-path 使用裁剪方式创建元素的可显示区域，区域内的部分显示，区域外的隐藏。clip-path 支持多边形和更加复杂的 svg 图形。</ArticleDesc>
            <ArticleDesc>
                <ul>
                    <li>
                        <span className={'bold'}>basic-shape</span>: 定义裁切形状
                        <ul>
                            <li>inset(): 定义一个矩形，规定位于参考框的每一边内侧的指定的距离，例如inset(10%)。</li>
                            <li>circle(): 定义一个圆形，使用半径和圆心位置来描述，默认居中，例如circle(6rem at right center)</li>
                            <li>ellipse(): 定义一个椭圆，使用两个半径和一个圆心位置来描述，例如ellipse(20px 50px)</li>
                            <li>polygon(): 定义一个多边形，使用一个 SVG 填充规则和一组顶点来描述。</li>
                            <li>path(): 定义一个任意形状，使用一个可选的 SVG 填充规则和一个 SVG 路径定义。</li>
                        </ul>
                    </li>
                    <li>
                        <span className={'bold'}>geometry-box</span>: 定义裁切参考盒子
                        <ul>
                            <li>margin-box</li>
                            <li>border-box</li>
                            <li>padding-box</li>
                            <li>content-box</li>
                            <li>fill-box</li>
                            <li>stroke-box</li>
                            <li>view-box: 使用最近的 SVG 视口（viewport）作为引用框。</li>
                        </ul>
                    </li>
                </ul>
            </ArticleDesc>
            <ArticleDesc>
                <div className={'mx-auto p-32'} style={{width: '24px',height:'24px',transform:'scale(4)'}}><StyledAnimationDemo2></StyledAnimationDemo2></div>
            </ArticleDesc>
            <ArticleTitle type={'h3'} title={`1.3. SVG <path> 变形动画`}/>
            <ArticleDesc>{`SVG 的 <path> 元素支持 d 属性动态变化，可定义初始和结束路径实现更流畅的矢量图形变形。效果等同于在 clip-path 中使用 svg 图形。`}</ArticleDesc>
            <ArticleDesc>
                <div className={'mx-auto p-32'} style={{width: '24px', height: '24px', transform: 'scale(4)'}}>
                    <StyledAnimationDemo3></StyledAnimationDemo3></div>
            </ArticleDesc>
        </ArticlePartLayout>
        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'三. 路径类型 Morph 变形动画的关键'}/>
            <ArticleDesc>Morph 动画是从一个图形逐渐变化到另一个图形，本质是图形的点与线在移动变化，两个图形能够互相过渡必须具备以下条件：
                <ul>
                    <li>点数相同</li>
                    <li>起点与终点相同，方向相同</li>
                    <li>两点之间的路径相同（例如都为贝塞尔曲线或都为直线，对应代码中形同的绘制方式——L、H、C、Q）</li>
                </ul>
            </ArticleDesc>
            <ArticleImage url={'./images/articles2025/articles2025-2-2-1.png'}
                          imgStyle={{width: '300px'}}></ArticleImage>
            <ArticleDesc>通常，在实现变形动画时拿到的两个图形并不满足以上两个条件，而是满足最少点数的原则，为了让两个图形实现变形效果，就需要手动将两个图形的点、线进行重绘，以满足变形动画的条件。</ArticleDesc>
            <ArticleDesc>下面列举手动重绘的几种方式，实现调整点数与方向、直线转曲线：
                <ul>
                    <li>figma + 插件 fill rule Editor
                        <ArticleImage url={'./images/articles2025/articles2025-2-2-2.png'}
                                      className={'mt-12'}></ArticleImage>
                    </li>
                    <li>Illustrator</li>
                </ul>
            </ArticleDesc>
            <ArticleDesc>转换之后将两个图形的 path 路径作为初始路径和结束路径，即可实现丝滑的 morph
                变形动画。</ArticleDesc>
            <ArticleDesc>
                <div className={'mx-auto p-32'}>
                    <StyledAnimationDemo4></StyledAnimationDemo4>
                </div>
            </ArticleDesc>
        </ArticlePartLayout>
    </ArticleSectionLayout>
</ArticleLayout>

const StyledAnimationDemo1 = styled.div`
    width: 80px;
    height: 80px;
    background-color: var(--color-primary-2);
    animation: morph1 2s linear infinite alternate;
    @keyframes morph1 {
        0%{
            border-radius: 2px;
        }
        100%{
            border-radius: 100px;
        }
    }
`
const StyledAnimationDemo2 = styled.div`
    width: 24px;
    height: 24px;
    background-color: var(--color-primary-2);
    animation: morph2 1s linear infinite alternate;
    @keyframes morph2 {
        0%{
            clip-path: polygon(
                    0% 20%,
                    60% 20%,
                    60% 0%,
                    100% 50%,
                    60% 100%,
                    60% 80%,
                    0% 80%
            );
        }
        100%{
            clip-path: polygon( 
                    0% 20%,
            40% 20%,
            80% 20%,
            80% 50%,
            80% 80%,
            40% 80%,
            0% 80%)
        }
    }
`

const StyledAnimationDemo3 = styled.div`
    width: 24px;
    height: 24px;
    background-color: var(--color-primary-2);
    animation: morph3 2s linear infinite alternate;
    @keyframes morph3 {
        0%{
            clip-path: path('M20.0824 20.0826C20.7528 19.4122 20.7528 18.3315 20.0824 17.6611C19.8822 17.461 19.482 17.0607 19.2819 16.8606C16.6002 14.1789 16.6002 9.83621 19.2819 7.15454C20.3425 6.09387 22.4539 3.98255 23.5045 2.9319C24.1749 2.26148 24.1749 1.1808 23.5045 0.510383C22.8341 -0.160036 21.7534 -0.160036 21.083 0.510383C20.0223 1.57105 17.911 3.68236 16.8604 4.73302C14.1787 7.4147 9.83597 7.4147 7.15429 4.73302C6.95417 4.5329 6.55392 4.13265 6.35379 3.93252C5.68337 3.2621 4.6027 3.2621 3.93228 3.93252C3.26186 4.60294 3.26186 5.68362 3.93228 6.35403C4.1324 6.55416 4.53265 6.95441 4.73278 7.15454C7.41445 9.83621 7.41445 14.1789 4.73278 16.8606C3.67211 17.9213 1.5608 20.0326 0.510138 21.0832C-0.160281 21.7537 -0.160281 22.8343 0.510138 23.5048C1.18056 24.1752 2.26123 24.1752 2.93165 23.5048C3.99231 22.4441 6.10363 20.3328 7.15429 19.2821C9.83597 16.6004 14.1787 16.6004 16.8604 19.2821C17.0605 19.4822 17.4607 19.8825 17.6609 20.0826C18.3313 20.753 19.412 20.753 20.0824 20.0826Z');
        }
        100%{
            clip-path: path('M15.5318 15.5297C15.8613 15.2002 16.131 14.8407 16.3507 14.4613C16.5705 14.0819 16.7303 13.6725 16.8401 13.2531C17.0598 12.4144 17.0499 11.5357 16.8301 10.7069C16.7203 10.2876 16.5505 9.88817 16.3308 9.49875C16.111 9.10934 15.8514 8.77983 15.5318 8.47029C15.2122 8.16076 14.8726 7.89116 14.5031 7.67149C14.1335 7.45182 13.714 7.28208 13.2946 7.17224C12.4456 6.94259 11.5568 6.94259 10.7078 7.17224C10.2884 7.28208 9.88886 7.45182 9.49935 7.67149C9.10984 7.89116 8.78026 8.15077 8.47065 8.47029C8.16104 8.78982 7.88139 9.14928 7.66167 9.51872C7.44194 9.88817 7.28214 10.2976 7.17228 10.7069C6.94257 11.5557 6.94257 12.4443 7.17228 13.2931C7.28214 13.7124 7.45193 14.1118 7.67165 14.5012C7.89138 14.8907 8.15105 15.2202 8.47065 15.5297C8.79025 15.8392 9.14979 16.1188 9.51933 16.3385C9.88886 16.5582 10.2983 16.7179 10.7078 16.8278C11.5568 17.0574 12.4456 17.0574 13.2946 16.8278C13.714 16.7179 14.1135 16.5482 14.5031 16.3285C14.8926 16.1088 15.2222 15.8492 15.5318 15.5297Z');
        }
    }
`
const StyledAnimationDemo4 = styled.div`
    width: 100px;
    height: 100px;
    background-color: var(--color-primary-2);
    animation: morph4 2s linear infinite alternate;
    @keyframes morph4 {
        0%{
            clip-path: path('M49.5528 5L60.7785 39.5491L97.1057 39.5491L67.7164 60.9017L78.9421 95.4509L49.5528 74.0983L20.1636 95.4509L31.3893 60.9017L2 39.5491L38.3271 39.5491L49.5528 5Z');
        }
        100%{
            clip-path: path('M49.5528 5L73.3292 22.2746L97.1057 39.5491L88.0239 67.5L78.9421 95.4509L49.5528 95.4509L20.1636 95.4509L11.0818 67.5L2 39.5491L25.7764 22.2746L49.5528 5Z')
        }
    }
`
export default Articles2025_2_2;