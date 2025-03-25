import ArticleTitle from "../components/ArticleTitle.tsx";
import ArticleLayout from "../components/ArticleLayout.tsx";
import ArticleSectionLayout from "../components/ArticleSectionLayout.tsx";
import ArticlePartLayout from "../components/ArticlePartLayout.tsx";
import ArticleDesc from "../components/ArticleDesc.tsx";

export const articles2025_2_3 = <ArticleLayout>
    <ArticleSectionLayout>
        <ArticlePartLayout>
            <ArticleDesc noIndent>先看看实现的效果：</ArticleDesc>
            <ArticleDesc noIndent><iframe width={'100%'} height={400} src={'#/webgl/audioParticleVisualizer'}/></ArticleDesc>
            <ArticleDesc>在案例页面中，底部的粒子会随着歌曲的旋律节拍抖动，从粒子的波纹中也能看出歌曲的音乐属性。要实现这一效果，无非就是要处理好两个关键元素——音乐数据和粒子。</ArticleDesc>
        </ArticlePartLayout>
        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'音乐数据'}/>
            <ArticleDesc>web中提供了一个 getByteFrequencyData 的 API 可供我们获取音频数据</ArticleDesc>
        </ArticlePartLayout>
    </ArticleSectionLayout>
</ArticleLayout>
