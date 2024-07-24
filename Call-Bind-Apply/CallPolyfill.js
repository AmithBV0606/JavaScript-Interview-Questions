// Question 12 : Call Method Polyfill

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

Function.prototype.myCall = function(context = {}, ...args){
    if (typeof this !== "function") {
        throw new Error(this + "It's not callable")
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car1, '₹', '60,00,000');