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

/*items property 

    contains the data of the cards that
    first show up when the project is loaded in the web browser
    aka the InitialCards contained in index.js*/
//
/*renderer property

    Property is going to contain the functions that create
    and add a new card to the web browser, adding a new image,
    adding it to the DOM

Its second constructor parameter should be a CSS class 
selector where you'll add the card elements.
//
It has a public method named renderItems() that renders 
all elements on the page. It should iterate through the 
items array and call the renderer() function on each item. 
This method should be called once on page load.
//
It has a public method named addItem() that takes a DOM 
element and adds it to the container. This method should be 
called when adding an individual card to the DOM.*/
