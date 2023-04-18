import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Evol.css";

function Evol({ evolution }) {
  // console.log(name)
  const [listEvol, setListEvol] = useState([]);
  const [photo, setPhoto] = useState([]);

  // console.log(evolution)
  // useEffect(
  //   () => () => {
  //     fn(evolution.chain);
  //     // console.log(`https://pokeapi.co/api/v2/pokemon/${listEvol}`)
  //     // const result =  axios(
  //     //   `https://pokeapi.co/api/v2/pokemon`
  //     // )
  //     // console.log(result)
  //     // const pokemonData =  Promise.all(
  //     //     listEvol.map(async (pokemon) => {
  //     //     const pokemonRecord = await axios.get(pokemon.sprites.front_shiny)

  //     //     return pokemonRecord.data
  //     //   })
  //     // )
  //     // setPhoto(pokemonData)
  //   },
  //   [evolution]
  // );
  useEffect(
    () => async () => {
      if (listEvol.length === 0) fn(evolution.chain);
      try {
        console.log("list", listEvol);
        const pokemonData = await Promise.all(
          listEvol.map(async (name) => {
            const pokemonRecord = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${name}`
            );

            return pokemonRecord.data;
          })
        );
        console.log("data", pokemonData);
        setPhoto(pokemonData);
      } catch {}
    },
    [listEvol]
  );
  console.log(photo);

  function fn(item) {
    setListEvol((oldArray) => [...oldArray, item.species.name]);
    if (item.evolves_to[0]) {
      fn(item.evolves_to[0]);
    }
    return;
  }
  //  console.log(listEvol)
  return (
    <div className="evolution">
      <div className="evol">
        {photo.map((item) => (
          <div className="evols">
          <div>{item.name}</div>
          <img src = {item.sprites.other.home.front_shiny} alt = 'ph' className="im"/>
          </div>
          
        ))}
      </div>
    </div>
  );
}
export default Evol;


