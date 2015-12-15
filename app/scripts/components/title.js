import React from 'react';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ['Dynamic Title']
    };
  }
  render(){
    return (
          <h2>{this.state.title}</h2>
    );
  }
}
