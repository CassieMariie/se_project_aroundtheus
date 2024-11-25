import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import * as constants from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import { data } from "autoprefixer";

//Validator JS//
const profileEditForm = document.querySelector("#profile-modal-form");
const addNewCardForm = document.querySelector("#card-modal-form");

//Api JS//
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "1abc7623-f84f-4d03-9121-da2d9a4553b4",
    "Content-type": "application/json",
  },
});

//UserInfo JS//
const userInfo = new UserInfo({
  profileSelector: ".profile__title",
  jobSelector: ".profile__description",
});

//PopupWithImage JS//
const popupImage = new PopupWithImage({ popupSelector: "#open-image-modal" });
popupImage.setEventListeners();

//PopupWithForms JS//
const newCardPopup = new PopupWithForm(
  { popupSelector: "#add-card-modal" },
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

const profileEditPopup = new PopupWithForm(
  { popupSelector: "#profile-edit-modal" },
  handleEditSubmit
);
profileEditPopup.setEventListeners();

const profilePicPopup = new PopupWithForm(
  { popupSelector: "#profile-picture-modal" },
  handleEditPrfilePic
);
profilePicPopup.setEventListeners();

//PopupWithConfirmation
const modalWithConfirm = new PopupWithConfirmation("#delete-image-modal");
document.addEventListener("DOMContentLoaded", () => {
  modalWithConfirm.setEventListeners();
});

//Section JS//
const sectionCards = new Section(
  {
    //items: constants.initialCards,
    renderer: (cards) => {
      renderCard(api.getInitialCards(cards));
    },
  },
  ".cards__images"
);

api
  .getInitialCards()
  .then((cards) => {
    console.log(cards);
    sectionCards.renderItems(cards);
  })
  .catch((err) => {
    console.error(err);
  });

//Functions//
function createCard(cards) {
  console.log(createCard);
  const card = new Card(
    cards,
    "#card-template",
    handleCardImageClick,
    handleDeleteCard
  );
  return card.generateCard();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  sectionCards.addItem(cardElement);
}

/*function handleAddCardFormSubmit(inputData) {
  api.getInitialCards().then((card) => {
    sectionCards.renderItems(card);
  });
  const { card__title, card__url } = inputData;
  renderCard({ name: card__title, link: card__url });
  addCardFormValidator.disableSubmitButton();
  newCardPopup.close();
  addNewCardForm.reset();
} delete later*/

function handleAddCardFormSubmit(inputData) {
  const { card_title, card_url } = inputData;

  api
    .createCard({ name: card_title, link: card_url })
    .then((newCard) => {
      renderCard(newCard);
      console.log(newCard);
      addCardFormValidator.disableSubmitButton();
      newCardPopup.close();
      addNewCardForm.reset();
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleEditSubmit(inputData) {
  userInfo.setUserInfo({
    title: inputData.profile__name,
    description: inputData.profile__description,
  });
  profileEditPopup.close();
}

function handleCardImageClick(name, link) {
  popupImage.open(name, link);
}

function handleDeleteCard(card, cardId) {
  modalWithConfirm.setSubmitFunction(() => {
    api
      .deleteCard(cardId)
      .then(() => {
        card._handleCardDelete();
        modalWithConfirm.close();
      })
      .catch((err) => console.error(err));
  });
  modalWithConfirm.open();
}

function handleEditPrfilePic(inputValues) {
  api
    .updateAvatar(inputValues)
    .then((user) => userInfo.setAvatar(user.avatar))
    .catch((err) => console.error(err))
    .finally(() => profilePicPopup.close());
  profilePicPopup.open();
}

//Event Listeners//
constants.profileEditButton.addEventListener("click", () => {
  const { title, description } = userInfo.getUserInfo();
  constants.profileInputName.value = title;
  constants.profileInputDescription.value = description;
  profileEditPopup.open();
});

constants.addNewCardButton.addEventListener("click", () => {
  newCardPopup.open();
});

constants.profileImage.addEventListener("click", () => {
  profilePicPopup.open();
});

constants.deleteImageClose.addEventListener("click", () => {
  modalWithConfirm.close();
});

/*constants.editProfilePicClose.addEventListener("click", () => {
  editProfilePic.close();
});*/

//EnableValidation
const editProfileFormValidator = new FormValidator(
  constants.settings,
  profileEditForm
);
const addCardFormValidator = new FormValidator(
  constants.settings,
  addNewCardForm
);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
