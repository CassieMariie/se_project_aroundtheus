export default class Card {
  constructor(data, cardSelector, handleCardImageClick, handleDeleteCard) {
    this._name = data.name;
    this._link = data.link;
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleCardImageClick = handleCardImageClick;
    this._handleDeleteCard = handleDeleteCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImageElement = this._element.querySelector(".card__image");
    const cardTitleElement = this._element.querySelector(".card__title");

    cardTitleElement.textContent = this._name;
    cardImageElement.src = this._link;
    cardImageElement.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardImageClick(this._name, this._link);
      });

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleCardLike();
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleCardDelete();
        this._handleDeleteCard(this._element, this._data.id);
      });
  }

  _handleCardLike() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleCardDelete() {
    this._element.remove();
  }
}
