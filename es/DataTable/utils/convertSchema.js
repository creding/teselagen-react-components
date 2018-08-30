var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { startCase } from "lodash";

export default (function (schema) {
  var schemaToUse = schema;
  if (!schemaToUse.fields && Array.isArray(schema)) {
    schemaToUse = {
      fields: schema
    };
  }
  schemaToUse = _extends({}, schemaToUse);
  schemaToUse.fields = schemaToUse.fields.map(function (field, i) {
    var fieldToUse = field;
    if (typeof field === "string") {
      fieldToUse = {
        displayName: startCase(field),
        path: field,
        type: "string"
      };
    } else if (!field.type) {
      fieldToUse = _extends({}, field, {
        type: "string"
      });
    }
    if (!fieldToUse.displayName) {
      fieldToUse = _extends({}, fieldToUse, {
        displayName: startCase(fieldToUse.path)
      });
    }
    // paths are needed for column resizing
    if (!fieldToUse.path) {
      fieldToUse = _extends({}, fieldToUse, {
        path: "fake-path" + i
      });
    }
    return fieldToUse;
  });
  return schemaToUse;
});