//4) write a class to calculate uber price.

class Uber_Price {
    constructor(distance) {
      this.distance = distance;

    }
    getPrice() {
      return (this.distance ) *30;
    }
  }

  let uber = new Uber_Price(20);
  console.log(uber.getPrice());