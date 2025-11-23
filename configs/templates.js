const TEMPLATES = Object.freeze({
  NAME: "templates",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    NAME: {
      NAME: "name",
      SIZE: 100,
    },
    CONTENT: {
      NAME: "content",
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

module.exports = TEMPLATES;
