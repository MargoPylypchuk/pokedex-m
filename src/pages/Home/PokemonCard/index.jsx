import React from "react";
import './PokemonCard.css'

function PokemonCard({pokemon}) {
    console.log(pokemon)
  return (
  <div className="block">
    <div className="header">
        <div className="id"> #{pokemon.id}</div>
        <div className="name">{pokemon.name}</div>
    </div>
    <div className="p">
        <img src ={pokemon.sprites.other.home.front_shiny} alt ='ph' className="photo"/>
    </div>
    <div className="container1 a">
        <div>Type</div>
        <div className="types">{pokemon.types.map((item) =>(
            <div className="type">{item.type.name}</div>
        ))}</div>
    </div>
    <div className="container2 a">
        <div>Height</div>
        <div>{pokemon.height}</div>
    </div>
    <div className="container3 a">
        <div>Weight</div>
        <div>{pokemon.weight} Lbs</div>
    </div>
  </div>

  );
}
export default PokemonCard;
