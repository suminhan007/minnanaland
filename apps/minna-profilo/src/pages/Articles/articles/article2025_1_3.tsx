import ArticleLayout from "../components/ArticleLayout.tsx";
import ArticleSectionLayout from "../components/ArticleSectionLayout.tsx";
import ArticlePartLayout from "../components/ArticlePartLayout.tsx";
import ArticleTitle from "../components/ArticleTitle.tsx";
import ArticleContentLayout from "../components/ArticleContentLayout.tsx";
import ArticleDesc from "../components/ArticleDesc.tsx";

export const article2025_1_3 =<ArticleLayout>
    <ArticleSectionLayout>
        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'一. 图片类型'}/>
            <ArticleContentLayout>
                <ArticleTitle type={'h3'} title={'1. 位图'}/>
                <ArticleDesc>位图，也叫做点阵图，像素图。构成点阵图的最小单位是像素，位图就是由像素阵列的排列来实现其显示效果的，每个像素有自己的颜色信息，在对位图图像进行编辑操作的时候，可操作的对象是每个像素，我们可以改变图像的色相、饱和度、透明度，从而改变图像的显示效果。</ArticleDesc>
                <ArticleDesc>常见的比如：jpg、png、webp等</ArticleDesc>
                <ArticleTitle type={'h3'} title={'2. 矢量图'}/>
                <ArticleDesc>矢量图，也叫做向量图。矢量图并不记录画面上每一点的信息，而是记录了元素形状及颜色的算法，当你打开一幅矢量图的时候，软件对图形对应的函数进行运算，将运算结果图形的形状和颜色显示出来。</ArticleDesc>
                <ArticleDesc>常见的就是 svg 格式的</ArticleDesc>
            </ArticleContentLayout>
        </ArticlePartLayout>

        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'二. 图片的压缩类型'}/>
            <ArticleContentLayout>
                <ArticleTitle type={'h3'} title={'1. 无压缩'}/>
                <ArticleDesc>无压缩的图片格式不对图片数据进行压缩处理，能准确地呈现原图片，例如BMP 格式。</ArticleDesc>
                <ArticleTitle type={'h3'} title={'2. 有损压缩'}/>
                <ArticleDesc>在压缩图片时损失了一部分图片信息（删掉某些像素数据），图片质量也会随之降低。有损压缩造成的图片损失是不可逆的，即不可能将一张有损压缩过的图片恢复成完整的原图。</ArticleDesc>
                <ArticleDesc>有损压缩的代表是 jpg。</ArticleDesc>
                <ArticleTitle type={'h3'} title={'3. 无损压缩'}/>
                <ArticleDesc>对图片的所有数据信息进行编码压缩，这种方式能在保证图片质量的同时降低图片的大小。无损压缩处理后的图片，图片质量不受损耗，可以恢复出原来的图片信息（解压）。</ArticleDesc>
                <ArticleDesc>有损压缩的代表是 png。</ArticleDesc>
            </ArticleContentLayout>
        </ArticlePartLayout>

        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'三. 像素'}/>
            <ArticleDesc>一张位图图片放大后可以看到一个个小格子，这些小格子就是像素。</ArticleDesc>
            <ArticleDesc>像素在计算机中用二进制（0、1）表示，使用的二进制位数越多，像素的色彩就更多。举个🌰，一个像素如果只用一位二进制数表示，只能为0（黑色）或1（白色）。</ArticleDesc>
            <ArticleDesc>下面是一些常见图片格式所使用的二进制位数：</ArticleDesc>

        </ArticlePartLayout>

        <ArticlePartLayout>
            <ArticleTitle type={'h2'} title={'四. 图片的常见格式'}/>
            <ArticleContentLayout>
                <ArticleTitle type={'h3'} title={'1. GIF'}/>
                <ArticleDesc></ArticleDesc>
            </ArticleContentLayout>
        </ArticlePartLayout>
    </ArticleSectionLayout>
</ArticleLayout>
