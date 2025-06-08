const MASTER_ENTITY_MAPPER = Object.freeze({
  NAME: "master_entity_mapper",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    MASTER_ID: {
      NAME: "master_id",
      SIZE: null,
      is_foreign_key: true,
    },
    ENTITY_ID: {
      NAME: "entity_id",
      SIZE: null,
      is_foreign_key: true,
    },
    CREATED_BY: {
      NAME: "created_by",
      SIZE: null,
    },
    CREATED_AT: {
      NAME: "created_at",
      SIZE: null,
    },
    UPDATED_AT: {
      NAME: "updated_at",
      SIZE: null,
    },
  },
});

module.exports = MASTER_ENTITY_MAPPER;
