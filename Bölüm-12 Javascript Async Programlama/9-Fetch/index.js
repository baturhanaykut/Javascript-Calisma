// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json()) //Geriye Promis döndürdü.
//   .then((json) => console.log(json));

fetch('example/can.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
