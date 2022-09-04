import { ReactNode, useId } from "react";

const OrderAgreeCheckbox = ({
  checked,
  onChange,
  name,
  children,
}: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: "all" | "privacy" | "purchase";
  children: ReactNode;
}) => {
  const id = useId();
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default OrderAgreeCheckbox;
