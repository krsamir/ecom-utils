const USER = require("./user");
const ROLE = require("./role");
const ENTITY = require("./entity");
const LOCATION = require("./location");
const MASTER = require("./master");
const PRODUCT = require("./product");
const HSNS = require("./hsns");
const UNITS = require("./units");
const CATEGORIES = require("./categories");
const TEMPLATES = require("./templates");
const COST = require("./cost");
const STOCKS = require("./stocks");
const MASTER_ENTITY_MAPPER = require("./master_entity_mapper");
const CATEGORIES_PRODUCT_MAPPER = require("./categories_product_mapper");

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
  CATEGORIES,
  CATEGORIES_PRODUCT_MAPPER,
  TEMPLATES,
  COST,
  STOCKS,
};

module.exports = MODELS;

exports.USERS = USER;
