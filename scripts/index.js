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
const profileEditForm = document.querySelector("#profile-modal-form");

//Card Elements//
const cardsWrap = document.querySelector(".cards__images");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//New Card Elements//
const addNewCardModal = document.querySelector("#add-card-modal");
const addNewCardForm = addNewCardModal.querySelector("#card-modal-form");
const newCardInputTitle = addNewCardModal.querySelector("#card-input-title");
const newCardInputUrl = addNewCardModal.querySelector("#card-input-url");

//View Image Elements
const openImageModalDescription = document.querySelector(".modal__description");
const openImageModal = document.querySelector("#open-image-modal");
const openCardImage = document.querySelector(".modal__image");

//Buttons//
const profileEditButton = document.querySelector("#profile-edit-button");
const profileModalClose = profileEditModal.querySelector(
  "#profile-modal-close"
);
const addNewCardButton = document.querySelector(".profile__add-button");
const newCardModalClose = addNewCardModal.querySelector("#card-modal-close");
const openImageClose = document.querySelector("#open-image-close");

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
  addNewCardForm.reset();
  closePopup(addNewCardModal);
}

function handleCardImageClick(cardData) {
  openCardImage.src = cardData.link;
  openCardImage.alt = cardData.name;
  openImageModalDescription.textContent = cardData.name;
  openPopup(openImageModal);
}

function handleCloseOverlay(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    const modalOpened = document.querySelector(".modal_opened");
    closePopup(modalOpened);
  }
}

function handleEscOverlay(evt) {
  if (evt.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    if (modalOpened) {
      closePopup(modalOpened);
    }
  }
}

document.addEventListener("keydown", handleEscOverlay);

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
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    handleCardImageClick(cardData);
  });

  cardTitleElement.textContent = cardData.name;
  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  return cardElement;
}

//Event Listeners//
profileEditButton.addEventListener("click", () => {
  profileInputName.value = profileTitle.textContent;
  profileInputDescription.value = profileDescription.textContent;
  openPopup(profileEditModal);
});
profileModalClose.addEventListener("click", () => closePopup(profileEditModal));
profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = profileInputName.value;
  profileDescription.textContent = profileInputDescription.value;
  closePopup(profileEditModal);
});

addNewCardForm.addEventListener("submit", handleAddCardFormSubmit);
addNewCardButton.addEventListener("click", () => {
  openPopup(addNewCardModal);
});
newCardModalClose.addEventListener("click", () => closePopup(addNewCardModal));

openImageClose.addEventListener("click", () => {
  closePopup(openImageModal);
});

profileEditModal.addEventListener("click", handleCloseOverlay);
addNewCardModal.addEventListener("click", handleCloseOverlay);
openImageModal.addEventListener("click", handleCloseOverlay);

//For Each//
initialCards.forEach((cardData) => {
  renderCard(cardData);
});
