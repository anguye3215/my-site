import React from "react";
import PropTypes from "prop-types";
import SkillCard from "./SkillCard";

export default function SkillGrid({ skills }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {Object.entries(skills).map(([name, data]) => (
        <SkillCard
          key={name}
          name={name}
          level={data.level}
          xp={data.xp}
          rank={data.rank}
        />
      ))}
    </div>
  );
}

SkillGrid.propTypes = {
  skills: PropTypes.objectOf(
    PropTypes.shape({
      level: PropTypes.number.isRequired,
      xp: PropTypes.number.isRequired,
      rank: PropTypes.number.isRequired,
    })
  ).isRequired,
};
