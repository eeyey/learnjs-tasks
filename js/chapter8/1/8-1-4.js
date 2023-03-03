let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [...this.stomach, food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple
