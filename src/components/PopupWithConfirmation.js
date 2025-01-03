import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }
  setSubmitFunction(submitFnc) {
    this._submitFunction = submitFnc;
  }
  setEventListeners() {
    super.setEventListeners();
    const confirmButton = this._popupElement.querySelector(
      ".modal__button-save"
    );
    confirmButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._submitFunction();
    });
  }
}
