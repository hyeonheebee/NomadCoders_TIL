import { useOutletContext } from "react-router-dom";
import { authors } from "../db";

function Chapter() {
  const { bookId, authorId } = useOutletContext();
  const chapters =
    authors[Number(authorId) - 1].books[Number(bookId) - 1].chapters;

  return (
    <ul>
      {chapters.map((chapter) => (
        <li key={chapter.name}>{chapter.name}</li>
      ))}
    </ul>
  );
}
export default Chapter;
