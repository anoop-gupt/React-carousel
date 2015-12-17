import React from 'react';
import Item from './items';
import Control from './control';
export default class extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div className="carousel-items-containers">
      <Item/>
      <Control/>
   </div>
   )

  }
}
