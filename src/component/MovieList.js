import React, { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from '../redux/actions/movieAction'

//const MoviesList = ({ getPage, pageCount }) => {
const MoviesList = () => {

  const [movies, setMovies] = useState([])
  //const [pageCount,setPageCount]=useState(0)
  //1 Redux
  const dispatch = useDispatch();


  //////////////////////2
  useEffect(() => { //use data direct when component start     //getAllMovies();

    dispatch(getAllMovie())
  }, [])
  ///3
  const dataMovies = useSelector((state) => state.Movies) //select which state will return
  /////4
  useEffect(() => {
    setMovies(dataMovies)

  }, [dataMovies])

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((movitem) => { //item is film in DB
        return (                                 //return 20 movies from DB
          <CardMovie key={movitem.id} movitem={movitem} /> //item عشان يرجع لكل فلم اسمه وخواصه مثل item.title item.category
        )
      })


      ) : <h3>no movies </h3>

      }
      {movies.length >= 1 ? (<PaginationComponent  />) : null}
    </Row>
  );
};

export default MoviesList;