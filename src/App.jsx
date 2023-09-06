import { useState } from 'react'
import './App.css'
import Header from './Comp/Header/Header'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import MovieList from './Comp/MovieList/MovieList'
import Moviedetail from './pages/MovieDetail/Moviedetail'
function App() {

  return (
    <>
<div className="App">

  <Router>
    <Header/>
    <Routes>
      <Route  index element={<Home/>}></Route>
      <Route path="movie/:id" element={<Moviedetail/>}></Route>
      <Route path="movies/:type" element={<MovieList/>}></Route>
      <Route path="/*" element={<h1>Error Page </h1>}></Route>
    </Routes>
  </Router>
</div>
    </>
  )
}

export default App
