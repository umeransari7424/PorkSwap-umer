import React from "react";


function Youtube  ( ) {
  return (
    <div className="comparison-bg">
      <div className="container text-center py-5">
        <div>
          <h2>
            <b>HoW It</b> <b className="interface">Works</b>
          </h2>
        </div>
        <br />   
    <iframe
      width="100%"
      height="480"
      src="https://www.youtube.com/embed/-V5QjGogoig"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowFullScreen
      title="youtube video"
    />
      </div>
    </div>
  );
  
  
};

export default Youtube;
