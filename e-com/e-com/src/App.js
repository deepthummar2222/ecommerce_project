import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './conatiner/Home';
import Heder from './component/Heder';
import Footer from './component/Footer';
import About from './conatiner/About';
import Checkout from './conatiner/Checkout';
import Cart from './conatiner/Cart';
import Contect from './conatiner/Contect';
import News from './conatiner/News';
import Shop from './conatiner/Shop';
import Singlpage from './conatiner/Singlpage';
import Singal_product from './conatiner/Singal_product';
import Login from './conatiner/Login';
import Register from './conatiner/Register';




function App() {
  return (
    <div>
      <Heder/>
      
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cart/:id' element={<Cart/>}/>
            <Route path='/check' element={<Checkout/>}/>
            <Route path='/contect' element={<Contect/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/shop/:category' element={<Shop/>}/>
            <Route path='/singl' element={<Singlpage/>}/>
            <Route path='/s_product/:id' element={<Singal_product/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            
        </Routes>

      <Footer/>
    </div>
  )

  }

export default App;
