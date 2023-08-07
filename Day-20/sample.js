var person = {
  name: "John",
  sayHi: function () {
    const greet = () => {
      console.log(this);
    };
    greet();
  },
};

person.sayHi();
