interface Option {
  stockCount: number;
  name: string;
  price: number;
}

interface OptionItemProps {
  option: Option;
  onClickRemoveOption: (option: Option) => void;
}
const OptionItem = ({ option, onClickRemoveOption }: OptionItemProps) => {
  const onClickOption = () => {
    onClickRemoveOption(option);
  };
  return (
    <li>
      <div>
        <p>옵션: {option.name}</p>
        <p>가격: {option.price}원</p>
        <p>수량: {option.stockCount}</p>
      </div>
      <button onClick={onClickOption}>X</button>
    </li>
  );
};
export default OptionItem;
