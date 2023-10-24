import Link from "next/link";
export default function Nav() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          font-size: 30px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

// Home Page (/): 베스트셀러 전체 리스트를 보여주세요.
// Detail Page (/list/[id]): 베스트셀러 각 카테고리별 책의리스트를 보여주세요.
// About Page (/about): About 페이지 입니다.
// Layout Component 를 사용하세요.
// CSS Modules 혹은 Styled JSX 를 이용하여 예쁘게 꾸며주세요.
