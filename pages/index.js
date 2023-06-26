import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const categoriesURL = "https://books-api.nomadcoders.workers.dev/lists";
export default function IndexPage({ results }) {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const onClick = (listName, encodeName) => {
    router.push(
      {
        pathname: `list/${listName}`,
        query: {
          title: { listName }
        }
      },
      `list/${encodeName}`
    );
  };
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(categoriesURL)).json();

      setCategories(results);
    })();
  }, []);

  return (
    <>
      <div className="flex">
        <span className="title">Newyork Times BestSeller</span>
      </div>
      <div className="wrapper">
        <Seo title="Home" />
        {!categories.length && <h1>....please wait..</h1>}
        <div className="frame">
          {categories.map((category) => (
            <div
              onClick={() =>
                onClick(category.list_name, category.list_name_encoded)
              }
              key={category.list_name}
            >
              <div className="category">{category.list_name}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
      .flex{
        display: flex;
        justify-content: center;
      }
      .title{
        font-size: 55px;
        font-weight: 700;
        text-align:center;
      }
        .wrapper {
          width: 100vw;
          display: flex;
          justify-content: center;
          
        }
        .frame {
          margin-top:70px;
          width: auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(150px, 1fr));
          gap: 10px;
          grid-auto-rows: minmax(100px, auto);
        }
        .frame > div:nth-child(4n) {
          position: relative;
          top: 20px;
          left: 40px;
        }
        .frame > div:nth-child(5n) {
          position: relative;
          left: 40px;
        }
        .category {
          padding: 0px 20px;
          display: inline-block;
          background-color: yellow;
          border-radius: 0px 10px 250px / 0 200px 55px 250px;
          box-shadow: -3px 5px 12px 0 rgba(0, 0, 0, 0.3);
          //-ms-transform: rotateZ(-5deg);
          //-webkit-transform: rotateZ(-5deg);
          //transform: rotateZ(-5deg);
          font-size: 25px;
          cursor: pointer;
        }
        @-webkit-keyframes pulsate-fwd {
          0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
          50% {
            -webkit-transform: scale(1.1);
                    transform: scale(1.1);
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }
        @keyframes pulsate-fwd {
          0% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
          50% {
            -webkit-transform: scale(1.1);
                    transform: scale(1.1);
          }
          100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
        }

        .category:hover {
      
          -webkit-animation: pulsate-fwd 0.5s ease-in-out 1 both;
	        animation: pulsate-fwd 0.5s ease-in-out 1 both;
          
        }
     
        }
      `}</style>
    </>
  );
}

// list_name: "Combined Print and E-Book Fiction"
// display_name: "Combined Print & E-Book Fiction"
// list_name_encoded: "combined-print-and-e-book-fiction"
// oldest_published_date: "2011-02-13"
// newest_published_date: "2023-07-02"
// updated: "WEEKLY"

// Home Page (/): 베스트셀러 전체 리스트를 보여주세요.
// Detail Page (/list/[id]): 베스트셀러 각 카테고리별 책의리스트를 보여주세요.
// About Page (/about): About 페이지 입니다.
// Layout Component 를 사용하세요.
// CSS Modules 혹은 Styled JSX 를 이용하여 예쁘게 꾸며주세요.
export async function getServrSideProps() {
  const { results } = await (await fetch(categoriesURL)).json();
  return { props: { results } };
}
