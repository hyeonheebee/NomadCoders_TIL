import { useOutletContext } from "react-router-dom";
import { authors } from "../db";

function Character() {
  const { bookId, authorId } = useOutletContext();
  const characters =
    authors[Number(authorId) - 1].books[Number(bookId) - 1].characters;
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  );
}
export default Character;
