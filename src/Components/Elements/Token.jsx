import React from "react";

function Token() {
  return (
    <div>
      <div className="tokenbg">
        <div className="container text-center py-5">
          <div className="row">
            <div>
              <h2>
                <b>Token</b> <b className="interface">Distribution</b>
              </h2>
            </div>
            <br />
            <br />
            <br /> <br />
            <br />
            <div className="col-md-6 m-auto">
              <div className="token">
                <div>

                <div className="text-center">
                  <h5>50%</h5>
                  <b>Liquidity Rewards <br /> (Locked)</b>
                </div>

                <div className="team-locked">
                  <h5>10%</h5>
                  <b>Team-Locked</b>
                </div>
                <div className="liquidity">
                  <h5>10%</h5>
                  <b>Liquidity</b>
                </div>
                <div className="growth">
                  <h5>10%</h5>
                  <b>Growth Hacking</b>
                </div>
                <div className="public">
                  <h5>20%</h5>
                  <b>Public State</b>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
