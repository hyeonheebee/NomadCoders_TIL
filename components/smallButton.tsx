interface ButtonProps {
  text: string;
  [key: string]: any;
}

export default function SmallButton({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="w-1/5 bg-red-500 hover:bg-orange-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
    >
      {text}
    </button>
  );
}
