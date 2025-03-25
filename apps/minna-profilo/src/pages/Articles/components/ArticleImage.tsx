import {CSSProperties} from "react";

type Props = {
    url?: string;
    alt?: string;
    style?: CSSProperties;
    imgStyle?: CSSProperties;
    className?: string;
}
const ArticleImage: React.FC<Props> = ({
                                           url = '正文内容...',
                                           alt,
                                           style,
                                           imgStyle,
    className=''
                                      }) => <div className={`flex justify-center width-100 ${className}`} style={{maxHeight: '400px',...style}}>
    <img src={url} alt={alt} className={'radius-8'} style={{maxHeight: '400px',...imgStyle}} />
</div>
export default ArticleImage;