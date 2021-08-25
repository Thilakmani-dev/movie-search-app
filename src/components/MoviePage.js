import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { image_key } from '../config/api_key';
import {FaHome} from 'react-icons/fa'

function MoviePage(props) {
    console.log(props);
    const detail = JSON.parse(props.location.query.details);
    return (
        <Container className="mx-1 my-2">
                <Row className="py-1 px-1 my-1 mx-1" style={{borderBottom:'solid 1px #9B9B9B'}}>
      <Col sm="10">
          <h2>{detail.title}</h2>
      </Col>
      <Col sm="2"className="ml-auto">
      <FaHome/>
      </Col>
    </Row>
    <Container className="my-2">
            <Row style={{height:'200px'}} className="my-2 mx-2">
                <Col sm="3">
                <img src={image_key + detail.poster_path} alt={detail.title} style={{height:'300px',width:'auto'}}/>
                </Col>
                <Col sm="9">
                <Row>
                    <h3>{detail.title} ({detail.vote_average})</h3>
                    <h4>{detail.release_date}</h4>
                    <h4>Popularity: {detail.popularity}</h4>
                    <h4>Description: {detail.overview}</h4>
                </Row>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default MoviePage
