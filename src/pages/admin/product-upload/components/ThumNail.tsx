interface ThumbNailProps {
  item: string;
  onClickRemoveImg: (id: string) => void;
}
const ThumbNail = ({ item, onClickRemoveImg }: ThumbNailProps) => {
  const onClickItem = () => {
    onClickRemoveImg(item);
  };
  return (
    <li onClick={onClickItem}>
      <img src={item} alt="thumbnail" width={100} height={100} />
    </li>
  );
};

export default ThumbNail;
