import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";
import {
  initialCards,
  profileEditButton,
  profileModalClose,
  addNewCardButton,
  newCardModalClose,
  openImageClose,
  cardsWrap,
  openImageModalDescription,
} from "../utils/constants.js";
import UserInfo from "../components/Userinfo.js";

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

//UserInfo JS//
const userInfo = new UserInfo(".profile__title", ".profile__description");

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
