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
                  <strong>50% <br />
                  Liquidity Rewards <br /> (Locked)</strong>
                </div>

                <div className="team-locked">
                  <strong>10% <br />
                  Team-Locked</strong>
                </div>
                <div className="liquidity">
                  <strong>10% <br />
                  Liquidity</strong>
                </div>
                <div className="growth">
                  <strong>10% <br />
                  Growth Hacking</strong>
                </div>
                <div className="public">
                  <strong>20% <br />
                  Public State</strong>
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
