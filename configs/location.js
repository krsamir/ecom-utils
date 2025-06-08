const LOCATION = Object.freeze({
  NAME: "location",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    NAME: {
      NAME: "name",
      SIZE: 50,
    },
    CITY: {
      NAME: "city",
      SIZE: 50,
    },
    STATE: {
      NAME: "state",
      SIZE: 50,
    },
    COUNTRY: {
      NAME: "country",
      SIZE: 50,
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

module.exports = LOCATION;
