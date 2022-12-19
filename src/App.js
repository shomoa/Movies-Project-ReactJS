import NavBar from './component/NavBar';
import { Container } from 'react-bootstrap'
import MoviesList from './component/MovieList';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './component/MovieDetails';
import { useSelector, useDispatch } from 'react-redux'
function App() {
    //const [pageCount, setPageCount] = useState(0)

  //fetch data from online array
  /* after apply redux with middleaware we dont need it  
   const getAllMovies = async () => {
      const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5e969379884d3ae7690fe6cf0d170a32&language=ar")
      setMovies(response.data.results)
      //console.log(response.data.results)
      setPageCount(response.data.total_pages)
    } */

  /////
  //get current page// see all link

/*   const getPage = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7b7259f56aea62df427e29e6a605decb&language=ar&page=${page}`)
    //setMovies(response.data.results)
    //console.log(response.data.results)
    console.log(response.data.total_pages)
    setPageCount(response.data.total_pages)

  } */

 { /*  <MoviesList Movies={Movies} getPage={getPage} pageCount={pageCount} />
        <MovieDetails/> 
              <Route  path="/" element={<MoviesList movies={Movies} getPage={getPage}  pageCount={pageCount}/>} />

        <Route path="/movie/:id" element={<MovieDetails/>}  /> { /* :id  للدلالة انه متغير  
        <Route path="/" element={<MoviesList Movies={Movies} getPage={getPage} pageCount={pageCount} />} />*/}
  

  return (
    <div className="">
      {/* <NavBar search={search} /> */}
      <NavBar /> 
      <Container>
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<MoviesList />} />

            <Route path="/movie/:id" element={<MovieDetails />} />



          </Routes>
        </BrowserRouter>
      </Container>


    </div>

  );
}
export default App;
