import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".modal__form");
    this._inputList = this._formElement.querySelectorAll(".modal__input");
    this._submitButton = this._formElement.querySelector(".modal__button-save");
    this._submitButtonContent = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputValue = {};

    this._inputList.forEach((input) => {
      inputValue[input.name] = input.value;
    });
    return inputValue;
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
      this._handleFormSubmit(this._getInputValues());
    });
  }

  setLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._submitButtonContent;
    }
  }
}

export default PopupWithForm;
