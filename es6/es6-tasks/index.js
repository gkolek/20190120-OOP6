/*
Task 1
 */
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  })
}

//5 5 5 5 5

/*
Task 2
 */
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  })
}

//0 1 2 3 4

/*
Task 3
 */

const person = {
  name: 'Maciek',
  color: 'blue'
};

const text = `I'm ${person.name}. I like ${person.color}`;
console.log(text);

/*
Task 4
 */

const myCounter = {
  counter: 0,
  start: function() {
    setInterval(() => {
      this.counter += 1;
      console.log(this.counter);
    }, 1000)
  }
};

myCounter.start();
