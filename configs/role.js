const ROLE = Object.freeze({
  NAME: "role",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    NAME: {
      NAME: "name",
      SIZE: 20,
    },
    IS_DELETED: {
      NAME: "is_deleted",
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

module.exports = ROLE;
