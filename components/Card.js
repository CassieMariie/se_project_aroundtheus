export default class Card {
  constructor(data, cardSelector, handleCardImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardImageClick = handleCardImageClick;
  }

  _handleCardLike() {
    this._element.querySelector(".card__like-button") = this._cardLike;
    this._cardLike.toggle("card__like-button_active");
  }

  _handleCardDelete() {
    this._element.querySelector(".card__delete-button") = this._cardDelete;
    this._cardDelete.remove()
  }

  _setEventListeners() {
    this._cardImageElement.addEventListener('click', () => {
      this._handleImageClick(this);
      this._handleCardLike(this);
      this._handleCardDelete(this);
    });
    return this._cardImageElement;
  }
}