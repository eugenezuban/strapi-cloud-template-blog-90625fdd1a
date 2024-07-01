"use strict";

const fs = require("fs-extra");
const path = require("path");
const mime = require("mime-types");
const set = require("lodash.set");

async function isFirstRun() {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
}

module.exports = async () => {
  await isFirstRun();
};
