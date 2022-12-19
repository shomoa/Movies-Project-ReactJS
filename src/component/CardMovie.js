import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
const CardMovie = ({ movitem }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
     <Link to={`/movie/${movitem.id}`}> 
        <div className="card"> {/*according to tmdb api when u search image in document you must write this link */}
          <img src={`https://image.tmdb.org/t/p/w500`+movitem.poster_path}  className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {movitem.original_title} </p>
              <p>تاريخ الاصدار : {movitem.release_date}</p>
              <p>عدد المقيمين:{movitem.vote_count} </p>
              <p>التقييم: {movitem.vote_average}</p>
            </div>
          </div>
        </div>
        </Link>
      </Col>
  );
};

export default CardMovie;