import small from '../assets/small.jpg';

import '../styles/image_viewer.css';
import '../styles/test.css';

export default () => {
    const image = document.createElement('img');
    image.src = small;
    document.body.appendChild(image);
}

// image.src = 'http://via.placeholder.com/400x400';
// image.src = 'https://placeimg.com/400/400/any';

// import big from '../assets/big.jpg';
// const bigImage = document.createElement('img');
// bigImage.src = big;
// document.body.appendChild(bigImage);