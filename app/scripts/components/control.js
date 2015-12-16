import React from 'react';

export default class extends React.Component{

  constructor(props){
    super(props);

  }
  render(){
   return(
    <div className="carousel-navigation">
            <div className="control">
                <a className="arrow left" href="#">&lsaquo;</a>
                  <ol className="slider-indicators">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                <a className="arrow right" href="#">&rsaquo;</a>
            </div>
    </div>

    )
  }

 };
