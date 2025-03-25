import {CSSProperties} from "react";

type Props = {
    url?: string;
    alt?: string;
    style?: CSSProperties;
    imgStyle?: CSSProperties;
}
const ArticleImage: React.FC<Props> = ({
                                           url = '正文内容...',
                                           alt,
                                           style,
                                           imgStyle
                                      }) => <div className={'flex justify-center width-100'} style={{maxHeight: '400px',...style}}>
    <img src={url} alt={alt} className={'radius-8'} style={{maxHeight: '400px',...imgStyle}} />
</div>
export default ArticleImage;