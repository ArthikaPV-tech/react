import React ,{Component,useState}from "react";
import "./seller.css";

import A from "./images/Tech-Page-Header-V3.jpg";

export default function DysonStore() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); 

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    return(
      <>
         <section className="intro">
        <nav className="navbar navbar-inverse ">
          <div className="container">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          
          <div className="collapse navbar-collapse " id="myNavbar">
            <ul className="nav navbar-nav navbar-right r">
              <li className="ac">
                <a href="#">Store Finder</a>
              </li>
              <li className="ac">
                <a href="#">Contact us</a>
              </li>
              <li className="ac">
                <a href="#">Your Basket</a>
              </li>
              <li className="ac cart-container" style={{ position: "relative" }}>
                <span
                  className="glyphicon glyphicon-shopping-cart carts"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowCart(!showCart)}
                > </span>
                

                {/* Cart dropdown */}
                {showCart && (
                  <div
                    className="cart-dropdown"
                    style={{
                      position: "absolute",
                      top: "30px",
                      right: "0",
                      background: "#0066cc",
                      border: "1px solid #ccc",
                      padding: "10px",
                      width: "600px",
                      zIndex: 1000,
                    }}
                  >
                    <h4>Cart Items</h4>
                    {cart.length === 0 ? (
                      <p>Cart is empty</p>
                    ) : (
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {cart.map((item, index) => (
                          <li key={index}>
                            {item.name} - ₹{item.price}
                          </li>
                        ))}
                      </ul>
                      
                    )}
                    <hr />
                   <p><b>Total Items:</b> {totalItems}</p>
                   <p><b>Total Price:</b> ₹{totalPrice}</p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </section>

        <img  className="image"src={A} alt="image"></img>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12 best">
                    <h1>Dyson best sellers</h1><br></br>
                    <h4>Discover our most popular vacuum, air treatment and hair care technology.</h4>
                </div>
            </div>
        </div>
            <button type="button"  className="btn btn-lg  shopall ">Shop all Vacuums & wet cleaners</button>
   <div className="container ">
 <div className="row">
   
                <h3 className="save">Save $18,000</h3>
                 
                     <div className="col-md-4 col-xs-12 a">
                         <h2 className="dy">Dyson Big Ball™ vacuum cleaner</h2>
                         <span className="a1">India’s only vacuum cleaner with 5 year warranty and free servicing.<br></br>
                         Powerful 205 AW of suction for whole-home deep cleans.<br></br>
                         Self-righting technology so it picks itself up when toppled<br></br>
                         <b>With two-year complete accidental damage protection*</b><br></br>
                         </span><br></br><br></br>
                         <div>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>&nbsp;&nbsp;&nbsp;
                          <span><a href="#" style={{color:"#666"}}><u>459 Reviews</u></a></span>&nbsp;&nbsp;
                           <span className="glyphicon glyphicon-chevron-down"></span>
                        
                         </div>
            
                         <div><del>Was ₹43,900.00</del></div>
                         <h2 className="money">₹25,900.00</h2>
                         <p>(inclusive of all taxes)</p>
                         <p className="money">Save ₹18,000.00</p>
                         <h4 className="money">Dyson Round Brush for ₹1,690 (MRP ₹4,290)  </h4>
                          <button className="btn btn-default btn-lg add" type="button"
                             onClick={() =>addToCart({ name: "Dyson Big Ball™ vacuum cleaner", price: 25900 }) }>Add to Cart
                         </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className="btn btn-default btn-lg learn" type="button">Learn More</button>
                     </div>
                     <div className="col-md-1 col-xs-12">
                        <img  src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/286519-01.png" height={500} width={280}></img>
                     </div>
                     <div className="col-md-2"></div>
                 
                 <div className="table">
                 <div className="col-md-4 col-xs-12 a">
                 <h3 className="save1">Save $20000</h3>
                 
                         <h2>Dyson V11 Absolute vacuum cleaner</h2>
                         <span className="a1">
                           <b>Power:</b> 185 Air Watts <br></br>
                           <b>Run time:</b> 60 minutes<br></br>
                          <b>Weight: </b>2.9kg <br></br>
                           <b>Bin size: </b>0.77L <br></br>
                           Powerful and versatile cord-free vacuum with De-tangling technology<br></br>Three power modes and battery life displayed on LCD screen<br></br></span>

                         <div>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span> <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>&nbsp;&nbsp;&nbsp;
                          <span><a href="#" style={{color:"#666"}}><u>14959 Reviews</u></a></span>&nbsp;&nbsp;
                           <span className="glyphicon glyphicon-chevron-down"></span>
                        </div>
                         <div><del>Was ₹57,900.00</del></div> 
                         <h2 className="money">₹37,900.00</h2>
                         <p>(inclusive of all taxes)</p>
                         <p className="money">Save ₹20,000.00</p>
                         <h4 className="money">Add Detail cleaning kit: ₹990 (MRP ₹9,900)<br></br>Add Pet grooming kit: ₹1,490 (MRP ₹9,900)  </h4>
                         
                         <button className="btn btn-default btn-lg add" type="button"
                             onClick={() =>addToCart({ name: "Dyson V11 Absolute vacuum cleanerr", price: 20900 }) }>Add to Cart
                         </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <button className="btn btn-default btn-lg learn" type="button">Learn More</button>
                     </div>
                     <div className="col-md-1 col-xs-12">
                        <img  src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/india/2022/nov/primary-blue-sb.png?scl=1" height={500}></img>
                     </div>
                  </div>
         </div><br></br><br></br>
         <div className="row">
   
                <h3 className="save2">Save $14,000</h3>
                 
                     <div className="col-md-4 col-xs-12 a">
                         <h2>Dyson V8 Absolute vacuum cleaner</h2>
                         <span className="a1">
                           <b>Power:</b> 115 Air Watts <br></br>
                           <b>Run time:</b> 40 minutes<br></br>
                          <b>Weight: </b>2.6kg <br></br>
                           <b>Bin size: </b>0.54L <br></br>
                           Versatile and compact design<br></br>
                         Gentle on hard floors. Tough on dirt.<br></br>
                         </span>
                         <br></br>
                         <div>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>&nbsp;&nbsp;&nbsp;
                          <span><a href="#" style={{color:"#666"}}><u>28119 Reviews</u></a></span>&nbsp;&nbsp;
                           <span className="glyphicon glyphicon-chevron-down"></span>
                        
                         </div>
                         
                         <div><del>Was ₹43,900.00</del></div>
                         <h2 className="money">₹29,900.00</h2>
                         <p>(inclusive of all taxes)</p>
                         <p className="money">Save ₹14,000.00</p>
                         <h4 className="money">Add Detail cleaning kit: ₹990 (MRP ₹9,900)<br></br>Add Pet grooming kit: ₹1,490 (MRP ₹9,900)  </h4>
                         <button className="btn btn-default btn-lg add" type="button"
                             onClick={() =>addToCart({ name: "Dyson V8 Absolute vacuum cleaner", price: 29900 }) }>Add to Cart
                         </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className="btn btn-default btn-lg learn" type="button">Learn More</button>
                     </div>
                     <div className="col-md-1 col-xs-12">
                        <img  src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/india/2024/Hero-ss.png" height={500} width={280}></img>
                     </div>
                     <div className="col-md-2"></div>
                 
                 <div className="table">
                 <div className="col-md-4 col-xs-12 a">
                 <h3 className="save3">Save $11000</h3>
                 
                         <h2>Dyson V12 Detect Slim Absolute vacuum cleaner</h2>
                         <span className="a1">
                           <b>Power:</b> 115 Air Watts <br></br>
                           <b>Run time:</b> 40 minutes<br></br>
                          <b>Weight: </b>2.6kg <br></br>
                           <b>Bin size: </b>0.54L <br></br>
                           Illuminated cleaner head reveals invisible dust particles<br></br>Engineered for home with pets. Tool automatically de-tangles hair<br></br>
                           </span>

                         <div>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span> <span className="glyphicon glyphicon-star st"></span>
                         <span className="glyphicon glyphicon-star st"></span>&nbsp;&nbsp;&nbsp;
                          <span><a href="#" style={{color:"#666"}}><u>17291 Reviews</u></a></span>&nbsp;&nbsp;
                           <span className="glyphicon glyphicon-chevron-down"></span>
                        </div>
                         <div><del>Was ₹58,900.00</del></div> 
                         <h2 className="money">₹47,900.00</h2>
                         <p>(inclusive of all taxes)</p>
                         <p className="money">Save ₹11,000.00</p>
                         <h4 className="money"> Add Detail cleaning kit: ₹990 (MRP ₹9,900)<br></br>Add Pet grooming kit: ₹1,490 (MRP ₹9,900) </h4>
                         
                        <button className="btn btn-default btn-lg add" type="button"
                             onClick={() =>addToCart({ name: "Dyson V12 Detect Slim Absolute vacuum cleaner", price: 47900 }) }>Add to Cart
                         </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <button className="btn btn-default btn-lg learn" type="button">Learn More</button>
                     </div>
                     <div className="col-md-1 col-xs-12">
                        <img  src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/personal-care/556/variant/copper-nickel/556-VariantPDP-Hero-Copper.png?scl=1" height={500}></img>
                     </div>
                  </div>
         </div>
      </div><br></br>
       
     
   </>
  );
}