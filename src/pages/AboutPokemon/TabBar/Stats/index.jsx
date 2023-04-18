import React from "react";
import "./Stats.css";

function Stats({ pokemon }) {
  return (
    <div className="Stats">
      <div className="st">
        {pokemon.stats.map((item) => (
          <div className="stat">
            <div className="stat-name text">{item.stat.name}</div>
            <div className="base">
              <div className="text base-st">{item.base_stat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Stats;
