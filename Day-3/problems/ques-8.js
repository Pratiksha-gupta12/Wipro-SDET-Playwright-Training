const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];

let titles = products.map(product => product.title);

console.log(titles);