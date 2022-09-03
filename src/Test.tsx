import { useRecoilState } from "recoil";
import { textState } from "./store/text.store";
import { getData } from "./api/product.api";
/**
 *
 * 테스트용 컴포넌트
 * 개발 완료 시 제거할 것
 */
const Test = () => {
  const [text, setText] = useRecoilState(textState);

  const getdata = () => {
    getData(1);
  };

  return (
    <>
      <div>test</div>
      <button onClick={getdata}>get data</button>
      <div>text</div>
    </>
  );
};

export default Test;
