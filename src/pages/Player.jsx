import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchHiscore } from "../api/hiscore";
import SkillGrid from "../components/SkillGrid";


export default function Player() {
  const { username } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const result = await fetchHiscore(username);
        setData(result);
      } catch (err) {
        setError(err.message || "Error fetching hiscores");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [username]);

  if (loading) {
    return <h2>Loading stats for {username}…</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>Error loading stats for {username}</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{username}&apos;s Hiscores</h1>

      <SkillGrid skills={data} />

    </div>
  );
}
