import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartProvider';
import CheckOut from './components/CheckOut/CheckOut'
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter> 
          <NavBar />
          <Switch>
            <Route exact path='/'>
            
              <ItemListContainer greeting="Todos tus juegos favoritos en una sola tienda!" />
              <Footer />
            </Route>
            <Route path='/category/:categoryName'>
            </Route>
            <Route path='/item/:itemId'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/checkout'>
              <CheckOut />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
