import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";

const initialCards = [
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

//Components JS//
console.log(initialCards);
const openCardImage = document.querySelector(".modal__image");

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const card = new Card(cardData, "#card-template", handleCardImageClick);

//Validator JS//
const profileEditForm = document.querySelector("#profile-modal-form");
const addNewCardForm = document.querySelector("#card-modal-form");

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button-save",
  inactiveButtonClass: "modal__button-save_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

//Popup JS//
const myPopup = new Popup(".modal");
const imagePopup = new Popup("#open-image-modal");
const addCardPopup = new Popup("#add-card-modal");
const editProfilePopup = new Popup("#profile-edit-modal");

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();

//Profile Elements//
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileInputName = document.querySelector("#profile-input-name");
const profileInputDescription = document.querySelector(
  "#profile-input-description"
);

//Card Elements//
const cardsWrap = document.querySelector(".cards__images");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//New Card Elements//
const addNewCardModal = document.querySelector("#add-card-modal");
const newCardInputTitle = addNewCardModal.querySelector("#card-input-title");
const newCardInputUrl = addNewCardModal.querySelector("#card-input-url");

//View Image Elements
const openImageModalDescription = document.querySelector(".modal__description");
const openImageModal = document.querySelector("#open-image-modal");

//Buttons//
const profileEditButton = document.querySelector("#profile-edit-button");
const profileModalClose = profileEditModal.querySelector(
  "#profile-modal-close"
);
const addNewCardButton = document.querySelector(".profile__add-button");
const newCardModalClose = addNewCardModal.querySelector("#card-modal-close");
const openImageClose = document.querySelector("#open-image-close");

//Functions//
function close() {
  myPopup.close();
}

function open() {
  myPopup.open();
}

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardImageClick);
  return card.generateCard();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardsWrap.prepend(cardElement);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = newCardInputTitle.value.trim();
  const link = newCardInputUrl.value.trim();

  if (name && link) {
    renderCard({ name, link }, cardsWrap);
    addCardPopup.close();
    addCardFormValidator.disableSubmitButton();
  }
}

function handleCardImageClick(name, link) {
  openCardImage.src = link;
  openCardImage.alt = name;
  openImageModalDescription.textContent = name;
  imagePopup.open();
}

//Card Functions//

function getCardElement(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");

  cardTitleElement.textContent = card.name;
  cardImageElement.src = card.link;
  cardImageElement.alt = card.name;
  return cardElement;
}

//Event Listeners//
profileEditButton.addEventListener("click", () => {
  profileInputName.value = profileTitle.textContent;
  profileInputDescription.value = profileDescription.textContent;
  editProfilePopup.open();
});

profileModalClose.addEventListener("click", () => {
  editProfilePopup.close();
});
profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = profileInputName.value;
  profileDescription.textContent = profileInputDescription.value;
  editProfilePopup.close();
});

addNewCardButton.addEventListener("click", () => {
  addCardPopup.open();
});
newCardModalClose.addEventListener("click", () => {
  addCardPopup.close();
});

openImageClose.addEventListener("click", () => {
  imagePopup.close();
});

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

//EnableValidation
const editProfileFormValidator = new FormValidator(settings, profileEditForm);
const addCardFormValidator = new FormValidator(settings, addNewCardForm);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

//Section JS//
const SectionCards = new Section(
  {
    items: initialCards,
    renderer: cardData,
  },
  ".card"
);

//PopupWithImage JS//
const popupImage = new PopupWithImage("#open-image-modal");

//PopupWithForms JS//
const newCardPopup = new PopupWithForms(
  "#add-card-modal",
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();
