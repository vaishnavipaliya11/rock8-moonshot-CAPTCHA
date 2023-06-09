import type { ComponentProps } from "react";
import "./input.css"
interface InputGroupProps extends ComponentProps<"input"> {
  label?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ label, onChange, placeholder ,...rest }: InputGroupProps) => {
  return (
    <label className="input-container">
      <span className="label"> {label}</span>
      <input className="input" required placeholder={placeholder} onChange={onChange} {...rest} />
    </label>
  );
};
export { Input };
