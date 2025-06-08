const USER = Object.freeze({
  NAME: "user",
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
    LAST_LOGIN: {
      NAME: "last_login",
      SIZE: null,
    },
    MOBILE: {
      NAME: "mobile",
      SIZE: 12,
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
    INVALID_LOGINS: {
      NAME: "invalid_logins",
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

module.exports = USER;
