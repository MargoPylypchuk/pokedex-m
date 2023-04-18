import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css'

function SearchBar({pokemons}){
    // console.log(pokemons)
    const navigate = useNavigate()
    const [value,setValue] = useState('')
    const onChange = (event) =>{
        setValue(event.target.value);
    }
    const onSearch = (searchTerm,id)=>{
        
        navigate(`/about/${id}`)
        setValue(searchTerm)
    }
    return(
        <div className="search-bar">
            <div className="search-inner">
                <input 
                className="input"
                type= 'text' 
                value = {value} 
                onChange = {onChange}/>
                <button onClick={() => onSearch(value)} className= 'in-button'> Search</button>
            </div>
            <div className="pokN">
                {pokemons.filter(item =>{
                    const searchTerm = value.toLowerCase();
                    const pokemonName = item.name.toLowerCase();

                    return  searchTerm && pokemonName.startsWith(searchTerm) && pokemonName !== searchTerm
                }).slice(0,10)
                .map((item) =>(
                    <div  key = {item.name} onClick={() => onSearch(item.name,item.id)} className = 'pok'>{item.name}</div>
                ))}
            </div>
        </div>
    )
}
export default SearchBar