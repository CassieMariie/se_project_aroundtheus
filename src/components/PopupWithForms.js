import Popup from "./Popup.js";

export class PopupWithForms extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupSelector.querySelector(".modal__form");
  }

  _getInputValues() {}

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}

export default PopupWithForms;

/*Class PopupWithForms

Child of popup

Two arguments needed:
-Popup selector
-Callback that will fire when the submit button is pressed

Private method called _getInputValues(),
this will get all input data and return it as an object (new card)

Overrides setEventListeners() parent method
Should add event listener submit and call setEventListeners()
*/
