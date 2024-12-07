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
import Popup from "../components/Popup.js";

//Validator JS//
const profileEditForm = document.querySelector("#profile-modal-form");
const addNewCardForm = document.querySelector("#card-modal-form");
const updateAvatarImg = document.querySelector("#profile-picture-modal");

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
    items: [],
    renderer: (cards) => {
      renderCard(cards);
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
    handleDeleteCard,
    handleLikeCard
  );
  return card.generateCard();
}

function renderCard(cardData) {
  const cardElement = createCard(cardData);
  sectionCards.addItem(cardElement);
}

function handleAddCardFormSubmit(inputData) {
  const { card__title, card__url } = inputData;

  api
    .createCard({ name: card__title, link: card__url })
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

function handleEditSubmit(name, description) {
  api.updateProfile({ name, description }).then(() => {
    userInfo
      .setUserInfo({
        name: profile__name,
        description: profile__description,
      })
      .catch((err) => {
        console.error(err);
      });
  });
  /* userInfo.setUserInfo({
    title: inputData.profile__name,
    description: inputData.profile__description,
  });*/

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

function handleEditPrfilePic(url) {
  api
    .updateAvatar(url.profile__url)
    .then((users) => userInfo.getUserInfo(users.avatar))
    .catch((err) => console.error(err))
    .finally(() => profilePicPopup.close());
  profilePicPopup.open();
}

function handleLikeCard(card) {
  api
    .likeCard(card.getId(), card.isLiked())
    .then((res) => {
      card.setIsLiked(res.isLiked);
    })
    .catch((err) => console.error(err));
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

constants.deleteImageOverlay.addEventListener("click", () => {
  modalWithConfirm.close();
});

//EnableValidation
const editProfileFormValidator = new FormValidator(
  constants.settings,
  profileEditForm
);
const addCardFormValidator = new FormValidator(
  constants.settings,
  addNewCardForm
);
const updateAvatarFormValidator = new FormValidator(
  constants.settings,
  updateAvatarImg
);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
updateAvatarFormValidator.enableValidation();
