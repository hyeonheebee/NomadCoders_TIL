import Like from "./like";

interface singleListProps {
  id: number;
  text: string;
  like: boolean | undefined;
  [key: string]: any;
}

export default function SingleList({ like, text, onClickFn }: singleListProps) {
  return (
    <div className="flex space-x-2 items-end justify-center">
      <div className="flex space-x-0.5 items-center text-sm  text-gray-600">
        <span>{text}</span>
        <Like like={like} onClickFn={onClickFn} />
      </div>
    </div>
  );
}
