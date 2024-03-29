import { useState,useEffect } from 'react';
import {main_key, search_key} from '../config/api_key';
import CardComponent from './Card';
import {FaHome,FaSearch} from 'react-icons/fa'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



function HomePage() {
  const getMovies = () => {
    fetch(main_key).then(res=>res.json()).then(res=>{console.log(res);setdata(res.results)}).catch(err=>console.log('err in get movies',err))
  }  
 
  const [data,setdata] = useState([]);
  const [movietext,setmovietext] = useState('');
  useEffect(() => {
    getMovies();
  }, [])
  return (
  <Container>
    <Row className="py-1 px-1 my-1 mx-1">
      <Col sm="10">
      <form onSubmit={(e)=>{e.preventDefault();
      fetch(search_key+movietext)
      .then(res=>res.json())
      .then(res=>{console.log(res);setdata(res.results)})
      .catch(err=>console.log('err in get movies searching',err))}}>
        <input type="text" onChange={(e)=>setmovietext(e.target.value)} value={movietext} placeholder="Search"/><button type="submit" disabled={movietext.length >= 0  ? false : true}><FaSearch/></button></form>
      </Col>
      <Col sm="2"className="ml-auto">
      <FaHome/>
      </Col>
    </Row>
    {console.log(data)}
    <Row>
    {
      data.length > 0 && 
      data.map((movie)=><Col sm="2" key={movie.id}><CardComponent key={movie.id} data={movie}/></Col>)
  }
    </Row>
  </Container>
  );
}

export default HomePage;
