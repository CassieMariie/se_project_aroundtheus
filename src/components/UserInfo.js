export default class UserInfo {
  constructor({ profileSelector, jobSelector }) {
    this._profileElement = document.querySelector(profileSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      title: this._profileElement.textContent,
      description: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._profileElement.textContent = name;
    this._jobElement.textContent = description;
  }
}
