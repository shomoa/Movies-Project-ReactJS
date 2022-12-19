import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie ,getMovieSearch } from '../redux/actions/movieAction'

//const NavBar = ({search}) => {
  const NavBar = () => {
const onSearch=(word)=>{
search(word)
}

const dispatch = useDispatch();

const search = async (word) => {
  if (word === "") {
    //getAllMovies();
    dispatch(getAllMovie(word))

  }
  else {
    dispatch(getMovieSearch());
    //const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=5e969379884d3ae7690fe6cf0d170a32&query=${word}&language=ar-US&page=1&include_adult=false`)
    //setMovies(response.data.results)
    //console.log(response.data.results)
    //setPageCount(response.data.total_pages) //عشان يرجع يحسب عدد البيجز بعد السيرتش
  }
}
  return (
    <div className="nav-style w-100">
    <Container>
    <Row className="pt-2  ">
      <Col xs="2" lg="1">
      {/* way 1111
    <a href="/">   </a>  </Link>   reload page*/}
     {/*way 2      <Link to="/">without reload */}
     
     <a href="/"> 
          <img className="logo" src={logo} alt="dfs" />{ /* src="logo.png" if it was in public */}
      </a>

      </Col>
      <Col xs="10" lg="11" className=" d-flex align-items-center">
        <div className="search  w-100">
          <i className="fa fa-search"></i>
          <input onChange={(e)=>onSearch(e.target.value)}  type="text" className="form-control" placeholder="ابحث" />
        </div>
      </Col>
    </Row>
  </Container>
    </div>
  )
}

export default NavBar
