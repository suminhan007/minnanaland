type Props = {
 children?: React.ReactNode;
}
const ArticleSectionLayout:React.FC<Props> = ({
                                               children
                                      }) => <div className={'flex column gap-20'}>{children}</div>
export default ArticleSectionLayout;