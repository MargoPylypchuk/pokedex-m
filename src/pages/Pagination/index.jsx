import React from "react";
import './Pagination.css'

function Pagination({pokemonPerPage,totalpokemons,paginate,currentPage}){
    // console.log(currentPage)
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalpokemons/pokemonPerPage); i++){
        pageNumbers.push(i)
    }
    function clickBack(){
        if(currentPage>1){
            paginate(currentPage-1)
        }
    }
    function clickNext(){
        if(currentPage<10){
            paginate(currentPage+1)
        }
    }
    return(
        <div className="page">
            <ul className="pagination">
                <div onClick={() => clickBack()} className = 'page-item'>Back</div>
                { pageNumbers.map(number =>(

                        <li className ={currentPage === number ? 'page-it' : 'page-item'} key ={number}>
                            <a href="#" className="page-link" onClick={() => paginate(number)} >
                                {number}
                            </a>
                        </li>
                    ))
                }
                <div  onClick={() => clickNext()} className = 'page-item'>Next </div>
            </ul>
        </div>
    )
}
export default Pagination