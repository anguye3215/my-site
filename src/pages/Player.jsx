import { useParams } from "react-router-dom";

export default function Player() {
  const { username } = useParams();
  return <h1>Player: {username}</h1>;
}
