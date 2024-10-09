import Popup from "./Popup.js";

class PopupWithForms extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupSelector.querySelector("#add-card-modal");
  }

  _getInputValues() {}

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
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
