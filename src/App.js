import './App.css';
import Main from './pages/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from  './pages/Login'
import AllCategories from './components/categoryPageComponent/allCategories';
import Products from './pages/Products';
import ViewAll from './components/categoryPageComponent/viewAll';
import ProductGrid from './components/categoryPageComponent/productGrid'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/allCategories" component={AllCategories}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/viewAll" component={ViewAll}/>
          <Route exact path="/productGrid" component={ProductGrid}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
