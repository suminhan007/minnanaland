type Props = {
 children?: React.ReactNode;
}
const ArticleContentLayout:React.FC<Props> = ({
                                               children
                                      }) => <div className={'flex column gap-8'}>{children}</div>
export default ArticleContentLayout;