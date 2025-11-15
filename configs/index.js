const USER = require("./user");
const ROLE = require("./role");
const ENTITY = require("./entity");
const LOCATION = require("./location");
const MASTER = require("./master");
const PRODUCT = require("./product");
const HSNS = require("./hsns");
const UNITS = require("./units");
const MASTER_ENTITY_MAPPER = require("./master_entity_mapper");

const MODELS = {
  USER,
  ROLE,
  ENTITY,
  LOCATION,
  MASTER,
  MASTER_ENTITY_MAPPER,
  PRODUCT,
  HSNS,
  UNITS,
};

module.exports = MODELS;

exports.USERS = USER;
