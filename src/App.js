import './App.css';
import Homepage from './components/HomePage';
import {HashRouter,Route,Switch} from 'react-router-dom';
import MoviePage from './components/MoviePage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <HashRouter>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/movie/:title" component={MoviePage}/>
        <Route component={NotFound}/>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
