import React from "react";
import PropTypes from "prop-types";

export default function SkillCard({ name, level, xp, rank }) {
  return (
    <div
      style={{
        background: "#1a1a1a",
        padding: "1rem",
        borderRadius: "8px",
        color: "white",
        textAlign: "center",
        border: "1px solid #333",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{name}</h3>

      <p style={{ margin: "0.25rem 0" }}>
        <strong>Level:</strong> {level}
      </p>

      <p style={{ margin: "0.25rem 0" }}>
        <strong>XP:</strong> {xp.toLocaleString()}
      </p>

      <p style={{ margin: "0.25rem 0", color: "#888" }}>
        <strong>Rank:</strong> {rank.toLocaleString()}
      </p>
    </div>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};
