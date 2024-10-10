export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    if (!this._popupElement) {
      throw new Error(`Element not found with selector: ${popupSelector}`);
    }
  }

  open() {
    const modal = this._popupElement;
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscape.bind(this));
  }

  close() {
    const modal = this._popupElement;
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscape.bind(this));
  }

  _handleEscape(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const modal = this._popupElement;
    modal.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
