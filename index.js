
const returnFirstTwoDrivers = drivers => drivers.slice(0,2)

const returnLastTwoDrivers = drivers => drivers.slice(drivers.length - 2, drivers.length)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function multiplyFare(fare) {return fare * multiplier}
}

const fareDoubler = fare => createFareMultiplier(2)(fare)

const fareTripler = fare => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers)
}

