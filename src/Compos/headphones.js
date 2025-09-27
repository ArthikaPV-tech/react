
import React, { useState } from 'react';
import "./headphones.css";
import A from "./images/571H-Hero-KV-Badshah.jpg";
import B from "./images/571H-Motif-Khaki-BLK.png";
import Sli1 from "./images/571H_Nav_Image_Black_Nickel.jpg";
import Sli2 from "./images/571H_Nav_Image_Aluminium.jpg";
import Sli3 from "./images/556-VariantPDP-Hero-Copper.jpg";
import Sli4 from "./images/571H_Nav_Image_Ceramic_Cinnabar.jpg";
import Sli5 from "./images/571H-Category-OnTrac-Ear-caps.jpg";
import Sli6 from "./images/571H-Category-OnTrac-Cushions.jpg";
import C from "./images/571H_Category_video_fallback.jpg";
import D from "./images/hp1.jpg";
import E from "./images/hp2.jpg";
import F from "./images/hp3.jpg";
import G from "./images/571-Remix.jpg";
import Video  from "./images/main.mp4";
import Front from "./images/ffa11e.webp";
import Back from "./images/a3a2a1cnc.webp";
import Call from "./images/call.png";
import Msg from "./images/email-light.png"
import Whatsp from "./images/whatsapp_icon.png";
import Flag from "./images/flag.png";
import H from "./images/guarantee-activate.png";
import I from "./images/right-part-icon.png";
import J from "./images/replace-filter-icon.png"
import K from "./images/expert-support-icon.png";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return(
        <>
        
        <div className="head text-center">
            <h3 >Shop the Dyson OnTrac™ headphones for only ₹26,900 | Limited period offer <u><b>Shop now</b></u></h3>
        </div>
        <img src={A} alt="img" className="img-responsive" width={"100%"}></img>
        <div className="container-fluid">
            <div className=" row lat">
            <div className="col-md-5 col xs-12">
                 <button className="latest ">Latest technology</button><br></br>
                 <img src={B} alt="or"></img><br></br><br></br>
                 <p className="txts">Headphones,</p>
                 <p className="green">remastered</p>
                 <p className="txt">Best-in-class noise cancellation.<br></br>Long lasting battery life1 of 55 hours.</p>
                 <button className="btn btn-default btn-lg shop">Shop now</button>
            </div>
            </div>
        </div>
<br></br>
        <section className="slides">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-xs-12">
                        <img src={Sli1} alt="sli1"  height={"250"} width={"170"}></img><br></br><br></br>
                        <span className="slide">CNC Black Nickel</span>
                    </div>
                    <div className="col-md-2 col-xs-12">
                         <img src={Sli2} alt="sli1" height={"250"} width={"170"} ></img><br></br><br></br>
                        <span className="slide">CNC Aluminium</span>
                    </div>
                    <div className="col-md-2 col-xs-12">
                         <img src={Sli3} alt="sli1" height={"250"} width={"170"}></img><br></br><br></br>
                        <span className="slide">CNC Copper</span>
                    </div>
                    <div className="col-md-2 col-xs-12">
                         <img src={Sli4} alt="sli1" height={"250"} width={"170"}></img><br></br><br></br>
                        <span className="slide">Ceramic Cinnabar</span>
                    </div>
                    <div className="col-md-2 col-xs-12">
                         <img src={Sli5} alt="sli1" height={"250"} width={"170"}></img><br></br><br></br>
                        <span className="slide">OnTrac™ Caps</span>
                    </div>
                    <div className="col-md-2 col-xs-12">
                         <img src={Sli6} alt="sli1" height={"250"} width={"170"}></img><br></br><br></br>s
                        <span className="slide">OnTrac™ Cushions</span>
                    </div>
                </div>
            </div>
        </section>
        <br></br><hr></hr>
        <div className="new">
            <h2>All-new expression in sound.</h2>
        </div><br></br>
        <div className="container-fluid">
            <img src={C} alt="girl" width={"100%"}></img>
        </div>

<section className="hps">
        <div className="container ">
            <div className="row">
                <div className="col-md-4 col-xs-12">
                    <img className="hp" src={D} alt="hp1" height={"400"} width={"340"}></img>
                    <h3>Engineered for all day comfort</h3>
                    <p>Soft microfibre ear cushions, even weight distribution and optimised clamp force. Tested on diverse head sizes for a comfortable fit.</p>
                </div>
               
                 <div className="col-md-4 col-xs-12">
                     <img className="hp" src={E} alt="hp1" height={"320"} width={"340"}></img>
                    <h3>Add more cushions and caps</h3>
                    <p>Make your headphones your own. Choose from additional ear cushions and outer caps in a range of colours and finishes. Accessories sold separately.</p>
                </div>
               
                 <div className="col-md-4 col-xs-12">
                      <img className="hp" src={F} alt="hp1" height={"400"} width={"340"}></img>
                    <h3>Up to 55 hours of run time¹</h3>
                    <p>Quick charging capability delivers 2.5 hours of listening from 10 minutes of charging, or 9 hours from a 30-minute charge.</p>
                </div>
                </div>
                <button className="btn btn-default btn-lg shop1">Shop now</button>
<br></br>
        </div>
</section>
<section className="switch">
     <img src={G} alt="hp" width={"100%"}></img>
    <div className="container">
        <div className="row">
            <div className="col-md-5 col-xs-12 swit">
                 <h1>Switch it <b>up</b></h1>
                 <p style={{fontSize:"26px"}}>Mix and match colour combinations to make them yours.</p>
                 <span className="glyphicon glyphicon-log-in"></span> &nbsp;  
                 <span className="learn">Learn more</span>
            </div>
          </div>
    </div>
</section>
<section className="video">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-xs-12 a">
                <video src={Video} controls height={"450"} width={"380"}></video>
            </div>
            <div className="col-md-1 col-xs-12 caps"></div>
             <div className="col-md-3 col-xs-12 a">
                <img src={Front} alt="front" height={"220"} width={"310"}></img><br></br><br></br><br></br>
                <img src={Back} alt="back" height={"220"} width={"310"}></img><br></br>
            </div>
           <div className="col-md-1 col-xs-12 caps"></div>
             <div className="col-md-4 col-xs-12 caps">
                <h2><b>Add more</b> ear cushions and outer caps to make your own unique design*</h2>
                <p>Mix and match with our 360° visualiser below, then shop to make them yours. *Additional ear cushions and outer caps sold separately. Subject to availability.</p>
                <p>Selected headphones: <b>CNC Aluminium</b> (Including: Chrome Yellow cushions and CNC Aluminium caps)</p>
                <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/CNC-Aluminium-Dual.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/CNC-Aluminium-Dual.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Ceramic-Cinnabar-Dual.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                 <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/CNC-Black-Nickel-Dual.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                 <hr></hr>
                 <div className="cushion">
                 <h3>Ear Cushions:</h3>
                  <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Chrome-Yellow.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Oyster-Pink.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                    <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Prussian-Blue.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Ultra-Blue.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Dark-Iron.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Khaki.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                </div><hr></hr>
                   <div className="cushion">
                 <h3>Outer Caps:</h3>
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/CNC-Aluminium.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/CNC-Copper.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/CNC-Black-Nickel.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Coarse-Titanium.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Ceramic-Blue.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Khaki.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                   <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/mcv/colour-swatch/Ceramic-Cinnabar.png' alt="icon" height={"30"} width={"30"}></img>&nbsp; &nbsp; 
                </div>
            </div>
        </div>
    </div>
</section>
<br></br>


 <h2 className="quiz text-center">Frequently asked questions</h2>
      <section className="ques">
        <div className="container">
          {/* Question 1 */}
          <div className="row" onClick={() => toggleAnswer(1)} style={{ cursor: "pointer" }}>
            <div className="col-md-8 col-xs-12">
              <h3>How long do Dyson OnTrac™ headphones take to fully charge?</h3><hr></hr>
            </div>
            <div className="col-md-2 col-xs-12"></div>
            <div className="col-md-2 col-xs-12">
              <span className="glyphicon glyphicon-menu-down"></span>
            </div>
          </div>
          {openIndex === 1 && (
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="collapsein" id="answer1">
                  <p>
                    Dyson OnTrac™ headphones take just 3 hours to fully charge and give you up to 55
                    hours of listening¹, even with ANC switched on. Quick charging capability delivers
                    up to 2.5 hours of listening from 10 minutes of charging, or up to 9 hours from a
                    30-minute charge.
                  </p><hr></hr>
                </div>
              </div>
            </div>
          )}

          {/* Question 2 */}
          <div className="row" onClick={() => toggleAnswer(2)} style={{ cursor: "pointer" }}>
            <div className="col-md-8 col-xs-12">
              <h3>What can I connect the Dyson OnTrac™ headphones to?</h3><hr></hr>
            </div>
            <div className="col-md-2 col-xs-12"></div>
            <div className="col-md-2 col-xs-12">
              <span className="glyphicon glyphicon-menu-down"></span>
            </div>
          </div>
          {openIndex === 2 && (
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="collapsein" id="answer2">
                  <p>
                    Dyson OnTrac™ headphones use Bluetooth® technology for wireless connectivity across devices such as smartphones, tablets, laptops and smart TVs.
                  </p><hr></hr>
                </div>
              </div>
            </div>
          )}
    
          {/* Question 3 */}
          <div className="row" onClick={() => toggleAnswer(3)} style={{ cursor: "pointer" }}>
            <div className="col-md-8 col-xs-12">
              <h3>Can the Dyson OnTrac™ headphones be used for travel or on flights?</h3><hr></hr>
            </div>
            <div className="col-md-2 col-xs-12"></div>
            <div className="col-md-2 col-xs-12">
              <span className="glyphicon glyphicon-menu-down"></span>
            </div>
          </div>
          {openIndex === 3 && (
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="collapsein" id="answer3">
                  <p>
                    Yes. Dyson OnTrac™ headphones can be used on flights, with the Dyson in-flight adaptor that’s available separately...
                  </p><hr></hr>
                </div>
              </div>
            </div>
          )}
 {/* Question 4 */}
          <div className="row" onClick={() => toggleAnswer(4)} style={{ cursor: "pointer" }}>
            <div className="col-md-8 col-xs-12">
              <h3>Do the Dyson OnTrac™ headphones fold flat?</h3><hr></hr>
            </div>
            <div className="col-md-2 col-xs-12"></div>
            <div className="col-md-2 col-xs-12">
              <span className="glyphicon glyphicon-menu-down"></span>
            </div>
          </div>
          {openIndex === 4 && (
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="collapsein" id="answer4">
                  <p>
                    Gimbal arms allow the ear cups to be rotated so the headphones fold flat. With a slimline, protective case for easy transportation.
                  </p><hr></hr>
                </div>
              </div>
            </div>
          )}
 {/* Question 5 */}
          <div className="row" onClick={() => toggleAnswer(5)} style={{ cursor: "pointer" }}>
            <div className="col-md-8 col-xs-12">
              <h3>Does the Dyson OnTrac™ Slimline case come with the headphones?</h3><hr></hr>
            </div>
            <div className="col-md-2 col-xs-12"></div>
            <div className="col-md-2 col-xs-12">
              <span className="glyphicon glyphicon-menu-down"></span>
            </div>
          </div>
          {openIndex === 5 && (
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="collapsein" id="answer5">
                  <p>
                   Yes. You receive a complimentary Dyson OnTrac™ Slimline case when you purchase Dyson OnTrac™ headphones. Fold them flat and slide them in their slim, protective case, to take them wherever you go.
                  </p><hr></hr>
                </div>
              </div>
            </div>
          )}
           {/* Question 6*/}
          <div className="row" onClick={() => toggleAnswer(6)} style={{ cursor: "pointer" }}>
            <div className="col-md-8 col-xs-12">
              <h3>Why isn’t my head detect working?</h3><hr></hr>
            </div>
            <div className="col-md-2 col-xs-12"></div>
            <div className="col-md-2 col-xs-12">
              <span className="glyphicon glyphicon-menu-down"></span>
            </div>
          </div>
          {openIndex === 6 && (
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="collapsein" id="answer6">
                  <p>
                   In instances where your head detect isn’t working, you can recalibrate in the MyDyson™ app. A common cause for this is the changing of ear cushions. If you experience this issue, make sure to recalibrate after every change.
                  </p><hr></hr>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

<h2 className="buy text-center">Buy from Dyson.in</h2>s
   <div className="container">
      <div className="row">
         <div className="col-md-3 col-xs-12">
            <div className="box">
            <img src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/icons/master/333333/64/star%402x.png" alt="dy"height={"40"} width={"40"}></img><br></br>
            <h3><u>Earn loyalty points</u></h3>
            <p>5% on every purchase</p>
            </div>
         </div>
         <div className="col-md-3 col-xs-12">
             <div class="box">
            <img src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/icons/reasons-to-buy/free-shipping-dark.png?scl=1&fmt=png-alpha"alt="dy" height={"40"} width={"40"}></img><br></br>
            <h3><u>Cash on delivery</u></h3>
            <p>Order up to $50,000</p>
            </div>
         </div>
         <div className="col-md-3 col-xs-12">
             <div class="box">
            <img src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/india/icons/2yr-warranty.png?scl=1&fmt=png-alpha"alt="dy" height={"40"} width={"40"}></img><br></br>
            <h3><u>Warranty</u></h3>
            <p>Two year warranty</p>
            </div>
         </div><div className="col-md-3 col-xs-12">
             <div class="box">
            <img src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/india/icons/money-back-rupee.png?scl=1&fmt=png-alpha" alt="dy" height={"40"} width={"40"}></img><br></br>
            <h3><u>No questions asked </u></h3>
            <p>10-day return policy</p>
            </div>
         </div>
      </div>
   </div>
<br></br><br></br>

<section className='owner'>
  <h2 className='own text-center'>Owner support</h2>
  <div className='container'>
    <div className='row'>
      <div className='col-md-3  col-xs-12'>
        <img src={H} alt="active" height={"120"} width={"100"}></img><br></br>
        <span>Register your machine</span>
      </div>
      <div className='col-md-3  col-xs-12'>
        <img src={I} alt="active1" height={"120"} width={"100"}></img><br></br>
        <span>Find a right part</span>
      </div>
      <div className='col-md-3  col-xs-12'>
        <img src={J} alt="active2" height={"120"} width={"100"}></img><br></br>
        <span>Find a replacement filter</span>
      </div>
      <div className='col-md-3  col-xs-12'>
        <img src={K} alt="active3" height={"120"} width={"100"}></img><br></br>
        <span>Export support</span>
      </div>
    </div>
  </div>
</section>
      <section className="contact">
      <div className="container">
         <h1 className="talk">Talking to us is easy.</h1>
         <div className="row">
            <div className="col-md-4 col-xs-12">
               <img src={Call} alt="call" height={"40"} width={"40"}></img><br></br>
               <p>You can call us</p>
               <span>1-800-258-6688</span>
            </div>
             <div className="col-md-4 col-xs-12">
               <img src={Msg} alt="msg" height={"40"} width={"40"}></img><br></br>
               <p>Email us at</p>
               <span>ask@dyson.in</span>
            </div>
             <div className="col-md-4 col-xs-12">
               <img src={Whatsp} alt="whatsapp" height={"40"} width={"40"}></img><br></br>
               <p>Start a whatsapp conversion</p>
            </div>
         </div>
      </div>
   </section>
   <section className="footer">
      <div className="container">
         <div className="row"><br></br>
            <div className="col-md-3 col-xs-12 ">
               <h3 style={{color:"white"}}>Products</h3><br></br>
               <span>Vaccum cleaners</span><br></br>
               <span>Hair care</span><br></br>
               <span>Air treatement</span><br></br>
               <span>Headphones</span><br></br>
               <span>Lighting</span><br></br>
               <span>Deals</span><br></br>
               <span>Dyson Live</span><br></br>
            </div>
            <div className="col-md-3 col-xs-12">
               <h3 style={{color:"white"}}>For business</h3><br></br>
               <span>Technology for business</span><br></br>
               <span>Hand dryers for business</span><br></br>
               <span>Vaccum cleaners for business</span><br></br>
               <span>Hiar care for business</span><br></br>
               <span>Lighting for business</span><br></br>
               <span>Technical specifications and guides</span><br></br>
               <span>Request a call back</span><br></br>
            </div>
            <div className="col-md-3 col-xs-12">
               <h3 style={{color:"white"}}>Dyson support</h3><br></br>
               <span>Register machine</span><br></br>
               <span>Find a state</span><br></br>
               <span>Contact us</span><br></br>
               <span>Machine Support</span><br></br>
               <span>Warranty information</span><br></br>
               <span>Counterfair machines</span><br></br>
               <span>Track your order</span><br></br>
            </div>
            <div className="col-md-3 col-xs-12">
               <h3 style={{color:"white"}}>About Dyson</h3><br></br>
               <span>Press</span><br></br>
               <span>Careers</span><br></br>
               <span>Sustainability</span><br></br>
               <span>James Dyson Foundation</span><br></br>
               <span>Corporate Social Responsibility</span><br></br>
               </div>
         </div><br></br>
         
            <div className="row bottom">
               <div className="col-md-10 col-xs-12 left">
                  <span>Privacy policy | Cookies policy | Terms and conditions | Terms of website use</span> 
               </div>
               <div className="col-md-2 col-xs-12 right">
                  <img src={Flag} alt="flag" height={"30"} width={"30"}></img> &nbsp; 
                  <span style={{color:"white"}}><u>India</u></span> &nbsp;
                  <span className="glyphicon glyphicon-chevron-right" style={{color:"white"}}></span>
               </div>
            </div>
           
            <div className="row">
               <div className="col-md-10 col-xs-12">
                  <p>Country of Origin - Malaysia</p>
                 <p>Country of Origin - Malaysia Imported by: Dyson Technology India Pvt Ltd Registered Office: #22, First Floor, Augusta Point, Golf Course Road, Sector 53, <br></br>Gurugram, Haryana, India - 122002</p>
                  <p>CIN: U51909HR2017FTC068554</p>
               </div>
                <div className="col-md-2 col-xs-12 right">
                        <p>©dyson 2025</p>
                </div>
            </div>
   
      </div>
            
   </section>
        </>
     )
}
         
   
      