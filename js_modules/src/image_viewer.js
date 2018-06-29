import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../styles/image_viewer.css';
import '../styles/test.css';

const image = document.createElement('img');
// image.src = 'http://via.placeholder.com/400x400';
// image.src = 'https://placeimg.com/400/400/any';
image.src = small;
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);