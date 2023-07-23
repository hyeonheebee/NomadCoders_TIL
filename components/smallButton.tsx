interface ButtonProps {
  text: string;
  [key: string]: any;
}

export default function SmallButton({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="w-1/6 h-3/4 mt-6 bg-rose-300 hover:bg-red-500 text-white py-2 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
    >
      {text}
    </button>
  );
}
