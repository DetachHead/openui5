sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/paint-bucket", "./v4/paint-bucket"], function (_exports, _Theme, _paintBucket, _paintBucket2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _paintBucket.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _paintBucket.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _paintBucket.pathData : _paintBucket2.pathData;
  _exports.pathData = pathData;
  var _default = "paint-bucket";
  _exports.default = _default;
});