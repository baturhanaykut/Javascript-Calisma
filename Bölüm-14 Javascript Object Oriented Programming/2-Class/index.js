class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    return `${this.username} giriş yaptı`;
  }

  logout() {
    return `${this.username} çıkış yaptı`;
  }
}

const userOne = new User('Baturhan', 'baturhan@hotmail.com');
const userTwo = new User('Gökçe', 'gokce@hotmail.com');
console.log(userOne.login(), userTwo.logout());
