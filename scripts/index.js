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

const profileEditButton = document.querySelector("#profile-edit-button");
const profileModal = document.querySelector("#profile-modal");
const profileModalClose = document.querySelector("#profile-modal-close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileInputTitle = document.querySelector("#profile-input-title");
const profileInputDescription = document.querySelector(
  "#profile-input-description"
);
const profileEditForm = profileModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__images");

function closePopup() {
  profileModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  cardTitleElement.textContent = cardData.name;

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  return cardElement;
}

profileEditButton.addEventListener("click", () => {
  profileInputTitle.value = profileTitle.textContent;
  profileInputDescription.value = profileDescription.textContent;

  profileModal.classList.add("modal_opened");
});

profileModalClose.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("click", (event) => {
  event.preventDefault();
  profileTitle.textContent = profileInputTitle.value;
  profileDescription.textContent = profileInputDescription.value;
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.prepend(cardElement);
});
