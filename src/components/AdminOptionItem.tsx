import styled from "styled-components";

interface Option {
  stockCount: number;
  name: string;
  price: number;
}

interface OptionItemProps {
  option: Option;
  onClickRemoveOption: (option: Option) => void;
}
const AdminOptionItem = ({ option, onClickRemoveOption }: OptionItemProps) => {
  const onClickOption = () => {
    onClickRemoveOption(option);
  };
  return (
    <tr>
      <TD>{option.name}</TD>
      <TD>{option.price}원</TD>
      <TD>{option.stockCount}개</TD>
      <TD>
        <RemoveButton onClick={onClickOption}>삭제</RemoveButton>
      </TD>
    </tr>
  );
};
export default AdminOptionItem;

const TD = styled.td`
  border-bottom: 1px solid #444444;
  padding: 10px;
  text-align: center;
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #fa5858;
  color: white;
  font-size: 14px;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
