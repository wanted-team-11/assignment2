import { ChangeEvent, useState } from "react";

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value as T);
  };
  const resetValue = () => setValue(initialValue);

  return { value, resetValue, onChange };
};
export default useInput;
