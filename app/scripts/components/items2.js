import React from 'react';

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
    <ul className="items" source="./data/basic_carousel.json">{this.state.items.map(this.renderItem)}</ul>
    );
  }

  renderItem(item, index) {
    return <li key={index}><a href="">{item}</a></li>;
  }

}
