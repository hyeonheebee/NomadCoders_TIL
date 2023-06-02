import { Link } from "react-router-dom";
import { users } from "../db";
import styled from "styled-components";
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;

function Home() {
  return (
    <div>
      <Title>Users</Title>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
