const HSNS = Object.freeze({
  NAME: "hsns",
  COLUMNS: {
    ID: {
      NAME: "id",
      SIZE: null,
    },
    HSN_CODE: {
      NAME: "hsn_code",
      SIZE: 100,
    },
    HSN_DESCRIPTION: {
      NAME: "hsn_description",
      SIZE: 250,
    },
    CGST: {
      NAME: "cgst",
      SIZE: 10,
    },
    SGST: {
      NAME: "sgst",
      SIZE: 10,
    },
    IGST: {
      NAME: "igst",
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

module.exports = HSNS;
