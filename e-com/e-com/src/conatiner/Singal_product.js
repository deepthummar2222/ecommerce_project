import React from 'react'
import { useEffect, useState } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";

 function Singal_product() {
    let [pro, setPro] = useState([]);
    let [mm, setMimage] = useState([]);
    let [userId, setUserId] = useState();
    let navigate=useNavigate();

    let singleId = useParams();
    console.log(singleId)
    useEffect(()=>{
        setTimeout(async ()=>{
            fetch("http://localhost:3001/products/"+singleId.id)
         .then(async (rss)=>{
            let record = await rss.json();
            console.log(record)
            if(record){
                console.log(record)
                 setPro(record);
                
          
            }
         })
         .catch(err=>{
            console.log("something wrong");
         })
        })

       let dd = sessionStorage.getItem('user');
       setUserId(dd);   

         
    }, setPro)
    console.log(pro)

  return (
    <div>

          <div>
              {/* breadcrumb-section */}
              <div className="breadcrumb-section breadcrumb-bg">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8 offset-lg-2 text-center">
                              <div className="breadcrumb-text">
                                  <p>See more Details</p>
                                  <h1>Single Product</h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* end breadcrumb section */}
              {/* single product */}
              <div className="single-product mt-150 mb-150">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-5">
                              <div className="single-product-img">
                                  <img src={pro.image} alt />
                              </div>
                          </div>
                          <div className="col-md-7">
                              <div className="single-product-content">
                                  <h3>{pro.title}</h3>
                                  <p className="single-product-pricing"><span>Per Kg</span>{pro.price}</p>
                                  <p>{pro.description}</p>
                                  <div className="single-product-form">
                                      <form action="index.html">
                                          <input type="number" placeholder={0} />
                                      </form>
                                      <Link to={"/cart/"+pro.id} className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
                                      <p><strong>Categories: </strong>Fruits, Organic</p>
                                  </div>
                                  <h4>Share:</h4>
                                  <ul className="product-share">
                                      <li><a href><i className="fab fa-facebook-f" /></a></li>
                                      <li><a href><i className="fab fa-twitter" /></a></li>
                                      <li><a href><i className="fab fa-google-plus-g" /></a></li>
                                      <li><a href><i className="fab fa-linkedin" /></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* end single product */}
              {/* more products */}
              <div className="more-products mb-150">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8 offset-lg-2 text-center">
                              <div className="section-title">
                                  <h3><span className="orange-text">Related</span> Products</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-4 col-md-6 text-center">
                              <div className="single-product-item">
                                  <div className="product-image">
                                      <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt /></a>
                                  </div>
                                  <h3>Strawberry</h3>
                                  <p className="product-price"><span>Per Kg</span> 85$ </p>
                                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 text-center">
                              <div className="single-product-item">
                                  <div className="product-image">
                                      <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt /></a>
                                  </div>
                                  <h3>Berry</h3>
                                  <p className="product-price"><span>Per Kg</span> 70$ </p>
                                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
                              <div className="single-product-item">
                                  <div className="product-image">
                                      <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt /></a>
                                  </div>
                                  <h3>Lemon</h3>
                                  <p className="product-price"><span>Per Kg</span> 35$ </p>
                                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* end more products */}
          </div>


    </div>
  )
}
export default Singal_product;
