type Props = {
    url?: string;
    alt?: string;
}
const ArticleImage: React.FC<Props> = ({
                                           url = '正文内容...',
                                           alt
                                      }) => <div className={'flex justify-center width-100'} style={{maxHeight: '400px'}}>
    <img src={url} alt={alt} className={'radius-8'} style={{maxHeight: '400px'}} />
</div>
export default ArticleImage;