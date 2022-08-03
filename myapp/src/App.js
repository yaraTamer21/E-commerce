import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Component/header/Header'

import Footer from './Component/Footer';
import AllProducts from './Component/AllProducts';
import Description from './Component/Description';
import { ToastContainer } from 'react-toastify';
import Cart from './Component/Cart/Cart';
import Login from './Component/Login';
import { BrowserRouter } from 'react-router-dom';
import Signup from './Component/Signup';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Pages from './Pages/Pages';



function App() {

  return (
   

      <div className="App">


        <BrowserRouter>
          <Header />
          <ToastContainer />
          <Switch>

            <Route exact path='/' component={Home} />
            <Route exact path='/all' component={AllProducts} />
            <Route exact path='/products/:id' component={Description} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/about' component={About} />
            <Route exact path='/pages' component={Pages} />

            <Route exact path='/contact' component={ContactUs} />


          </Switch>
          <Footer />
        </BrowserRouter>


      </div>

  );
}

export default App;
