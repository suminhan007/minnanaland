type Props = {
  message?: string;
}
const UserItem: React.FC<Props> = ({
  message
}) => {
  return <div className={'px-12 py-8 ml-auto fs-14 color-white bg-primary radius-12'} style={{ width: 'fit-content' }}>{message}</div>
}
export default UserItem;