export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((_items) => {
      this._renderer(_items);
    });
  }

  addItem(element) {
    this._container = append(element);
  }
}
