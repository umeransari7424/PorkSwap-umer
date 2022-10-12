import React from "react";

function yahoo() {
  return (
    <div>
      <div className="container text-center py-5">
        <div className="row">
            <div className="py-5">

            <h2><b>As Seen On</b></h2> 
            </div> <br />
          <div className="col-md-3 ">
            <img className="img-fluid" style={{width:'160px'}} src="Assets/yahoo.png" alt="yahoo logo" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid" style={{width:'160px'}} src="Assets/bloomberg.svg" alt="bloomberg" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid" style={{width:'160px'}} src="Assets/benzinga.png" alt="benzinga" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid" style={{width:'160px'}} src="Assets/news-btc.png" alt="news btc" />
          </div>
        </div> <br /><br /> <br />
        <hr />
      </div>
      
    </div>
  );
}

export default yahoo;
