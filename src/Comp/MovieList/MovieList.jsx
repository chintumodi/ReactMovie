import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import {useParams} from 'react-router-dom'
import '../MovieList/MovieList.css'
const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    
    const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=7995ee86d8524875549e63d88ad27b58&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieList(data.results))
  }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])



  return (
    <div>
      <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
               {
                movieList.map((movie, i)=>{
                  return(
                    <>
{
                    console.log(movie)
}                    
                              <Card movie={movie} key={i}/>
                </>
                  )
                })
               }
            </div>
        </div>
    </div>
  )
}

export default MovieList
