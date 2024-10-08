export default class Popup {
  constructor({ popupSelector }, handleCardImageClick) {
    this._popupSelector = popupSelector;
    this._handleCardImageClick = handleCardImageClick;
  }

  open() {
    const modal = document.querySelector(this._popupSelector);
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscape.bind(this));
    //should be called in the preexisting event handlers in index.js
  }

  close() {
    const modal = document.querySelector(this._popupSelector);
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscape.bind(this));
  }

  _handleEscape() {
    if (evt.key === "Escape") {
      this.close();
    }
    //stores the logic for closing the popup by pressing the Esc key.
  }

  setEventListeners() {
    const modal = document.querySelector(this._popupSelector);
    modal.addEventListener("click", (evt) => {
      if (evt.target === modal) {
        this.close();
      }
    });
    //adds a click event listener
    //The modal window should also close when users click on the shaded area around the form.
  }
}

/*Popup Class

Going to contain the functions that will close
and open a popup, the basic functions of opening
and closing a modal*/
