import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImagePopup = this._popupElement.querySelector(".modal__image");
    this._imageDescription = this._popupElement.querySelector(
      ".modal__descriptiion"
    );
  }

  open(name, link) {
    this._cardImagePopup.src = link;
    this._cardImagePopup.alt = name;
    this._imageDescription.textContent = name;
    super.open();
  }
}

export default PopupWithImage;
