export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button-save",
  inactiveButtonClass: "modal__button-save_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

//Profile Elements//
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileInputName = document.querySelector("#profile-input-name");
export const profileInputDescription = document.querySelector(
  "#profile-input-description"
);
export const profileImage = document.querySelector(".profile__image");
export const profilePicUrl = document.querySelector("#profile-input-url");

//Card Elements//
export const cardsWrap = document.querySelector(".cards__images");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const cardDelete = document.querySelectorAll(".card__delete-button");

//New Card Elements//
export const addNewCardModal = document.querySelector("#add-card-modal");
export const newCardInputTitle =
  addNewCardModal.querySelector("#card-input-title");
export const newCardInputUrl = addNewCardModal.querySelector("#card-input-url");

//View Image Elements
export const openImageModalDescription = document.querySelector(
  ".modal__description"
);
export const openImageModal = document.querySelector("#open-image-modal");

//Buttons//
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileModalClose = profileEditModal.querySelector(
  "#profile-modal-close"
);
export const addNewCardButton = document.querySelector(".profile__add-button");
export const newCardModalClose =
  addNewCardModal.querySelector("#card-modal-close");
export const openImageClose = document.querySelector("#open-image-close");
export const deleteImageClose = document.querySelector("#delete-image-close");
export const editProfilePicClose = document.querySelector(
  "#edit-picture-close"
);
