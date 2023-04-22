import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const addGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class= "gallery__link" href = "${original}">
    <img class="gallery__image" src = "${preview}" alt = "${description}"/>
    </a></li>`
  )
  .join('');

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', addGallery);
galleryList.setAttribute('style', 'list-style-type:none');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
