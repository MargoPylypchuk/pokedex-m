import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonContent from "./PokemonContent";
import "./Home.css";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";

function Home() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(10);
  const [types, setTypes] = useState([]);
  const [listNameTypes, setListNameTypes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon?limit=100`
        );

        const pokemonData = await Promise.all(
          result.data.results.map(async (pokemon) => {
            const pokemonRecord = await axios.get(pokemon.url);
            return pokemonRecord.data;
          })
        );
        setAllPokemon(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios(`https://pokeapi.co/api/v2/type`);

        setListNameTypes(result.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const lastPokemonIndex = currentPage * pokemonPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
  const currentPokemon = allPokemon.slice(firstPokemonIndex, lastPokemonIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortLetter = () => {
    const sortedPokemon = [...allPokemon].sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setAllPokemon(sortedPokemon);
  };

  const sortId = () => {
    const sortedPokemon = [...allPokemon].sort((a, b) => {
      return b.id - a.id;
    });
    setAllPokemon(sortedPokemon);
  };

  const sorttId = () => {
    const sortedPokemon = [...allPokemon].sort((a, b) => {
      return a.id - b.id;
    });
    setAllPokemon(sortedPokemon);
  };

  const clickType = (type) => {
    if (types.includes(type)) {
      const filterArr = [...types].filter(function(letter) {
        return letter !== type;
      });
      if (allPokemon.includes(filterArr)) {
        setAllPokemon(filterArr);
      }
      setTypes(filterArr);
      // setAllPokemon(filterArr)
    } else {
      setTypes((oldState) => [...oldState, type]);
    }
  };
  console.log(types);

  return allPokemon.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="Home">
      <div className="search">
        <div className="sort-b">
          <div className="sort-t">Sort Type</div>
          <div className="sort a-f" onClick={() => sortLetter()}>
            Sort A-f
          </div>
          <div className="sort id" onClick={() => sortId()}>
            Sort id (100-1)
          </div>
          <div className="sort id" onClick={() => sorttId()}>
            Sort id (1-100)
          </div>
        </div>

        <div className="s">
          {listNameTypes.map((item) => (
            <div
              className={
                types.includes(item.name) ? "type-block-active" : "type-block"
              }
              onClick={() => clickType(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <PokemonContent pokemon={currentPokemon} />
        <SearchBar pokemons={allPokemon} />
      </div>
      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalpokemons={allPokemon.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Home;
