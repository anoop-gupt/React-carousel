import React from 'react';
import Figure from './figure';
import Title from './title';
import Content from './content';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_2.jpg",
            "alt" : "Alt text for image 1" ,
            "title" : "1st Item",
            "content" : "Anoop xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "

};


  }
render(){
  return (
    <div className="col-sm-3 col-md-3 active item">
      <Figure img={this.state.img}/>
      <div className="carousel-slide">
       <Title title={this.state.title}/>
       <Content content={this.state.content}/>
      </div>
    </div>

  );
}
}
