import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Link ,useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const param=useParams();
  //console.log(param.id)
  //console.log(param)
  const getMovieDetails = async () => { //https://api.themoviedb.org/3/movie/436270?api_key=5e969379884d3ae7690fe6cf0d170a32&language=ar
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=7b7259f56aea62df427e29e6a605decb&language=ar`)
    setMovie(response.data)
    //setMovie(response.data.results)
    //console.log(response.data.results)
  }
  useEffect(()=>{
    getMovieDetails();
  },[])
  return (
    <div>
    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
            <div className="card-detalis  d-flex align-items-center ">
                <img
                    className="img-movie w-30"
                    src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                    alt="ascad"
                />
                <div className="justify-content-center text-center  mx-auto">
                    <p className="card-text-details border-bottom">
                        اسم الفيلم: {movie.title}
                    </p>
                    <p className="card-text-details border-bottom">
                        تاريخ الفيلم :{movie.release_date}
                    </p>
                    <p className="card-text-details border-bottom">
                        عدد المقيمين : {movie.vote_count}
                    </p>
                    <p className="card-text-details border-bottom">
                        التقييم :{movie.vote_average}
                    </p>
                </div>
            </div>
        </Col>
    </Row>

    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story  d-flex flex-column align-items-start">
                <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">القصة:</p>
                </div>
                <div className="text-end px-2">
                    <p className="card-text-story">{movie.overview}</p>
                </div>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 d-flex justify-content-center ">
            <Link to="/">
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary mx-2">
                    عوده للرئيسيه
                </button>
            </Link>
            <a href={movie.homepage} >
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary">
                    مشاهده الفيلم
                </button>
            </a>
            <br></br>
            <br></br>
            <br></br>

        </Col>
    </Row>
</div>
  )
}

export default MovieDetails
