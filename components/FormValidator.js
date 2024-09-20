export default class FormValidator {
  constructor(settings, form) {
    this._selector = settings.selector;
    this._classes = settings.classes;
    this._element = form.element;
  }

  _checkFormValidation(inputEl) {
    if (!inputEl.validity.valid) {
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
