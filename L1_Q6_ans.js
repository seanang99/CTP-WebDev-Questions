/**
 * Topic: Objects
 * Challenge: Easy
 * Question 6
 */
class Cylinder {
  constructor(c_height, c_diameter) {
    this.c_height = c_height;
    this.c_diameter = c_diameter;
  }

  get volume() {
    return this.calcVolume;
  }

  calcVolume() {
    const radius = this.c_diameter / 2;
    return this.c_height * Math.PI * radius ** 2;
  }
}

let cylc = new Cylinder(7, 4);
console.log("Volume = ", cylc.volume().toFixed(3));
