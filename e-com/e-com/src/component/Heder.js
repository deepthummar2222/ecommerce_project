import React from 'react'
import { useState,useEffect } from 'react';
import { Link, BrowserRouter,NavLink, useNavigate } from 'react-router-dom';

 function Heder() {
  const navigate = useNavigate();

  const handleClick = (dname) =>{
    navigate('/about');
  }
  let [category, setCategory] = useState([]);

  useEffect(()=>{
      fetch("http://localhost:3001/category")
      .then(async (ress)=>{
        let record = await ress.json();
        if(record){
           setCategory(record);
           console.log(record);
        }
        else{
          console.log("record not found");
        }
      })
      .catch(err=>{
        console.log("Something wrong");
      })
  }, setCategory)
  return (

    <div>

      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* logo */}
                <div className="site-logo">
                  <a href="index.html">
                    <img src="../assets/img/logo.png" alt />
                  </a>
                </div>
                {/* logo */}
                {/* menu start */}
                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                   
                    <li><a href="#">News</a>
                      <ul className="sub-menu">
                        <li><Link to="News">News</Link></li>
                        <li><Link to="singl">Single News</Link></li>
                      </ul>
                    </li>
                    <li><Link to="contect">Contact</Link></li>
                    <li><Link to="register">Register</Link></li>
                    <li><a href="#">Shop</a>
                      <ul className="sub-menu">
                        {category && category.map((v,index)=>{
                      return(
                        <li className="nav-item">
                          <NavLink className="nav-link" to={"/shop/"+v.category}>{v.category}</NavLink>
                        </li>
                      
                      )
                    })}
                      </ul>
                    </li>
                    <li>
                      <div className="header-icons">
                        <Link className="shopping-cart" to="cart"><i className="fas fa-shopping-cart" /></Link>
                        <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search" /></a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search" /></a>
                <div className="mobile-menu" />
                {/* menu end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <span className="close-btn"><i className="fas fa-window-close" /></span>
        <div className="search-bar">
          <div className="search-bar-tablecell">
            <h3>Search For:</h3>
            <input type="text" placeholder="Keywords" />
            <button type="submit">Search <i className="fas fa-search" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
export default Heder;
