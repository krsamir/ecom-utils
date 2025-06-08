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
    },
    MAX_MANAGER: {
      NAME: "max_manager",
      SIZE: null,
    },
    CATEGORIES: {
      NAME: "categories",
      SIZE: null,
      CATEGORIES_ARR: {
        SUPER_ADMIN: "SUPER_ADMIN",
        ADMIN: "ADMIN",
        MANAGER: "MANAGER",
        DELIVERY_PARTNER: "DELIVERY_PARTNER",
      },
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
