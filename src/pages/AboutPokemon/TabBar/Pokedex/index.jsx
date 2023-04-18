import React from "react";
import "./Pokedex.css";

function Pokedex({ pokemon }) {
  return (
    <div className="pokedex">
      <div className="Type">
        <div className="text">Type</div>
        <div className="types">
          {pokemon.types.map((item) => (
            <div className="type">{item.type.name}</div>
          ))}
        </div>
      </div>
      <div className="Height">
            <div className="text">Height</div>
            <div className="h text">{pokemon.height}</div>
      </div>
      <div className="Weight">
            <div className="text">Weight</div>
            <div className="w text">{pokemon.weight} Lbs</div>
      </div>
      <div className="Abilities">
            <div className="text">Abilities</div>
      </div>
      <ul className="abili text">{pokemon.abilities.map((item) =>(
                <li className="ability">{item.ability.name}</li>
            ))}</ul>
    </div>
  );
}
export default Pokedex;
