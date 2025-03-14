import ArticleTitle from "../components/ArticleTitle.tsx";
import ArticleLayout from "../components/ArticleLayout.tsx";
import ArticleSectionLayout from "../components/ArticleSectionLayout.tsx";
import ArticlePartLayout from "../components/ArticlePartLayout.tsx";
import ArticleDesc from "../components/ArticleDesc.tsx";

export const articles2025_2_3 = <ArticleLayout>
    <ArticleSectionLayout>
        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'先看看实现的效果'}/>
            <ArticleDesc noIndent><iframe width={'100%'} height={400} src={'#/webgl/audioParticleVisualizer'}/></ArticleDesc>
        </ArticlePartLayout>
    </ArticleSectionLayout>
</ArticleLayout>
