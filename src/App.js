import './App.css';
import Homepage from './components/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MoviePage from './components/MoviePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/movie/:title" component={MoviePage}/>
      </Switch>
    </Router>
  );
}

export default App;
