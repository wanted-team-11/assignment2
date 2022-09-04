import styled from "styled-components";

interface ThumbNailProps {
  item: string;
  onClickRemoveImg: (id: string) => void;
}
const ThumbNail = ({ item, onClickRemoveImg }: ThumbNailProps) => {
  const onClickItem = () => {
    onClickRemoveImg(item);
  };
  return (
    <ImgContainer>
      <img src={item} alt="thumbnail" width={200} height={200} />
      <button onClick={onClickItem}>-</button>
    </ImgContainer>
  );
};

export default ThumbNail;

const ImgContainer = styled.li`
  position: relative;
  width: 200px;
  height: 200px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  :hover {
    opacity: 0.8;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  }
  img {
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 1px;
    right: 1px;
    cursor: pointer;
  }
`;
