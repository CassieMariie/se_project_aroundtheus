export default class UserInfo {
  constructor({ profileSelector, jobSelector }, profileUrl) {
    this._profileElement = document.querySelector(profileSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._profileUrlElement = document.querySelector(profileUrl);
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

  setUserAvatar(profileUrl) {
    this._profileUrlElement.src = profileUrl;
  }
}
