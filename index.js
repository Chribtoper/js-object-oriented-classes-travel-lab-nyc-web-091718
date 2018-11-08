class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let totalYears = (endDate.getUTCFullYear() - this.startDate.getUTCFullYear())
    return totalYears;
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let bHorizontal = this.beginningLocation.horizontal;
    let eHorizontal = this.endingLocation.horizontal;
    let bVertical = this.beginningLocation.vertical;
    let eVertical = this.endingLocation.vertical;
    let arrayLength = eastWest.length;
    let hDistance = null;
    let vDistance = null;
      if (eastWest.indexOf(bHorizontal) > eastWest.indexOf(eHorizontal)) {
        hDistance = eastWest.indexOf(bHorizontal) - eastWest.indexOf(eHorizontal);
      } else {
        hDistance = eastWest.indexOf(eHorizontal) - eastWest.indexOf(bHorizontal);
      }
      if (bVertical > eVertical){
        vDistance = bVertical - eVertical;
      } else {
        vDistance = eVertical - bVertical;
      }
      return vDistance + hDistance;
    }
    estimatedTime(peak){
      if (peak) {
        return this.blocksTravelled() / 2
      } else {
        return this.blocksTravelled() / 3
      }
    }
  }
