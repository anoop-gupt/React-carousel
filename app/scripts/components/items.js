import React from 'react';
import Figure from './figure';
import Title from './title';
import Content from './content';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

          "items" : [
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_1.jpg",
            "alt" : "Alt text for image 1" ,
            "title" : "1st Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_2.jpg",
            "alt" : "Alt text for image 2" ,
            "title" : "2nd Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_3.jpg",
            "alt" : "Alt text for image 3" ,
            "title" : "3rd Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_4.jpg",
            "alt" : "Alt text for image 4" ,
            "title" : "4th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_5.jpg",
            "alt" : "Alt text for image 5" ,
            "title" : "5th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_6.jpg",
            "alt" : "Alt text for image 6" ,
            "title" : "6th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_7.jpg",
            "alt" : "Alt text for image 7" ,
            "title" : "7th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_8.jpg",
            "alt" : "Alt text for image 8" ,
            "title" : "8th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_9.jpg",
            "alt" : "Alt text for image 1" ,
            "title" : "9th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_10.jpg",
            "alt" : "Alt text for image 10" ,
            "title" : "10th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_11.jpg",
            "alt" : "Alt text for image 11" ,
            "title" : "11th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          },
          {
            "url" : "instructions.html",
            "img" : "./images/test_carousel_image_12.jpg",
            "alt" : "Alt text for image 12" ,
            "title" : "12th Item",
            "content" : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "


          }
      ]
      }
    }



render(){
    return (

         <div id="carousel-items-containers">
         <ul>
         {this.state.items.map(this.renderItem)}
         </ul>
         </div>

    );
}

renderItem(item,index){

     return (
      <li key={index} class="item">
        <Figure img={item.img} alt={item.alt} />
        <div className="media-contianer">
         <Title title={item.title}/>
         <Content content={item.content}/>
        </div>
      </li>
      )

  }

}
