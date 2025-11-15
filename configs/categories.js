const CATEGORIES = Object.freeze({
  NAME: "categories",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    NAME: {
      NAME: "name",
      SIZE: 55,
    },
    RANK: {
      NAME: "rank",
      SIZE: 12,
    },
    PARENT_ID: {
      NAME: "parent_id",
      SIZE: 25,
      is_foreign_key: true,
    },
    IS_FAVOURITE: {
      NAME: "is_favourite",
      SIZE: null,
    },
    IS_ACTIVE: {
      NAME: "is_active",
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

module.exports = CATEGORIES;
