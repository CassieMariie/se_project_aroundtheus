import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }
  setSubmitFunction(submitFnc) {
    this._submitFunction = submitFnc;
  }
  setEventListeners() {
    const confirmButton = this._popupElement.querySelector(
      ".modal__button-submit"
    );
    confirmButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._submitFunction();
    });
  }
}
