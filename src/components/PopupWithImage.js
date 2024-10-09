export default class PopupWithImage {
  constructor({ name, link }, description) {
    this._name = name;
    this._link = link;
    this._description = description;
  }

  open() {
    const cardImagePopup = document.querySelector("#open-image-modal");
    const imageDescription = document.querySelector(".modal__descriptiion");
    cardImagePopup.src = this._link;
    cardImagePopup.alt = this._name;
    imageDescription.textContent = this._description;
    super.open();
  }
}

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
