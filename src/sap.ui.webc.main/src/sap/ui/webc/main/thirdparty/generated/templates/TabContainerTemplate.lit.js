sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<div class="${litRender.classMap(context.classes.root)}" dir="${litRender.ifDefined(context.effectiveDir)}">${ context.tabsAtTheBottom ? block1(context) : undefined }<div class="${litRender.classMap(context.classes.header)}" id="${litRender.ifDefined(context._id)}-header"><div class="${litRender.classMap(context.classes.headerInnerContainer)}"><div class="${litRender.classMap(context.classes.headerBackArrow)}"><${litRender.scopeTag("ui5-button", tags, suffix)} @click="${context._onHeaderBackArrowClick}" icon="slim-arrow-left" design="Transparent" tabindex="-1" title="${litRender.ifDefined(context.previousIconACCName)}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div><!-- tab items --><div class="${litRender.classMap(context.classes.headerScrollContainer)}" id="${litRender.ifDefined(context._id)}-headerScrollContainer"><ul role="tablist" @focusin=${context._onTablistFocusin} class="${litRender.classMap(context.classes.headerList)}" @click="${context._onHeaderClick}" @keydown="${context._onHeaderKeyDown}" @keyup="${context._onHeaderKeyUp}">${ litRender.repeat(context.items, (item, index) => item._id || index, (item, index) => block4(item, index, context)) }</ul></div><div class="${litRender.classMap(context.classes.headerForwardArrow)}"><${litRender.scopeTag("ui5-button", tags, suffix)} @click="${context._onHeaderForwardArrowClick}" icon="slim-arrow-right" design="Transparent" tabindex="-1" title="${litRender.ifDefined(context.nextIconACCName)}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div></div><!-- overflow button -->${ context.shouldShowOverflow ? block7(context, tags, suffix) : undefined }</div>${ !context.tabsAtTheBottom ? block10(context) : undefined }</div> `;
	const block1 = (context, tags, suffix) => litRender.html`<div class="${litRender.classMap(context.classes.content)}">${ litRender.repeat(context.items, (item, index) => item._id || index, (item, index) => block2(item)) }</div>`;
	const block2 = (item, index, context, tags, suffix) => litRender.html`${ !item.isSeparator ? block3(item) : undefined }`;
	const block3 = (item, index, context, tags, suffix) => litRender.html`<div class="ui5-tc__contentItem" id="ui5-tc-contentItem-${litRender.ifDefined(item._posinset)}" ?hidden="${item.effectiveHidden}" role="tabpanel" aria-labelledby="${litRender.ifDefined(item._id)}"><slot name="${litRender.ifDefined(item._individualSlot)}"></slot></div>`;
	const block4 = (item, index, context, tags, suffix) => litRender.html`${ !item.isSeparator ? block5(item) : undefined }${ item.isSeparator ? block6(item, index, context) : undefined }`;
	const block5 = (item, index, context, tags, suffix) => litRender.html`${litRender.ifDefined(item.stripPresentation)}`;
	const block6 = (item, index, context, tags, suffix) => litRender.html`<li id="${litRender.ifDefined(item._id)}" data-ui5-stable="${litRender.ifDefined(item.stableDomRef)}" role="separator" class="${litRender.classMap(context.classes.separator)}"></li>`;
	const block7 = (context, tags, suffix) => litRender.html`<div class="ui-tc__overflowButton" @click="${context._onOverflowButtonClick}">${ context.overflowButton.length ? block8() : block9(context, tags, suffix) }</div>`;
	const block8 = (context, tags, suffix) => litRender.html`<slot name="overflowButton"></slot>`;
	const block9 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} icon="${litRender.ifDefined(context.overflowMenuIcon)}" design="Transparent" tabindex="-1" title="${litRender.ifDefined(context.overflowMenuTitle)}" aria-haspopup="true"></${litRender.scopeTag("ui5-button", tags, suffix)}>`;
	const block10 = (context, tags, suffix) => litRender.html`<div class="${litRender.classMap(context.classes.content)}">${ litRender.repeat(context.items, (item, index) => item._id || index, (item, index) => block11(item)) }</div>`;
	const block11 = (item, index, context, tags, suffix) => litRender.html`${ !item.isSeparator ? block12(item) : undefined }`;
	const block12 = (item, index, context, tags, suffix) => litRender.html`<div class="ui5-tc__contentItem" id="ui5-tc-contentItem-${litRender.ifDefined(item._posinset)}" ?hidden="${item.effectiveHidden}" role="tabpanel" aria-labelledby="${litRender.ifDefined(item._id)}"><slot name="${litRender.ifDefined(item._individualSlot)}"></slot></div>`;

	return block0;

});
