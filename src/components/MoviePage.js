import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { image_key } from '../config/api_key';

function MoviePage(props) {
    console.log(props);
    const detail = JSON.parse(props.location.query.details);
    return (
        <Container className="mx-1 my-2 py-2 px-2">
            <Row style={{height:'300px'}}>
                <Col sm="4">
                <img src={image_key + detail.poster_path} alt={detail.title} style={{height:'300px',width:'auto'}}/>
                </Col>
                <Col sm="8">
                <Row>
                    <h3>{detail.title} ({detail.vote_average})</h3>
                    <h4>{detail.release_date}</h4>
                    <h4>Popularity: {detail.popularity}</h4>
                    <h4>Description: {detail.overview}</h4>
                </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default MoviePage
