import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div>
     <div className='home__container'>
        <img className='home__image' src="https://m.media-amazon.com/images/I/71a-M3OBmdL._SX3000_.jpg" alt="" />
    </div>
      <div className='home__row'>
        <Product id="1"
							title="Amazon Astro, Household Robot for Home Monitoring, with Alexa, Includes 6-month Free Trial of Ring Protect Pro"
							price={999.99}
							rating={4}
							image="https://m.media-amazon.com/images/I/61adlw62wHL._AC_SL1000_.jpg"/>
        <Product id="2"
							title="Certified Refurbished Fire HD 10 tablet, 10.1in, 1080p Full HD, 32 GB, latest model (2021 release), Denim"
							price={79.99}
							rating={4}
							image="https://m.media-amazon.com/images/I/61y-9Uk3D1L._AC_SX569_.jpg"/>
        <Product id="3"
							title="ZIONOR Swim Goggles, G1 Polarized Swimming Goggles Anti-Fog for Adult Men Women"
							price={20.49}
							rating={4}
							image="https://m.media-amazon.com/images/I/61C30ZAC3lS.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
        <Product id="4"
							title="Fitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate"
							price={158.95}
							rating={4}
							image="https://m.media-amazon.com/images/I/61CZSoSnVPL._AC_SX679_.jpg"/>
      </div> 
      <div className='home__row'>
        <Product id="5"
							title="HTC Vive Pro 2 Headset Only"
							price={790.32}
							rating={4}
							image="https://m.media-amazon.com/images/I/31JZWqZniTS._SY300_SX300_QL70_FMwebp_.jpg"/>
        <Product id="6"
							title="Zulay Original Milk Frother Handheld Foam Maker for Lattes - Whisk Drink Mixer for Coffee, Mini Foamer for Cappuccino, Frappe, Matcha, Hot"
							price={10.97}
							rating={4}
							image="https://m.media-amazon.com/images/I/81BCRFhun6L._AC_UL320_.jpg"/>
        <Product id="7"
							title="IFFEI Matching Family Pajamas Sets Christmas PJ's Letter Print Top and Plaid Pants Jammies Sleepwear"
							price={19.99}
							rating={4}
							image="https://m.media-amazon.com/images/I/71ZOB2RqR7L._AC_UL1500_.jpg"/>
        <Product id="8"
							title="Apple 13.3 inches MacBook Air with Retina Display, Intel Core i5 8th Gen Dual-Core, 8GB RAM, 128GB SSD - Mid 2019, Space Gray MVFH2LL/A (Renewed)"
							price={654.30}
							rating={4}
							image="https://m.media-amazon.com/images/I/51-9oSG8jAL._AC_SX679_.jpg"/>
      </div> 
      <div className='home__bottom'>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_NewTraditional_D_1500x500_EN.jpg" alt="home and decore" />
      </div> 
	  <div className='home__row'>
        <Product id="9"
							title="adidas Mens Yeezy Foam Runner HP8739 Onyx - Size"
							price={509.99}
							rating={3}
							image="https://m.media-amazon.com/images/I/711rcItb7qL._AC_UL1500_.jpg"/>
        <Product id="10"
							title="Hill's Science Diet Adult Small & Toy Breed Dry Dog Food, Chicken Meal & Rice Recipe, 15.5 lb. Bag"
							price={41.79}
							rating={4}
							image="https://m.media-amazon.com/images/I/71oBEOfFclL._AC_SX522_.jpg"/>
		</div>
    </div>
)
}

export default Home
