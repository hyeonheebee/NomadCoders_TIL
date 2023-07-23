import Link from "next/link";
interface NavProps {
  url?: string;
  urlText?: string;
  [key: string]: any;
}
export default function Navigator({ url, urlText, onClickfn }: NavProps) {
  return (
    <nav
      className="w-full bg-orange-600 text-white cursor-pointer px-4 border border-transparent rounded-md shadow-sm font-medium flex justify-between
    "
    >
      {url ? <Link href={url}>{urlText}</Link> : null}
      {onClickfn ? <button onClick={onClickfn}>Logout</button> : null}
    </nav>
  );
}
