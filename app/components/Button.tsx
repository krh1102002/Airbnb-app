"use client";
import { IconType } from "react-icons";

interface buttonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  small?: boolean;
  outline?: boolean;
  icon?: IconType;
}
const Button: React.FC<buttonProps> = ({
  label,
  onClick,
  disabled,
  small,
  outline,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 w-full transition ${
        outline ? "bg-white" : "bg-rose-500"
      }
      ${outline ? "border-blue" : "border-rose-500"}
      ${outline ? "text-black" : "text-white"}
      
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold "}${
        small ? "border-[1px]" : "border-2"
      }
      `}
    >
      {Icon && <Icon className="absolute left-4 top-3" size={24} />}
      {label}
    </button>
  );
};

export default Button;
