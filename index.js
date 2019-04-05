// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){ return drivers.slice(0, 2)};
const returnLastTwoDrivers = function (drivers){ return drivers.slice(drivers.length-2)};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (value){
  return function (fare) {return fare * value};
};
const fareDoubler = function (fare){ return createFareMultiplier(2)(fare) };
const fareTripler = function (fare){ return createFareMultiplier(3)(fare) };
const selectDifferentDrivers = function (drivers, cb){ return cb(drivers) };
