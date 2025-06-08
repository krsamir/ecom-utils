const MASTER = Object.freeze({
  NAME: "master",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    USER_NAME: {
      NAME: "user_name",
      SIZE: 50,
    },
    EMAIL: {
      NAME: "email",
      SIZE: 50,
    },
    FIRST_NAME: {
      NAME: "first_name",
      SIZE: 50,
    },
    LAST_NAME: {
      NAME: "last_name",
      SIZE: 50,
    },
    PASSWORD: {
      NAME: "password",
      SIZE: 500,
    },
    MOBILE: {
      NAME: "mobile",
      SIZE: 12,
    },
    LAST_LOGIN: {
      NAME: "last_login",
      SIZE: null,
    },
    TOKEN: {
      NAME: "token",
      SIZE: 12,
    },
    VALID_TILL: {
      NAME: "valid_till",
      SIZE: null,
    },
    IS_ACTIVE: {
      NAME: "is_active",
      SIZE: null,
    },
    IS_DELETED: {
      NAME: "is_deleted",
      SIZE: null,
    },
    INVALID_LOGINS: {
      NAME: "invalid_logins",
      SIZE: null,
      DEFAULT: 10,
    },
    ROLE_ID: {
      NAME: "role_id",
      SIZE: null,
      is_foreign_key: true,
    },
    CREATED_BY: {
      NAME: "created_by",
      SIZE: 20,
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

module.exports = MASTER;
