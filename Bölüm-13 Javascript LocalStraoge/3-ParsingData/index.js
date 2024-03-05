
//LocalStraoge string set edebilriiz. Array'yani objemizi stringe çevirmemiz gerekir
const variable = [
  { hobby: 'swimming', person: 'Baturhan' },
  { hobby: 'playing card', person: 'Baturhan' },
  { hobby: 'take a trip', person: 'Baturhan' },
];

console.log(variable);
console.log(JSON.stringify(variable));
//LocalStorage set edebilmek için stringe çevirdik.
localStorage.setItem('todos', JSON.stringify(variable));

//Bir sabite atadaık.
const storedData = localStorage.getItem('todos');

//Ekrana basabilmek için Json formatına parse ettik.
console.log(JSON.parse(storedData));
