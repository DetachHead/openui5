sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => parametersBundle_css);
	var dialogCSS = {packageName:"@ui5/webcomponents",fileName:"themes/Dialog.css",content:":host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%}.ui5-popup-header-root{background:var(--sapPageHeader_Background)}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot=header]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}.ui5-popup-header-root:focus{outline:var(--_ui5_dialog_outline);border-radius:var(--_ui5_dialog_header_border_radius);outline-offset:var(--_ui5_dialog_header_focus_offset)}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:var(--_ui5_dialog_resize_handle_bottom);right:var(--_ui5_dialog_resize_handle_right);cursor:se-resize;color:var(--_ui5_dialog_resize_handle_color)}.ui5-popup-resize-handle[dir=rtl]{left:-.25rem;right:unset;cursor:sw-resize}"};

	return dialogCSS;

});
