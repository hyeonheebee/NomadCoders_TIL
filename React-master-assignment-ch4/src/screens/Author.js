import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../db";

function Author() {
  let id = 0;
  const { name } = useParams();
  authors.map((author) => (author.name === name ? (id = author.id) : null));

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {authors[Number(id) - 1].books.map((book) => (
          <li key={book.id}>
            <Link to={book.name}>{book.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={{ authorId: id }} />
    </div>
  );
}
export default Author;
