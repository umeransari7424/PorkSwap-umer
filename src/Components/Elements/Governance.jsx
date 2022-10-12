import React from "react";

function Governance() {
  return (
    <div>
      <div class="container text-center  py-5">
        <div class="row">
          <div class="col-md-8 text-start">
            <img className="img-fluid" src="Assets/governance.png" alt="Governance" />
          </div>
          <div class="col-md-4 ">
            <div>
                <h2>Governance Platform</h2>
            </div> <br />
            <div>
            <button type="button" class="btn btn-warning btn-lg">Launched, Start Voting Now</button> &nbsp;
            </div> <br />
            <div className="governance-list  text-start">
            <span><b>You'll be able to vote for:</b></span>
            <ul>
                <li>Change in underlying protocol</li>
                <li>Change in pricing oracle</li>
                <li>Change in futures funding rate</li>
                <li>Change in platform fees</li>
                <li>Change inlist/de-list tokens</li>
                <li>Propose new features</li>
            </ul>
          </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Governance;
