import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return (
        <figure>
          <img src={this.props.img} alt={this.props.alt}/>
        </figure>
    );
  }
}
