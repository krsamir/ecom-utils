const STOCKS = Object.freeze({
  NAME: "stocks",
  DRAFT: "stocks_draft",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    QUANTITY_AVAILABLE: {
      NAME: "quantity_available",
      SIZE: 10,
    },
    REORDER_LEVEL: {
      NAME: "reorder_level",
      SIZE: 10,
    },
    SUPPLIER_NAME: {
      NAME: "supplier_name",
      SIZE: 50,
    },
    SOURCE: {
      NAME: "source",
      SIZE: 50,
    },
    ENTITY_ID: {
      NAME: "entity_id",
      SIZE: 10,
    },
    PRODUCT_ID: {
      NAME: "product_id",
      is_foreign_key: true,
    },
    CREATED_BY: {
      NAME: "created_by",
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

module.exports = STOCKS;
