export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((cards) => {
      this.renderer(cards);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
