const ENTITY = Object.freeze({
  NAME: "entity",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    NAME: {
      NAME: "name",
      SIZE: 50,
    },
    GST: {
      NAME: "gst",
      SIZE: 20,
    },
    ADDRESS: {
      NAME: "address",
      SIZE: 200,
    },
    LOCATION_ID: {
      NAME: "location_id",
      SIZE: null,
      is_foreign_key: true,
    },
    IS_ACTIVE: {
      NAME: "is_active",
      SIZE: null,
    },
    IS_DELETED: {
      NAME: "is_deleted",
      SIZE: null,
    },
    PROPRIETOR_NAME: {
      NAME: "proprietor_name",
      SIZE: 30,
    },
    MAX_ADMINS: {
      NAME: "max_admin",
      SIZE: null,
      DEFAULT_TO: 2,
    },
    MAX_MANAGER: {
      NAME: "max_manager",
      SIZE: null,
      DEFAULT_TO: 4,
    },
    CATEGORIES: {
      NAME: "categories",
      SIZE: null,
      CATEGORIES_ARR: {
        GROCERY: "GROCERY",
        COSMETICS: "COSMETICS",
        STATIONARY: "STATIONARY",
      },
    },
    CREATED_BY: {
      NAME: "created_by",
      SIZE: 50,
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

module.exports = ENTITY;
