import Popup from "./Popup.js";

export class PopupWithForms extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".modal__form");
    this._inputList = this._formElement.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    this._inputValue = {};

    this._inputList.forEach((input) => {
      this._inputValue[input.name] = input.value;
    });

    return this._inputValue;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForms;
