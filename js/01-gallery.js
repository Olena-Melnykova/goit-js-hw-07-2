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
        <div class ="gallery__item">
        <a class = "gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `
    })
    .join("");    
}


function onGalleryContainerClick(e){
    e.preventDefault();
    if(!e.target.classList.contains("gallery__image")){
return;
    } else {
        const instance = basicLightbox.create(`<img src="${e.target.dataset.source}"/>`,{onShow:() => {
            {window.addEventListener("keydown", onEscPress)}
        }
    });
        instance.show();

        function onEscPress(e) {
            if (e.code === "Escape") {
                instance.close();
                window.removeEventListener("keydown", onEscPress);
            }
    }
    }
}
















