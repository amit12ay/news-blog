import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>
              After the popularisation of print media in the late 18th Century,
              newspapers become a regular thing.
            </p>

            <i className="fa fa-envelope"></i>
            <span>amityadav7096@gmail.com</span>
            <br />
            <i className="fa fa-headphones"></i>
              <span>+977-9845677096</span> 
          </div>
            <div className="box">
              <h3>SPORT</h3>
              <div className="item">
                <img src='../images/hero/hero1.jpg' alt=''/>
                <p> By playing the National Lottery, you're helping people across England play sport and get physically active</p>
              </div>
              <div className="item">
                <img src='../images/hero/hero2.jpg' alt=''/>
                <p>Cespedws play the winning Baseball Game</p>
              </div>
            </div>
            <div className="box">
              <h3>CRICKET</h3>
              <div className="item">
                <img src='../images/hero/hero3.jpg' alt=''/>
                <p> By playing the National Lottery, you're helping people across England play sport and get physically active</p>
              </div>
              <div className="item">
                <img src='../images/hero/hero1.jpg' alt=''/>
                <p>Renewable energy dead as industry waits for policy</p>
              </div>
            </div>
            <div className="box">
              <h3>LABELS</h3>
              <ul><li><span>Fashion</span><label>(2)</label></li></ul>
              <ul><li><span>Health</span><label>(3)</label></li></ul>
              <ul><li><span>Boxing</span><label>(4)</label></li></ul>
              <ul><li><span>Polticies</span><label>(5)</label></li></ul>




            </div>
        </div>
      </footer>
      <div className='legal'>
        <div className='container flexSB'>
          <p>@ all right reserved</p>
          <p>develop by Amit Kumar Yadav</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
