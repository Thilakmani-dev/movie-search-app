import './App.css';
import Homepage from './components/HomePage';
import {HashRouter,Route,Switch} from 'react-router-dom';
import MoviePage from './components/MoviePage';

function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/movie/:title" component={MoviePage}/>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
