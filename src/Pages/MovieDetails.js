import { useParams } from "react-router-dom";
import { Component, useEffect, useState } from "react"
import axios from "axios"
import MovieCard from '../Components/MovieCard.js'
import { Container, Row, Col, Card } from 'react-bootstrap';

function MovieDetails(props){
    const momvieId = useParams();
    // props.match.params.id
    console.log(momvieId)

    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${momvieId.id}?api_key=08435d7890fc0b66e05d90f2fe18b3bc`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err))
    },[])

    return(
        <>
            
             <Container>
                <Row className="my-4 d-flex align-items-center">
                    <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    </Card>
                    </Col>
                    <Col md={8}>
                    <Card>
                        <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.overview}</Card.Text>
                        <Card.Text>Release Date: {movie.release_date}</Card.Text>
                        <Card.Text>Rating: {movie.vote_average}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieDetails