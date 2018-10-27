function produceDrivingRange(range){
  return function(start, end){
    const startTrip = start.replace(`th`,``)
    const endTrip = end.replace(`th`, ``)
    const tripLenght = Math.abs(startTrip - endTrip)
    if (tripLenght <= range){
      return `within range by ${Math.abs(tripLenght - range)}`
    } else {
      return `${Math.abs(tripLenght - range)} blocks out of range`
    }
  }
};


function produceTipCalculator(float){
  return function(fare){
    return fare * float
  }
};

function createDriver() {
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
};
