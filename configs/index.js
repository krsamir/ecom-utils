const USER = require("./user");
const ROLE = require("./role");
const ENTITY = require("./entity");
const LOCATION = require("./location");
const MASTER = require("./master");
const MASTER_ENTITY_MAPPER = require("./master_entity_mapper");

const MODELS = { USER, ROLE, ENTITY, LOCATION, MASTER, MASTER_ENTITY_MAPPER };

module.exports = MODELS;

exports.USERS = USER;
