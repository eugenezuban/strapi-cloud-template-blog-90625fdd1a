"use strict";

const cleanupPageContents = require('./utils/cleanup-page-contents');
const isFirstRun = require('./utils/isFirstRun');

module.exports = async () => {
  console.log('\n', "Bootstrap starting...");

  await cleanupPageContents();

  const firstRun = await isFirstRun();
  if (firstRun) {
    console.log("This is the first run of the application.");
  }

  console.log("Bootstrap finished.");
};
