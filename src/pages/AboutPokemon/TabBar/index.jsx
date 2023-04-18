import React, { useState } from "react";
import './TabBar.css'
import Pokedex from "./Pokedex";
import Stats from "./Stats";
import Evol from "./Evol";

function TabBar({pokemon,evolution} ) {
  // console.log(evolution)
  const [isShow, setIsShow] = useState(1);
  return (
    <div className="tabBar">
      <div className="tab-button">
        <div onClick={() => setIsShow(1)} className="Pokedex tab-b">
          Pokedex
        </div>
        <div onClick={() => setIsShow(2)} className="stats tab-b">
          Stats
        </div>
        <div onClick={() => setIsShow(3)} className="evol tab-b">
          Evolution
        </div>
      </div>
      
        {isShow === 1 ? <Pokedex pokemon = {pokemon}/> : null}
        {isShow === 2 ? <Stats pokemon = {pokemon}/> : null}
        {isShow === 3 ? <Evol  evolution = {evolution} name = {pokemon.name}/> : null}
      
      
    </div>
  );
}
export default TabBar;
