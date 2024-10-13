import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";
import * as constants from "../utils/constants.js";
import UserInfo from "../components/Userinfo.js";

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

//UserInfo JS//
const userInfo = new UserInfo({
  profileSelector: ".profile__title",
  jobSelector: ".profile__description",
});

//PopupWithImage JS//
const popupImage = new PopupWithImage({ popupSelector: "#open-image-modal" });
popupImage.setEventListeners();

//PopupWithForms JS//
const newCardPopup = new PopupWithForms(
  { popupSelector: "#add-card-modal" },
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

const profileEditPopup = new PopupWithForms(
  { popupSelector: "#profile-edit-modal" },
  handleEditSubmit
);
profileEditPopup.setEventListeners();

//Section JS//
const sectionCards = new Section(
  {
    items: constants.initialCards,
    renderer: (cardData) => {
      renderCard(cardData);
    },
  },
  ".cards__images"
);
sectionCards.renderItems();

//Functions//
function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardImageClick);
  return card.generateCard();
}

function renderCard(cardData) {
  const cardList = document.querySelector(".cards__images");
  cardList.prepend(createCard(cardData));
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = document.querySelector("#card-input-title").value.trim();
  const link = document.querySelector("#card-input-url").value.trim();
  const inputData = { name, link };
  renderCard(inputData);
  addCardFormValidator.disableSubmitButton();
  newCardPopup.close();
}

function handleEditSubmit(evt) {
  evt.preventDefault();
  const title = document.querySelector("#profile-input-name").value.trim();
  const description = document
    .querySelector("#profile-input-description")
    .value.trim();
  userInfo.setUserInfo({ title, description });
  profileEditPopup.close();
}

function handleCardImageClick(name, link) {
  popupImage.open(name, link);
}

//Event Listeners//
constants.profileEditButton.addEventListener("click", () => {
  const { title, description } = userInfo.getUserInfo();
  constants.profileInputName.value = title;
  constants.profileInputDescription.value = description;
  profileEditPopup.open();
});
constants.profileModalClose.addEventListener("click", () => {
  profileEditPopup.close();
});
constants.addNewCardButton.addEventListener("click", () => {
  newCardPopup.open();
});
constants.newCardModalClose.addEventListener("click", () => {
  newCardPopup.close();
});
constants.openImageClose.addEventListener("click", () => {
  popupImage.close();
});

//EnableValidation
const editProfileFormValidator = new FormValidator(settings, profileEditForm);
const addCardFormValidator = new FormValidator(settings, addNewCardForm);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
