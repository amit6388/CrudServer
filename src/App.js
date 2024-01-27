 
import './App.css';
import NavScrollExample from './Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Users from './Users';
import UseEffectApi from './Showusers';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Login from './Login';
import Redirect from './Redirect'
function App() {
 
  return (
    <>
    <BrowserRouter>
    <NavScrollExample/>
    <div>
<Routes>
<Route exact path='/' element={<><Menu/></>} />
<Route exact path='/Users' element={<Users/>} />
<Route exact path='/Showusers' element={<UseEffectApi/>} />
<Route exact path='/Contact' element={<ContactUs />} />
<Route exact path='/login' element={<Login  />} />
<Route exact path='/redirect' element={<Redirect/>} />
<Route path='/*' element={<Menu/>} />
</Routes> 

    </div>
    </BrowserRouter>
<Footer/>
    </>
  );
}

export default App;
