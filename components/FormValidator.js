/**export default class FormValidator {
  constructor(settings, form) {
    this._selector = settings.selector;
    this._classes = settings.classes;
    this._element = form.element;
  }

  _enableValidation(addCardForm, editProfileForm) {
    if (!addCardForm) {
      showInputError(formEl, inputEl, options);
    } else {
      hideInputError(formEl, inputEl, options);
    }
  }

  showInputError() {
    const errorMessageEl = this.form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this.inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this.errorClass);
  }

  hideInputError() {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this.inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this.errorClass);
  }

  disableSubmitButton() {}
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button-save",
  inactiveButtonClass: "modal__button-save_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};**/
