import React  ,{ useState , useEffect}from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from "react-paginate"
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { getPage } from '../redux/actions/movieAction'

//const PaginationComponent = ({ getPage ,pageCount }) => {
  const PaginationComponent = () => {

  //get current page number page+1
  
  //const pageCount = 500;

  //redux
  const [pageCount, setPageCount] = useState(0)
  //1 Redux
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount)


  //////////////////////2
  useEffect(() => { //use data direct when component start     //getAllMovies();
    setPageCount(pages)

  }, [])
  ///3
  

  const handlePageClick = (data) => {
   // console.log(data.selected + 1)
    //getPage(data.selected + 1)
       dispatch(getPage(data.selected + 1))


   // getPageMovies(data.selected + 1)
  }
  return (
    /*  way1: from react bootstrap <Pagination>
     <Pagination.First />
     <Pagination.Prev />
     <Pagination.Item>{1}</Pagination.Item>
     <Pagination.Ellipsis />
 
     <Pagination.Item>{10}</Pagination.Item>
     <Pagination.Item>{11}</Pagination.Item>
     <Pagination.Item active>{12}</Pagination.Item>
     <Pagination.Item>{13}</Pagination.Item>
     <Pagination.Item disabled>{14}</Pagination.Item>
 
     <Pagination.Ellipsis />
     <Pagination.Item>{20}</Pagination.Item>
     <Pagination.Next />
     <Pagination.Last />
   </Pagination> */
    //from react pagination lib

    //way2: ///////////////////////
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2} // يبين رقم اول صفحتين
      pageRangeDisplayed={5} //يظهر ارقام صفحات برينج ال 5
      pageCount={pageCount}
      previousLabel=" السابق"
      //renderOnZeroPageCount={null}
      //use ready class from bootstrap with names props from reactPaginate library 
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"} //blue buttons
    />

  )
}

export default PaginationComponent
