// 테스트용 컴포넌트
// 개발 완료 시 제거할 것
import { getData } from "./api/product.api";

const Test = () => {
  const getdata = () => {
    getData(1);
  };
  return (
    <>
      <div>test</div>
      <button onClick={getdata}>get data</button>
    </>
  );
};

export default Test;
