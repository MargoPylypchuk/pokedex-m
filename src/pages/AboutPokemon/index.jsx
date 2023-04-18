import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AboutPokemon.css";
import TabBar from "./TabBar";

function AboutPokemon() {
  const navigate = useNavigate()
  const {id} = useParams();
  console.log(id)
  
  const [pokemon, setPokemon] = useState([])
  const[evolution,setEvolution] = useState([])
  useEffect(
    () => async () => {
      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        )
        setPokemon(result.data)
        const species = await axios(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        )
        // console.log(species)
        const evolution = await axios(
          species.data.evolution_chain.url
        )
        setEvolution(evolution.data)
        
      } catch {}
    },
    []
  )
  // console.log(evolution)
  
  
  return pokemon.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="About-pokemon">
        <div className="header">
          <div className="left">
            <div className="back" onClick= {() => navigate(-1)}>Back</div>
            <div className="pok-name">{pokemon.name}</div>
          </div>
           <div className="p-id">#{pokemon.id}</div>
        </div>
        <div className="container">
          <div className="photo">
            <img src ={pokemon.sprites.other.home.front_shiny} alt ='ph' className="img"/>
          </div>
            <TabBar pokemon = {pokemon} evolution = {evolution}/>
        </div>
    </div>
  );
}
export default AboutPokemon;
