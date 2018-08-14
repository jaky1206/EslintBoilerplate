const bar = 10;

const foo = bar * 10;

document.write(foo);

const work = new Promise((resolve, reject) => {
  resolve('data');
});

work.then((data) => {
  console.log(data);
});
