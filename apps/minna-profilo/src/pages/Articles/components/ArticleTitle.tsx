type Props = {
    type?: "h2" | "h3" | "h4" | "h5";
    title?:string;
}
const ArticleTitle:React.FC<Props> = ({
    type = "h2",
    title='标题',
                                      }) => {
    switch (type) {
        case "h2": return <h2 className={'fs-20 color-gray-2 fw-600'}>{title}</h2>;break;
        case "h3": return <h3 className={'fs-18 color-gray-2 fw-600'}>{title}</h3>;break;
        case "h4": return <h4 className={'fs-16 color-gray-2 fw-600'}>{title}</h4>;break;
        case "h5": return <h5 className={'fs-14 color-gray-2 fw-600'}>{title}</h5>;break;
        default: return null;
    }
}
export default ArticleTitle;