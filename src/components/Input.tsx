import { useState } from "react";

interface InputProps {
  placeholder?: string;
  type: "text" | "password" | "email";
  initialValue?: string;
  onChange: (value: string) => void;
  label: string;
  isDisabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

function Input({
  placeholder = "",
  initialValue = "",
  onChange,
  type,
  label,
  isDisabled = false,
  hasError = false,
  errorMessage = "Error en el input",
}: InputProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-700 font-small">{label}</label>
      <input
        className={`border py-2 px-4 rounded focus:outline-none focus:ring-2
          ${
            hasError
              ? "border-red-500 focus:ring-red-300"
              : " border-gray-400 focus:ring-teal-500"
          }
          ${isDisabled ? "bg-gray-200" : " bg-white"}
          `}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          console.log(event.target.value);
          setValue(event.target.value);
          onChange(event.target.value);
        }}
        disabled={isDisabled}
      />
      {hasError && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
}

export default Input;