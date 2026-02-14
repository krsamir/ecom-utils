const CATEGORIES = Object.freeze({
  NAME: "categories",
  DRAFT: "categories_draft",
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
    ORIGINAL_NAME: {
      NAME: "original_name",
      SIZE: 200,
    },
    FILE_NAME: {
      NAME: "file_name",
      SIZE: 200,
    },
    PATH: {
      NAME: "path",
      SIZE: 200,
    },
    SIZE: {
      NAME: "size",
      SIZE: 50,
    },
    MIME_TYPE: {
      NAME: "mime_type",
      SIZE: 100,
    },
    MEDIA_ID: {
      NAME: "media_id",
      SIZE: 36,
    },
    ENTITY_ID: {
      NAME: "entity_id",
      SIZE: 10,
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
