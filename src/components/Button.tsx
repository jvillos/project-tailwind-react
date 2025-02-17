type Variant = "default" | "hover";

interface ButtonProps {
  text: string;
  variant?: Variant; // ? hace la prop opcional
  onClick: (text: string) => void;
}


function Button({ text, variant = "default", onClick }: ButtonProps) {
  const variants: Record<Variant, string> = {
    default: "bg-blue-500 hover:bg-blue-700",
    hover: "bg-gray-500 hover:bg-gray-700",
  };

  return (
    <button
      className={` ${variants[variant]} text-white font-bold py-2 px-4 rounded cursor-pointer`}
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </button>
  );
}

export default Button;