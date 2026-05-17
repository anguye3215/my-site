import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const navigate = useNavigate();

  function handleSearch(username) {
    navigate(`/player/${username}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>RuneScape Hiscore Tracker</h1>
      <p>Search for any RuneScape player to view their stats.</p>

      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
