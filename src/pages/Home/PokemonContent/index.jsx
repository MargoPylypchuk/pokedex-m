import React, { useState } from "react";
import uniqid from "uniqid";
import PokemonCard from "../PokemonCard";
import "./PokemonContent.css";
import { useNavigate} from 'react-router-dom';



function PokemonContent({ pokemon }) {
 
  const [show,SetShow] = useState(null)
  const navigate = useNavigate()
  function goAboutPage(id){
    navigate(`/about/${id}`)
  }
  
  return (
    <div className="pokemon-con">
      <div className="about-block">
        <div className="pname">
          {pokemon.map((item) => (
            <div className="Pokemon" key={uniqid()}
              onMouseEnter= {() => SetShow(item)}
              onMouseLeave ={()=> SetShow(null)}
              onClick ={() => goAboutPage(item.id)}
            >
              {item.name}
              
              <div className="about">
                <img src={item.sprites.front_shiny} alt="ph" className="ph" />
                <div className="id">{item.id} ID</div>
              </div>
            </div>
          ))}
          
        </div>    
        <div className="card">
            {show === null ? 'null' : <PokemonCard pokemon = {show}/>}
        </div>
      </div>
    </div>
  );
}
export default PokemonContent;
