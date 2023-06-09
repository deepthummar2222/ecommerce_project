
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 function Shop() {
    let params = useParams();
  let [products, setProducts] = useState([]);
  // console.log(params.category);

  useEffect(()=>{
        fetch("http://localhost:3001/products?category="+params.category)
        .then(async (ress)=>{
           let record = await ress.json();
           if(record){
              setProducts(record);
           }
        })
        .catch((err)=>{
          console.log("something wrong");
        })
  })
  return (
      <div>
      
          {/* breadcrumb-section */}
          <div className="breadcrumb-section breadcrumb-bg">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 offset-lg-2 text-center">
                          <div className="breadcrumb-text">
                              <p>Fresh and Organic</p>
                              <h1>Shop</h1>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* end breadcrumb section */}
          {/* products */}
          <div className="product-section mt-150 mb-150">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="product-filters">
                              <ul>
                                  <li className="active" data-filter="*">All</li>
                                  <li data-filter=".strawberry">Strawberry</li>
                                  <li data-filter=".berry">Berry</li>
                                  <li data-filter=".lemon">Lemon</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="row product-lists">

                  {products && products.map((v,index)=>{
              return(
                <div className="col-lg-4 col-md-6 text-center strawberry">
                          <div className="single-product-item">
                              <div className="product-image">
                                  <Link to={"/s_product/"+v.id}><img src={v.image} style={{height:"200px"}} /></Link>
                              </div>
                              <h3>{v.title}</h3>
                              <p className="product-price"><span>Per Kg</span>{v.price} </p>
                              <Link to={"/cart/"+v.id} className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
                          </div>
                      </div>
              )
            })}
                  </div>
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <div className="pagination-wrap">
                              <ul>
                                  <li><a href="#">Prev</a></li>
                                  <li><a href="#">1</a></li>
                                  <li><a className="active" href="#">2</a></li>
                                  <li><a href="#">3</a></li>
                                  <li><a href="#">Next</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* end products */}
          <div className="logo-carousel-section">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="logo-carousel-inner">

                              <Swiper
                                  // install Swiper modules
                                  modules={[Navigation, A11y]}
                                  spaceBetween={50}
                                  slidesPerView={4}
                                  navigation
                                  onSwiper={(swiper) => console.log(swiper)}
                                  onSlideChange={() => console.log('slide change')}>
                                  <SwiperSlide><div className="single-logo-item">
                                      <img src="assets/img/company-logos/1.png" alt />
                                  </div></SwiperSlide>
                                  <SwiperSlide> <div className="single-logo-item">
                                      <img src="assets/img/company-logos/2.png" alt />
                                  </div></SwiperSlide>
                                  <SwiperSlide><div className="single-logo-item">
                                      <img src="assets/img/company-logos/3.png" alt />
                                  </div></SwiperSlide>
                                  <SwiperSlide> <div className="single-logo-item">
                                      <img src="assets/img/company-logos/4.png" alt />
                                  </div></SwiperSlide>
                                  <SwiperSlide><div className="single-logo-item">
                                      <img src="assets/img/company-logos/5.png" alt />
                                  </div></SwiperSlide>
                              </Swiper>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}
export default Shop;