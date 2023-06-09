import React from 'react'
import { Link,useParams,useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { useEffect, useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

    


const Cart = () => {
    let [pro, setPro] = useState([]);
    let [mm, setMimage] = useState([]);
    let [userId, setUserId] = useState();
    let navigate=useNavigate();

    let singleId = useParams();
    useEffect(()=>{
        setTimeout(async ()=>{
            fetch("http://localhost:3001/products/"+singleId.id)
         .then(async (rss)=>{
            let record = await rss.json();
            // console.log(record)
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
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* cart */}
                <div className="cart-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <thead className="cart-table-head">
                                            <tr className="table-head-row">
                                                <th className="product-remove" />
                                                <th className="product-image">Product Image</th>
                                                <th className="product-name">Name</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
                                                <tr className="table-body-row">
                                                <td className="product-remove"><a href="#"><i className="far fa-window-close" /></a></td>
                                                <td className="product-image"><img src={pro.image} alt /></td>
                                                <td className="product-name">{pro.title}</td>
                                                <td className="product-price">{pro.price}</td>
                                                <td className="product-quantity"><input type="number" placeholder={0} /></td>
                                                <td className="product-total">1</td>
                                            </tr>
                                               
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="total-section">
                                    <table className="total-table">
                                        <thead className="total-table-head">
                                            <tr className="table-total-row">
                                                <th>Total</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="total-data">
                                                <td><strong>Subtotal: </strong></td>
                                                <td>$500</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Shipping: </strong></td>
                                                <td>$45</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Total: </strong></td>
                                                <td>$545</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-buttons">
                                        <a href="#" className="boxed-btn">Update Cart</a>
                                        <Link to="/check" className="boxed-btn black">Check Out</Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* end cart */}
                {/* logo carousel */}
                <div className="logo-carousel-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="logo-carousel-inner">

                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={3}
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
                {/* end logo carousel */}
            </div>

        </div>


    )
}

export default Cart;