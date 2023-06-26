import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Details() {
  const detailURL = "https://books-api.nomadcoders.workers.dev/list?name";
  const [details, setDetails] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  console.log("router.query", router.query);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`${detailURL}=${id}`)).json();

      setDetails(results);
    })();
  }, [id]);
  return (
    <>
      <div className="wrapper">
        <span className="category">{id}</span>
        <div className="frame">
          {details.books ? (
            <>
              {!details.books.length && <h1>....please wait..</h1>}
              {details.books.map((book) => (
                <div className="cardContainer" key={book.primary_isbn10}>
                  <div className="container">
                    <img src={book.book_image} />
                    <span className="title">{book.title}</span>
                    <span className="author">{book.author}</span>
                    <span className="link">
                      <Link
                        style={{ textDecoration: "none" }}
                        href={book.buy_links[0].url}
                      >
                        Buy Now
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          width: 100vw;
          justify-content: center;
          margin-bottom: 70px;
        }

        .category {
          font-size: 35px;
          background-color: #e6bf1b;
          font-weight: 700;
          color: black;
          padding: 0px 10px;
          border-radius: 10px;
        }
        .frame {
          margin-top: 50px;
          width: 100vw;
          display: grid;
          gap: 10px;

          grid-template-columns: repeat(3, 1fr);
        }
        img {
          width: inherit;
          height: auto;
          border-radius: 20px;
        }
        .container,
        .cardContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 20px;
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
        .container {
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.7), 0px 1px 3px;
          margin: 0px 20px;
          width: 250px;
          height: 500px;
          background-color: rgba(250, 245, 129, 0.7);
          margin-bottom: 20px;
          background-color: white;
          position: relative;
        }

        .container:hover {
          -webkit-animation: pulsate-fwd 0.5s ease-in-out 1 both;
          animation: pulsate-fwd 0.5s ease-in-out 1 both;
        }
        .title,
        .author,
        .category {
          position: absolute;
        }
        .title {
          top: 435px;
          font-size: 25px;
          font-weight: 700;
          text-align: center;
          line-height: 18px;
        }
        .author {
          top: 472px;
          text-align: center;
          line-height: 15px;
          font-size: 20px;
        }

        .link {
          box-shadow: inset 0px 2px 2px white, 0px 3px 4px #e6bf1b;
          font-size: 25px;
          cursor: pointer;
          border: none;
          padding: 0px 12px;
          border-radius: 12px;
          margin-top: 5px;
        }
        .link:hover {
          background-color: #e6bf1b;
          color: white;
        }
      `}</style>
    </>
  );
}

export default Details;
