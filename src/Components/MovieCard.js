import { Link } from "react-router-dom"
import { Card, Button, Row } from 'react-bootstrap';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faHeart } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faCheckSquare, faHeart);

function MovieCard(props){



    return(
        <>
           



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.img}`} />
          <FontAwesomeIcon className={props.display} variant={props.variant} onClick={props.onclick} icon="fa-solid fa-heart" />  

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.overview}</Card.Text>
        <Row className="d-flex justify-content-center" >
        <Link to={`/moviedetails/${props.link}`}> 
        <Button variant="warning" style={{ width: '100%' }} >View Details</Button>
        </Link>
        
          
        
        </Row>
      </Card.Body>
    </Card>
        </>
    )
}

export default MovieCard