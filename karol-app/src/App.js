import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer greeting="Todos tus juegos favoritos en una sola tienda!" />
          </Route>
          <Route path='/category/:categoryName'>
            <ItemListContainer greeting="Todos tus juegos favoritos en una sola tienda!" />
          </Route>
          <Route path='/item/:itemId'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
