const peoplesNames = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peoplesNames) => {
  return getFirstNames(peoplesNames);
};

module.exports = getPeopleInCity;
