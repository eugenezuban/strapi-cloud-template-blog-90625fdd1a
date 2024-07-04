'use strict';

/**
 * tutorial-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutorial-item.tutorial-item');
