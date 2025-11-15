const PRODUCT = Object.freeze({
  NAME: "product",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    UUID: {
      NAME: "uuid",
      SIZE: 20,
    },
    NAME: {
      NAME: "name",
      SIZE: 100,
    },
    DESCRIPTION: {
      NAME: "description",
      SIZE: 2500,
    },
    HSN_ID: {
      NAME: "hsn_id",
      SIZE: 25,
      is_foreign_key: true,
    },
    BARCODE: {
      NAME: "barcode",
      SIZE: 25,
    },
    UNIT: {
      NAME: "unit",
      SIZE: 10,
    },
    UNIT_TYPE: {
      NAME: "unit_type",
      SIZE: 10,
      is_foreign_key: true,
    },
    ENTITY_ID: {
      NAME: "entity_id",
      SIZE: null,
      is_foreign_key: true,
    },
    IS_DELETED: {
      NAME: "is_deleted",
      SIZE: null,
    },
    CREATED_BY: {
      NAME: "created_by",
      SIZE: 20,
      is_foreign_key: true,
    },
    UPDATED_BY: {
      NAME: "updated_by",
      SIZE: null,
      is_foreign_key: true,
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

module.exports = PRODUCT;
