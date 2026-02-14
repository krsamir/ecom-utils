const CATEGORIES_PRODUCT_MAPPER = Object.freeze({
  NAME: "categories_product_mapper",
  DRAFT: "categories_product_mapper_draft",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    PRODUCT_ID: {
      NAME: "product_id",
      SIZE: 25,
      is_foreign_key: true,
    },
    CATEGORY_ID: {
      NAME: "category_id",
      SIZE: 25,
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

module.exports = CATEGORIES_PRODUCT_MAPPER;
