"use strict"

class ExtendedClock extends Clock {
  constructor( obj ) {
    super(obj);
    this.precision = obj.precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
