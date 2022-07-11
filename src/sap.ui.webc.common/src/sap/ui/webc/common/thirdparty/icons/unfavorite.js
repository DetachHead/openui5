sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/unfavorite", "./v4/unfavorite"], function (_exports, _Theme, _unfavorite, _unfavorite2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _unfavorite.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _unfavorite.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _unfavorite.pathData : _unfavorite2.pathData;
  _exports.pathData = pathData;
  var _default = "unfavorite";
  _exports.default = _default;
});