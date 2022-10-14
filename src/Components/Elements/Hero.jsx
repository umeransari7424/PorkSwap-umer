import React from "react";
import Particle from "../Config/Particles";
// import Particls from "../Config/particls";
// import tsparticles from 



function Hero() {
  return (
    <div className="hero-bg position-relative">
      
      <div className="position-absolute">
        <Particle />
        {/* <Particls /> */}
      </div>
     
        
      <div class="container text-center py-5">
        <div class="row">
        
          <div class="col-md-6 col-12 text-start">
            
            <h1>
              <b>Decentralized Spot and Futures Trading on BSC</b>
            </h1>
            <br />
            <p>
              Automated market maker powered, taking De-Fi game to the next
              level. Make instant spot exchange, leveraged trades, provide
              liquidity to earn returns and rewards.
            </p>
            <br />
            <div className="d-grid gap-2">
              <button className="btn btn-warning" type="button">
                Spot Trading Platform Launched 🚀
              </button>
            </div>{" "}
            <br />
            <hr />
            <div>
              <button type="button" class="btn btn-danger btn-lg">
                Earn PSWAP
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-danger btn-lg">
                Trade on PCS
              </button>{" "}
              &nbsp;
              <button type="button" class="btn btn-danger btn-lg">
                Governance
              </button>
            </div>
          </div>
          <div class="col-md-6 col-12 ">
            <img
              className="img-fluid"
              src="Assets/porkswap-pink.png"
              alt="porkswap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
