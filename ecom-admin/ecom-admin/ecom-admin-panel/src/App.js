import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './container/Dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import Addadmin from './container/Addadmin';
import ViewAdmin from './container/ViewAdmin';
import Register from './container/Register';
import Login from './container/Login';
import Addcategory from './container/Addcategory';
import Addproduct from './container/Addproduct';
function App() {

  let sessionData = sessionStorage.getItem('username');
 
  return (
    <div >
   {sessionData !== null?<Header />:""
   }
          <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add_admin" element={<Addadmin />} />
              <Route path="/view_admin" element={<ViewAdmin />} />
              <Route path="/add_category" element={<Addcategory />} />
              <Route path="/add_product" element={<Addproduct /> } />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
          </Routes>
          {sessionData !== null?<Footer /> :""
   }
      

    </div>
  );
}

export default App;
