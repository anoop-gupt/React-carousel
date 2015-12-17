import React from 'react';

export default class extends React.Component{

  constructor(props){
    super(props);

  }
  render(){
   return(
            <div className="carousel-navigation">
              <div className="control">
                  <a className="prev-btn" href="#">&lsaquo;</a>
                    <ol className="indicators">
                      <li className="active"><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                    </ol>
                  <a className="next-btn" href="#">&rsaquo;</a>
                </div>
            </div>

    )
  }

 };
