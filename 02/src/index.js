const data = [
  {
    name: 'Adam',
    age: 28,
  },
  {
    name: 'Ania',
    age: 35,
  },
  {
    name: 'Roman',
    age: 18,
  },
];

const combineAge = (arr) => arr.reduce((acc, item) => acc += item.age, 0);

const container = document.querySelector('#age');
const renderAge = (element) => element.innerHTML = combineAge(data);
renderAge(container);