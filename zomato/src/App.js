import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Signup } from './components/Register/signup/Signup';
import { Login } from './components/Register/login/Login';
import { Productitems } from './pages/productspage/items/Productitems';
import { Homepage } from './pages/homepage/Homepage';
import { Orderpage } from './pages/orderpage/Orderpage';
import { OrderForm } from './components/orderpage/order_form/OrderForm';

function App() {
  return (
    <>   
    <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/productspage' element={<Productitems/>}></Route>
    <Route path='/orderpage' element={<Orderpage/>}></Route>
    <Route path='/orderform' element={<OrderForm/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
    
  );
}

export default App;
