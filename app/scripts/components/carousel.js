import React from 'react';
import Item from './items';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Image1',
        'Image2',
        'Image3',
        'Image4'
      ]
    };
  }

  render() {
    return (
    <div>
    <Item/>
    <div className="controls">
      <ul>
       <li><a className="nav" id="leftNav" href="#"></a></li>
        <li><ul className="buttons">{this.state.items.map(this.renderBullet)}</ul></li>
        <li><a className="nav" id="rightNav" href="#"></a></li>
        </ul>
    </div>
    </div>

    );
  }


  renderBullet(item, index) {
    return <li className="buttons" key={index}><a href="">{index}</a></li>;
  }
}
