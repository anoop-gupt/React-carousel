import React from 'react';

export default class extends React.Component{

  constructor(props){
    super(props);

  };
  render(){
   return(

     <div className="col-sm-3 col-md-3 active item">
        <figure>
          <img src="images/test_carousel_image_1.jpg"/>
        </figure>
         <div className="carousel-slide">
           <h2>Business</h2>
           <p>Promos about business deals that wraps onto two lines</p>
        </div>
      </div>

    )
  }

 };
