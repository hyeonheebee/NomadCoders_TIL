import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import { authors } from "../db";

function Book() {
  const { book } = useParams();

  let id = 0;
  const { authorId } = useOutletContext();

  authors[Number(authorId) - 1].books.map((item) =>
    item.name === book ? (id = item.id) : null
  );

  return (
    <div>
      <h3>{book}</h3>

      <ul>
        <li>
          <Link to={"chapter"}>chapters</Link>
        </li>
        <li>
          <Link to={"character"}>characters</Link>
        </li>
        <Outlet context={{ bookId: id, authorId }} />
      </ul>
    </div>
  );
}
export default Book;
