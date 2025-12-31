const MEDIA = Object.freeze({
  NAME: "media",
  COLUMNS: {
    ID: {
      NAME: "id",
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
    SEQUENCE: {
      NAME: "sequence",
      SIZE: 20,
    },
    IS_ACTIVE: {
      NAME: "is_active",
      SIZE: null,
    },
    IS_DRAFT: {
      NAME: "is_draft",
      SIZE: null,
    },
    ENTITY_ID: {
      NAME: "entity_id",
      SIZE: 10,
    },
    PRODUCT_ID: {
      NAME: "product_id",
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

module.exports = MEDIA;
