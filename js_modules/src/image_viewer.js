import '../styles/image_viewer.css';
import '../styles/test.css';

const image = document.createElement('img');
// image.src = 'http://via.placeholder.com/400x400';
image.src = 'https://placeimg.com/400/400/any';
document.body.appendChild(image);