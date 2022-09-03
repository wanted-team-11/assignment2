import { ChangeEvent, useState } from "react";

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value as T);
  };

  return { value, onChange };
};
export default useInput;
