
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel';

window.React = React;
const carouselNode = document.getElementById('carousel');

ReactDOM.render(<Carousel/>, carouselNode);

