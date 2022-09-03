// 테스트용 컴포넌트
// 개발 완료 시 제거할 것
import { getData } from "./api/product.api";
import { useRecoilState } from "recoil";
import { textState } from "./store/text.store";

const Test = () => {
  const [text, setText] = useRecoilState(textState);

  const getdata = () => {
    getData(1);
  };

  const changeText = () => {
    setText("text changed");
  };
  return (
    <>
      <div>test</div>
      <button onClick={getdata}>get data</button>

      <div>{text}</div>
      <button onClick={changeText}>change text</button>
    </>
  );
};

export default Test;
