import React from "react";

function Utils() {
  return (
    <div className="utils-bg">

    <div className="container text-center py-5">
        <div className="row">
            <div className="col-md-12">
            
                <h2>
                <b>$PSWAP</b>  <b className='interface'>Utilies</b>
                </h2>
           
            </div> 

        </div> <br /> <br />
      <div className="row">
        <div className="col">
        <div className='text-start card utils-card p-3'>
             <img className='img-fluid' width={"100px"} src="Assets/u1.png" alt="U1" />
             <b>Governance</b> <br />
             <p>
             Vote to modify underlying protocol, change in pricing oracle, futures funding rate, platform fees, list/de-list tokens, new features
             </p>

         </div>
        </div>
        <div className="col">
        <div className='text-start card utils-card p-3'>
             <img className='img-fluid' width={"85px"} src="Assets/u2.png" alt="U2" /> 
             <b>Incentive</b> <br />
             <p>
             Liquidity providers will be incentivized in $PSWAP for their participation in spot and leverage liquidity pools, and LP tokens can be staked for ARR of around 125%.
             </p>

         </div>
        </div>
        <div className="col">
        <div className='text-start card utils-card p-3'>
             <img className='img-fluid' width={"85px"} src="Assets/u3.png" alt="U3" /> 
             <b>Deflation</b> <br />
             <p>
             With a fixed supply of 1 million tokens, and only 200,000 in circulation, $PSWAP token will increase in value overtime since it'll be scarce and the team will buy back and burn tokens from platform revenue generated through spot and futures trading
             </p>

         </div>
        </div>
      </div>
    </div>
    </div>
    // <div className="container text-center py-5">
    //     <div className="row">

    //   <div>
    //     <h2>
    //       <b>$PSWAP</b> <b className="interface">Utilities</b>
    //     </h2>
    //   </div> <br />
    //   <br />
    //   <div>
    //     
    //     <div className='col-md-4 text-start card'>
    //         <img className='img-fluid' width={"100px"} src="Assets/u1.png" alt="U1" /> <br />
    //         <b>Governance</b> <br />
    //         <p>
    //         Vote to modify underlying protocol, change in pricing oracle, futures funding rate, platform fees, list/de-list tokens, new features
    //         </p>

    //     </div>
    //     <div className='col-md-4 text-start card'>
    //         <img className='img-fluid' width={"100px"} src="Assets/u1.png" alt="U1" /> <br />
    //         <b>Governance</b> <br />
    //         <p>
    //         Vote to modify underlying protocol, change in pricing oracle, futures funding rate, platform fees, list/de-list tokens, new features
    //         </p>

    //     </div>
    //   </div>

    //     </div>
    // </div>
  );
}

export default Utils;
