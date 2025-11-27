const COST = Object.freeze({
  NAME: "costs",
  DRAFT: "costs_draft",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    MIN_QTY: {
      NAME: "min_qty",
      SIZE: 10,
    },
    MAX_QTY: {
      NAME: "max_qty",
      SIZE: 10,
    },
    PURCHASE_COST: {
      NAME: "purchase_cost",
      SIZE: [10, 3],
    },
    COST_FOR_SELL: {
      NAME: "cost_for_sell",
      SIZE: [10, 3],
    },
    ACTUAL_COST: {
      NAME: "actual_cost",
      SIZE: [10, 3],
    },
    CURRENCY: {
      NAME: "currency",
      SIZE: null,
      enum: ["INR"],
      default: "INR",
    },
    VALID_FROM: {
      NAME: "valid_from",
      SIZE: null,
    },
    VALID_TO: {
      NAME: "valid_to",
      SIZE: null,
    },
    VERSION: {
      NAME: "version",
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

module.exports = COST;
