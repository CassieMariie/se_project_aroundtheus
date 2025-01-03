export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardImageClick,
    handleDeleteCard,
    handleLikeCard
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleCardImageClick = handleCardImageClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
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
    this.renderLike();

    const cardImageElement = this._element.querySelector(".card__image");
    const cardTitleElement = this._element.querySelector(".card__title");

    cardTitleElement.textContent = this._name;
    cardImageElement.src = this._link;
    cardImageElement.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardImageClick(this._name, this._link);
      });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeCard(this);
    });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard(this, this._id);
      });
  }

  handleCardDelete() {
    this._element.remove();
  }

  getId() {
    return this._id;
  }

  isLiked() {
    return this._isLiked;
  }

  renderLike() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  setIsLiked(isLiked) {
    this._isLiked = isLiked;
    this.renderLike();
  }
}
