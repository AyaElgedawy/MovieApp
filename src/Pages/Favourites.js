import { useSelector } from "react-redux";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import MovieCard from "../Components/MovieCard";
import { Button } from "react-bootstrap";

const Favourites= () => {
    const favorites = useSelector((state) => state.combineFav.Fav);
    return(
        <>
            <Container gap={3}>
      <Row>

        {favorites.map(movie => (
          <Col key={movie.id} sm={6} md={4} lg={3}>
            
            <MovieCard movie={movie} img={movie.poster_path} link={movie.id} display="d-none"/>

          </Col>
        ))}
      </Row>
    
      
    </Container>
        
        </>
    )
}
export default Favourites