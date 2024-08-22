// Question 14 : Bind Method Polyfill

let car1 = {
    color: 'Red',
    company: 'Ferrari',
  };
  
  let car2 = {
    color: 'Blue',
    company: 'BMW',
  };
  
  let car3 = {
    color: 'White',
    company: 'Mercedes',
  };
  
  function purchaseCar(currency, price) {
    console.log(
      `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
    );
};

Function.prototype.myBind = function(context = {}, ...args){
  if (typeof this !== "function") {
      throw new Error(this + "cannot be bound as it's not callable")
  }

  context.fn = this;

  return function(...newArgs){
      return context.fn(...args, ...newArgs)
  }
}

const newFunc = purchaseCar.myBind(car1);

console.log(newFunc('₹', '6,00,000'));