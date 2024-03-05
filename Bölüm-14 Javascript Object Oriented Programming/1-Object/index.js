const userOne = {
  username: 'Baturhan',
  email: 'baturhan@hotmail.com',
  login() {
    console.log('Baturhan Aykut giriş yaptı');
  },
  logout() {
    console.log('Baturhan Aykut çıkış yaptı');
  },
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
  username: 'Osman',
  email: 'osss@hotmail.com',
  login() {
    console.log('Osman giriş yaptı');
  },
  logout() {
    console.log('Osman çıkış yaptı');
  },
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

const userThree = new User('Nida', 'nida@hotmail.com');
