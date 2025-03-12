import ArticleSectionLayout from "../components/ArticleSectionLayout.tsx";
import ArticlePreface from "../components/ArticlePreface.tsx";
import ArticlePartLayout from "../components/ArticlePartLayout.tsx";
import ArticleTitle from "../components/ArticleTitle.tsx";
import ArticleDesc from "../components/ArticleDesc.tsx";
import ArticleImage from "../components/ArticleImage.tsx";
import ArticleContentLayout from "../components/ArticleContentLayout.tsx";

export const articles2025_2_1 = <div className={'flex column gap-24 mt-20'}>
        <ArticlePreface>图片是由很多像素组成的，对图片进行一系列特殊处理可以理解为在处理图片的一个个像素。
            如果通过 Canvas 2D API 提供的 getImageData() 方法，可以得到图片的像素数据，每一个像素数据包含了该像素的R、G、B、A四个值。
            对图片进行像素处理相当于在修改每个像素对应的rgba数据，从而得到一张有新的像素数据组成的图片。
            <br/>由此可以联想到一些常见的图片处理方式是如何实现的：
            <ul>
                <li>图片像素化: 依次遍历图片数据 ，将若干个像素（10x10）修改为同一个值。</li>
                <li>提取图片主色: 一次遍历图片的所有像素数据，统计图片所有颜色以及每种颜色出现的次数，最终返回。</li>
                <li>图片换色: 图片像素数据中与指定颜色匹配的像素替换成新的目标像素。</li>
            </ul>
            接下来会依次演示上述三种图片处理的实现方式与细节。
        </ArticlePreface>
    <ArticleSectionLayout>
        <ArticlePartLayout>
            <ArticleTitle title={'图片像素化'} type={'h2'}/>
            <ArticleContentLayout>
                <ArticleDesc>先放一张结果示意图：</ArticleDesc>
                <ArticleImage url={''}/>
                <ArticleDesc>首先，梳理图片像素化的处理思路</ArticleDesc>
                <ArticleDesc>这里我对图片进行了两种像素化处理——合并与平均，两种处理方式对主要差别只有其中一步，即将若干个像素数据的颜色全部修改成哪一个目标颜色。</ArticleDesc>
                <ArticleDesc>合并方式是将若干个像素替换成这若干个像素中出现频率最高的颜色，若无则默认第一个像素。</ArticleDesc>
                <ArticleDesc>平均方式则是将若干个像素替换成这若干个像素平均后的颜色，这种方式处理后，图片新的像素数据会有一个特点——相邻的像素颜色相近，最终使得图片具有马赛克的效果。</ArticleDesc>
                <ArticleImage url={''}/>
                <ArticleDesc>需要注意的是，不管是哪种处理方式，图片的像素数量是不会有变化的，只是对应的像素颜色数量变少了。</ArticleDesc>
                <ArticleDesc>体验地址：<a href={'/imgEffect/imgPixel'}/></ArticleDesc>
            </ArticleContentLayout>
        </ArticlePartLayout>
        <ArticlePartLayout>
            <ArticleTitle title={'提取图片主色'} type={'h2'}/>
            <ArticleDesc></ArticleDesc>
        </ArticlePartLayout>
        <ArticlePartLayout>
            <ArticleTitle title={'图片换色'} type={'h2'}/>
            <ArticleDesc></ArticleDesc>
        </ArticlePartLayout>
    </ArticleSectionLayout>
</div>
