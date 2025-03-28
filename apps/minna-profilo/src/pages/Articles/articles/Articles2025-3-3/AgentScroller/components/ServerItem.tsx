type Props = {
  message?: React.ReactNode;
}
const ServerItem: React.FC<Props> = ({
  message
}) => {
  return <div className={'fs-14 color-gray-2 radius-12'} style={{ width: 'fit-content' }}>{message}</div>
}
export default ServerItem;