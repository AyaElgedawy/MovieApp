import Nav from 'react-bootstrap/Nav';
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Component, useEffect, useState } from "react"
import MovieCard from '../Components/MovieCard.js'
// import Pagination from '../Components/Pagination.js';
import { Pagination, Button } from 'react-bootstrap';
import { addFav,removeFav} from '../Store/Actions/FavAction.js';
import { useSelector, useDispatch } from "react-redux"
import ReactPaginate from 'react-paginate';
import PaginationComponent from '../Components/Pagination.js';
import { getMovies } from '../Store/Actions/MoviesAction.js';



function ListMovies(){

    // const [movies, setMovies] = useState([])
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.combineMovies.Movies[0])

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // You can change this according to your requirements
  
    useEffect(()=>{
      dispatch(getMovies())
    },[])
    // useEffect(() => {
       
    //     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=08435d7890fc0b66e05d90f2fe18b3bc")
    //     .then((res) => setMovies(res.data.results))
    //     .catch((err) => console.log(err))
    // },[]) 
    //Pagination
  const totalItems = movies.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);
    //pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    const fav = useSelector((state) => state.combineFav.Fav)
    const Favorites= (movie)=>{
      dispatch(addFav(movie))

    }
    const removeFavourite=(id) =>{
      dispatch(removeFav(id))
    }

    
    //42526=>total_pages 850520=>totalresults Total count of items from API or data source
    
    return(
        <>
        
        <Container gap={3}>
      <Row>
        {/* pagination===currentItems */}
        {currentItems.map(movie => (
          <Col key={movie.id} sm={6} md={4} lg={3}>
           
            <MovieCard movie={movie} 
            img={movie.poster_path} 
            link={movie.id} 
            onclick= {fav.some(obj => obj.id === movie.id) ? ()=>removeFavourite(movie.id)  : ()=>Favorites(movie)}
            
            display={`d-block ${fav.some(obj => obj.id === movie.id) && "text-danger"}`}
            />

          </Col>
        ))}
      </Row>
    
      {/* Render the pagination component */}
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
    
        </>
    )
}

export default ListMovies