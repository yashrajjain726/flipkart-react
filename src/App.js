import './App.css';
import Main from './pages/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
