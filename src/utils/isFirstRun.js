'use strict';

module.exports = async () => {
  try {
    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: "type",
      name: "setup",
    });
    const initHasRun = await pluginStore.get({ key: "initHasRun" });
    await pluginStore.set({ key: "initHasRun", value: true });
    return !initHasRun;
  } catch (error) {
    console.error('Error during is first run:', error.message);
  }
};
