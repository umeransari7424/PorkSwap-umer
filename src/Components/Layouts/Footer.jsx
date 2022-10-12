import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BsTelegram } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer-bg">
      <div className="container text-center py-5">
        <div className="row">
          <div className="col text-start">
            <div>
              <img className="img-fluid" src="Assets/logo.png" width={"200px"} alt="porkswap logo" />{" "}
              <br /> <br />
              <p>
                Decentralized Spot and Futures <br /> Trading on Binance Smart
                Chain
              </p>
            </div>
          </div>
          <div className="col"></div>
          <div className="col">
          <div>
               <BsTwitter size={"40px"}/>
               <FaFacebookF size={"40px"}/>
               <TiSocialYoutubeCircular size={"50px"}/> &nbsp;
               <BsTelegram size={"40px"}/>
             </div> <br />

             <div>
               <a  href="/">exchange@porkswap.finance</a>
             </div>
            

          </div>
        </div><br />
        <hr /><br />
        <p>Copyright © 2022 PorkSwap.finance</p>
      </div>
    </div>
   
  );
}

export default Footer;
