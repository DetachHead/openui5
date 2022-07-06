sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => parametersBundle_css);
	var PopupsCommonCss = {packageName:"@ui5/webcomponents",fileName:"themes/PopupsCommon.css",content:":host{display:none;position:fixed;background:var(--sapGroup_ContentBackground);box-shadow:var(--sapContent_Shadow2);border-radius:var(--_ui5_popup_border_radius);min-height:2rem;box-sizing:border-box}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;outline:none}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--sapContent_HeaderShadow);margin-bottom:.125rem}.ui5-popup-content{color:var(--sapTextColor)}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-footer-root,.ui5-popup-header-root,:host([header-text]) .ui5-popup-header-text{margin:0;font-size:1rem;font-family:\"72override\",var(--_ui5_popup_header_font_family);display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{text-align:center;min-height:var(--_ui5_popup_default_header_height);max-height:var(--_ui5_popup_default_header_height);line-height:var(--_ui5_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([disable-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range=S]) .ui5-popup-content{padding:1rem var(--_ui5_popup_content_padding_s)}:host([media-range=L]) .ui5-popup-content,:host([media-range=M]) .ui5-popup-content{padding:1rem var(--_ui5_popup_content_padding_m_l)}:host([media-range=XL]) .ui5-popup-content{padding:1rem var(--_ui5_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--sapPageHeader_Background)}:host([media-range=S]) .ui5-popup-footer-root,:host([media-range=S]) .ui5-popup-header-root{padding-left:var(--_ui5_popup_header_footer_padding_s);padding-right:var(--_ui5_popup_header_footer_padding_s)}:host([media-range=L]) .ui5-popup-footer-root,:host([media-range=L]) .ui5-popup-header-root,:host([media-range=M]) .ui5-popup-footer-root,:host([media-range=M]) .ui5-popup-header-root{padding-left:var(--_ui5_popup_header_footer_padding_m_l);padding-right:var(--_ui5_popup_header_footer_padding_m_l)}:host([media-range=XL]) .ui5-popup-footer-root,:host([media-range=XL]) .ui5-popup-header-root{padding-left:var(--_ui5_popup_header_footer_padding_xl);padding-right:var(--_ui5_popup_header_footer_padding_xl)}"};

	return PopupsCommonCss;

});
