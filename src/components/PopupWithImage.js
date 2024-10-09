import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._cardImagePopup = document.querySelector("#open-image-modal");
    this._imageDescription = document.querySelector(".modal__descriptiion");
  }

  open(name, link) {
    this._cardImagePopup.src = link;
    this._cardImagePopup.alt = name;
    this._imageDescription.textContent = name;
    super.open();
  }
}

export default PopupWithImage;

/*Class PopupWithImage

Child of popup

Will need to override parent open() method

open() method will need to accept name and link as arguments,
and add an image to the popup and the corresponding image src attribute 
along with a caption for the image


"The open() method of the PopupWithImage class will need to accept the name 
and link of the card as arguments and add an image to the popup and the 
corresponding image src attribute along with a caption for the image. 
This method should be called in your image click handler in index.js."

Call in index.js clickhandler
*/
