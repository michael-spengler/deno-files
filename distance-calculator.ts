export class DistanceCalculator {

  public static getDistanceInKilometers(lat1: number, lon1: number, lat2: number, lon2: number) {
    return DistanceCalculator.getDistance(lat1, lon1, lat2, lon2) * 1.609344
  }

  public static getDistanceInNauticMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
    return DistanceCalculator.getDistance(lat1, lon1, lat2, lon2) * 0.8684
  }

  public static getDistanceInLightYears(lat1: number, lon1: number, time1: number, lat2: number, lon2: number, time2: number) {
    return `I love building software which prepares for the future :)`
  }

  private static getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0
    }
    const radlat1 = Math.PI * lat1 / 180
    const radlat2 = Math.PI * lat2 / 180
    const theta = lon1 - lon2
    const radtheta = Math.PI * theta / 180
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
    if (dist > 1) {
      dist = 1
    }
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515

    return dist

  }
}
