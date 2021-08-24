import {Card,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {image_key} from '../config/api_key';
import {Link} from 'react-router-dom'

function CardComponent(props){
    console.log(props)
    return(
        <Link to={{
            pathname:`/movie/${props.data.title}`, 
            query: {
            title: props.data.title, 
            details: JSON.stringify(props.data)
          } 
          }} 
          style={{ color: '#000',textDecoration:'none'}}>
        <Card>
            <img className="card-img-top"  style={{height:'250px'}} src={image_key + props.data.poster_path} alt={props.data.title} />
            <Row>
            <Col className="card-title">{props.data.title} (Rating:{props.data.vote_average})</Col>
            </Row>
            <div className="card-body">
                <p className="card-text">{props.data.overview.toString().substring(0,30)}</p>
            </div>           
        </Card>
        </Link>
    )
}
export default CardComponent;