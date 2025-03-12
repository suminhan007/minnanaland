type Props = {
 children?: React.ReactNode;
}
const ArticlePartLayout:React.FC<Props> = ({
                                               children
                                      }) => <div className={'flex column gap-16'}>{children}</div>
export default ArticlePartLayout;