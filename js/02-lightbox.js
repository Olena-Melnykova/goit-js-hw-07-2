import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);


function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) =>{
        return `
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
        title="${description}"/>
        </a> `
    })
    .join("");    
}
 
function onGalleryContainerClick(e) {
    const galleryItem = e.target.classList.contains('gallery__image');
    e.preventDefault();
    if (!galleryItem) {
        return;
    }
}
new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250, });
    
console.log(galleryItems);
    

    





