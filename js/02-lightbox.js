import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const galleryList = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (acc += `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/></a></div>`);
  },
  ""
);
console.log(galleryList);
galleryBox.insertAdjacentHTML("beforeend", galleryList);

const instance = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const refs = {
//   galleryList: document.querySelector(".gallery"),
// };

// const gallerySettingsObject = {
//   captionsData: "alt",
//   captionDelay: 250,
// };

// const makeGalleryMarkup = () => {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}"/>
// </a>`;
//     })
//     .join("");
// };

// const render = () => {
//   refs.galleryList.innerHTML = makeGalleryMarkup();
// };

// render();

// let gallery = new SimpleLightbox(".gallery a", gallerySettingsObject);
