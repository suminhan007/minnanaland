type Props = {
 children?: React.ReactNode;
}
const ArticleLayout:React.FC<Props> = ({
                                               children
                                      }) => <div className={'flex column gap-24 mt-20'}>{children}</div>
export default ArticleLayout;