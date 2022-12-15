import { galleryItems } from "./gallery-items.js";
// Change code below this line
const mainGallery = document.querySelector(".gallery");

const galleryElements = galleryItems
  .map(
    (elem) =>
      `<div class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" alt="${elem.description}" data-source="${elem.original}"/></a></div>`
  )
  .join("");

mainGallery.insertAdjacentHTML("beforeend", galleryElements);
mainGallery.addEventListener("click", openImage);

function openImage(event) {
  event.preventDefault();
  const currentImg = event.target.nodeName === "IMG";
  if (!currentImg) {
    return;
  }

  const instance = basicLightbox.create(
    `<div class="modal">
        <img src="${event.target.dataset.source}" width="1280" height="auto">
    </div>`,
    // options
    {
      onShow: (instance) => {
        instance.element().querySelector("img").onclick = instance.close;
        window.addEventListener("keydown", onEscClose);
        console.log("addEventListener");
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscClose);
        console.log("removeEventListener");
      },
    }
  );
  instance.show();
  function onEscClose(event) {
    if (event.key === "Escape") {
      instance.close();
      return;
    }
  }
}

// const options = {
//   onShow: (instance) => {
//     instance.element().querySelector("img").onclick = instance.close;
//     window.addEventListener("keydown", onEscClose);
//     console.log("addEventListener");
//   },
//   onClose: () => {
//     window.removeEventListener("keydown", onEscClose);
//     console.log("removeEventListener");
//   },
// };

// mainGallery.addEventListener("click", onImageClick);

// function onImageClick(evetn) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
// }

// const instanceSettings = basicLightbox.create(html, {
//   onShow: (instance) => console.log("onShow", instance),
//   onClose: (instance) => console.log("onClose", instance),
// });

// instance.show((instance) => console.log("finished show()", instance));

// setTimeout(() => {
//   instance.close((instance) => console.log("finished close()", instance));
// }, 3000);

// 1.Создание и рендер разметки по массиву данных galleryItems и
// предоставленному шаблону элемента галереи.
// 2.Реализация делегирования на div.gallery и получение url
// большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального
// окна basicLightbox.Используй CDN сервис jsdelivr и добавь в
// проект ссылки на минифицированные(.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента < img > в модальном окне
// перед открытием.Используй готовую разметку модального окна с
// изображением из примеров библиотеки basicLightbox.
// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const instanceSettingsObject = {
//   onShow: (instance) => {
//     refs.body.addEventListener("keydown", onEscModalClose);
//     refs.modal.addEventListener("click", onClickModalClose);
//   },
//   onClose: (instance) => {
//     refs.body.removeEventListener("keydown", onEscModalClose);
//     refs.modal.removeEventListener("click", onClickModalClose);
//   },
// };

// const instance = basicLightbox.create("", instanceSettingsObject);

// const refs = {
//   galleryList: document.querySelector(".gallery"),
//   body: document.querySelector("body"),
//   modal: instance.element(),
// };

// const makeGalleryMarkup = () => {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
//     })
//     .join("");
// };

// const render = () => {
//   refs.galleryList.innerHTML = makeGalleryMarkup();
// };

// const onEscModalClose = (e) => {
//   if (e.key === "Escape") {
//     instance.close();
//   }
// };

// const onClickModalClose = (e) => {
//   instance.close();
// };

// const handleClick = (e) => {
//   e.preventDefault();

//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   refs.modal.innerHTML = `<img
//         src="${e.target.dataset.source}"
//         alt="${e.target.alt}"/>`;

//   instance.show();
// };

// render();

// refs.galleryList.addEventListener("click", handleClick);
// refs.galleryList.addEventListener("keydown", onEscmodalClose);
