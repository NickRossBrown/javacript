export class Pandemic {
  constructor (name) {
    this.name = name;
    this.outbreakCounter = 1;
    this.cities = { Portland :10, Beaverton:10, Bend:10, Corvallis:10, Salem:10}
  }

  setOutbreak() {
    setInterval(() => {
      this.outbreakCounter++;
    }, 30000)
  }

  // setOutbreak() {
  //   setInterval(() => {
  //     this.cities.Portland -=3;
  //   })
  // }

  cureOutbreak() {
    this.outbreakCounter--
  }

  didTheOutbreakTakeOver() {
    if (this.outbreakCounter <  5) {
      return false;
    } else {
      return true;
    }
  }

  getCitiesStatus() {
    let i = 0;
    for (; i < 3 ;) {


    }
    for (let key in this.cities) {
      if (this.cities.hasOwnProperty(key)) {
        console.log(this.cities[key])
        if (this.cities[key] < 4) {
          console.log("reached")
            this.cities[key]-= i;
            i+=1;
            console.log( key+"-->"+this.cities[key]);
          }
        }
        console.log( key+"-->"+this.cities[key]);
      }
    }
  }
  }


}
