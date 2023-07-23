import Like from "./like";

interface singleListProps {
  id: number;
  text: string;
  like: boolean | undefined;
  [key: string]: any;
}

export default function SingleList({ like, text, onClickFn }: singleListProps) {
  return (
    <div className=" flex space-x-8 items-end justify-center">
      <div className="flex space-x-4 items-center text-sm  text-gray-600">
        <span className="text-5xl">{text}</span>
        <Like like={like} onClickFn={onClickFn} />
      </div>
    </div>
  );
}
