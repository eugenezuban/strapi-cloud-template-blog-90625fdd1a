"use strict";

const isFirstRun = require('./utils/isFirstRun');

module.exports = async () => {
  const firstRun = await isFirstRun();
  if (firstRun) {
    console.log("This is the first run of the application.");
  }
};
