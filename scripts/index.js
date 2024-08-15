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

console.log(initialCards);

//Profile Elements//
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileInputName = document.querySelector("#profile-input-name");
const profileInputDescription = document.querySelector(
  "#profile-input-description"
);
const profileEditForm = profileEditModal.querySelector("#profile-modal-form");

//Card Elements//
const cardsWrap = document.querySelector(".cards__images");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const openImageModal = document.querySelector("#open-image-modal");
const openImageClose = document.querySelector("#open-image-close");
const openCardImage = document.querySelector("#open-card-image");

//New Card Elements//
const addNewCardModal = document.querySelector("#add-card-modal");
const addNewCardForm = addNewCardModal.querySelector("#card-modal-form");
const newCardInputTitle = addNewCardModal.querySelector("#card-input-title");
const newCardInputUrl = addNewCardModal.querySelector("#card-input-url");

//Buttons//
const profileEditButton = document.querySelector("#profile-edit-button");
const profileModalClose = profileEditModal.querySelector(
  "#profile-modal-close"
);
const addNewCardButton = document.querySelector(".profile__add-button");
const newCardModalClose = addNewCardModal.querySelector("#card-modal-close");

//Functions//
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardsWrap.prepend(cardElement);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = newCardInputTitle.value;
  const link = newCardInputUrl.value;
  renderCard({ name, link }, cardsWrap);
  closePopup(addNewCardModal);
}

function handleCardImageClick(evt) {
  openCardImage.src = cardData.link;
  openPopup(openImageModal);
}

//Card Functions//
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove(".card__image");
  });

  //cardImageElement.addEventListener("click", () => openPopup(openImageModal));
  cardImageElement.addEventListener("click", handleCardImageClick);
  openImageClose.addEventListener("click", () => closePopup(openImageModal));

  cardTitleElement.textContent = cardData.name;
  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  return cardElement;
}

//Profile Event Listeners//
profileEditButton.addEventListener("click", () => {
  profileInputName.value = profileTitle.textContent;
  profileInputDescription.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});
profileModalClose.addEventListener("click", () => closePopup(profileEditModal));
profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = profileInputName.value;
  profileDescription.textContent = profileInputDescription.value;
  closePopup(profileEditModal);
});

//New Card Event Listeners//
addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);
addNewCardButton.addEventListener("click", () => {
  addNewCardModal.classList.add("modal_opened");
});
newCardModalClose.addEventListener("click", () => closePopup(addNewCardModal));
addNewCardForm.addEventListener("submit", () => {
  closePopup(addNewCardModal);
});

//Open Image//

//For Each//
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardsWrap.prepend(cardElement);
});
