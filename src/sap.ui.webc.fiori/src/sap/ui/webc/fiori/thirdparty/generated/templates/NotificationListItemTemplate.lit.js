sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => suffix ? litRender.html`<li class="ui5-nli-root ui5-nli-focusable" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click="${context._onclick}" role="listitem" tabindex="${litRender.ifDefined(context._tabIndex)}" aria-labelledby="${litRender.ifDefined(context.ariaLabelledBy)}"><div class="ui5-nli-actions">${ context.showOverflow ? block1(context, tags, suffix) : block2(context, tags, suffix) }${ context.showClose ? block4(context, tags, suffix) : undefined }</div><div class="ui5-nli-content"><div class="ui5-nli-title-text-wrapper">${ context.hasPriority ? block5(context, tags, suffix) : undefined }<div id="${litRender.ifDefined(context._id)}-title-text" class="ui5-nli-title-text" part="title-text">${litRender.ifDefined(context.titleText)}</div></div>${ context.hasDesc ? block6(context) : undefined }<div id="${litRender.ifDefined(context._id)}-footer" class="ui5-nli-footer">${ litRender.repeat(context.footerItems, (item, index) => item._id || index, (item, index) => block7(item)) }<${litRender.scopeTag("ui5-link", tags, suffix)} class="ui5-nli-footer-showMore" ?hidden="${context.hideShowMore}" @click="${context._onShowMoreClick}" aria-hidden="true" href="#"  showMore-btn>${litRender.ifDefined(context.showMoreText)}</${litRender.scopeTag("ui5-link", tags, suffix)}></div><span id="${litRender.ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${litRender.ifDefined(context.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${ context.busy ? block9(context, tags, suffix) : undefined }</li>` : litRender.html`<li class="ui5-nli-root ui5-nli-focusable" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click="${context._onclick}" role="listitem" tabindex="${litRender.ifDefined(context._tabIndex)}" aria-labelledby="${litRender.ifDefined(context.ariaLabelledBy)}"><div class="ui5-nli-actions">${ context.showOverflow ? block1(context, tags, suffix) : block2(context, tags, suffix) }${ context.showClose ? block4(context, tags, suffix) : undefined }</div><div class="ui5-nli-content"><div class="ui5-nli-title-text-wrapper">${ context.hasPriority ? block5(context, tags, suffix) : undefined }<div id="${litRender.ifDefined(context._id)}-title-text" class="ui5-nli-title-text" part="title-text">${litRender.ifDefined(context.titleText)}</div></div>${ context.hasDesc ? block6(context) : undefined }<div id="${litRender.ifDefined(context._id)}-footer" class="ui5-nli-footer">${ litRender.repeat(context.footerItems, (item, index) => item._id || index, (item, index) => block7(item)) }<ui5-link class="ui5-nli-footer-showMore" ?hidden="${context.hideShowMore}" @click="${context._onShowMoreClick}" aria-hidden="true" href="#"  showMore-btn>${litRender.ifDefined(context.showMoreText)}</ui5-link></div><span id="${litRender.ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${litRender.ifDefined(context.accInvisibleText)}</span></div><div class="ui5-nli-avatar"><slot name="avatar"></slot></div>${ context.busy ? block9(context, tags, suffix) : undefined }</li>`;
	const block1 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} icon="overflow" design="Transparent" @click="${context._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${litRender.ifDefined(context.overflowBtnAccessibleName)}" aria-label="${litRender.ifDefined(context.overflowBtnAccessibleName)}"></${litRender.scopeTag("ui5-button", tags, suffix)}>` : litRender.html`<ui5-button icon="overflow" design="Transparent" @click="${context._onBtnOverflowClick}" class="ui5-nli-overflow-btn" tooltip="${litRender.ifDefined(context.overflowBtnAccessibleName)}" aria-label="${litRender.ifDefined(context.overflowBtnAccessibleName)}"></ui5-button>`;
	const block2 = (context, tags, suffix) => litRender.html`${ litRender.repeat(context.standardActions, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix)) }`;
	const block3 = (item, index, context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} icon="${litRender.ifDefined(item.icon)}" class="ui5-nli-action" @click="${item.press}" ?disabled="${item.disabled}" design="${litRender.ifDefined(item.design)}" data-ui5-external-action-item-id="${litRender.ifDefined(item.refItemid)}">${litRender.ifDefined(item.text)}</${litRender.scopeTag("ui5-button", tags, suffix)}>` : litRender.html`<ui5-button icon="${litRender.ifDefined(item.icon)}" class="ui5-nli-action" @click="${item.press}" ?disabled="${item.disabled}" design="${litRender.ifDefined(item.design)}" data-ui5-external-action-item-id="${litRender.ifDefined(item.refItemid)}">${litRender.ifDefined(item.text)}</ui5-button>`;
	const block4 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" @click="${context._onBtnCloseClick}" tooltip="${litRender.ifDefined(context.closeBtnAccessibleName)}" aria-label="${litRender.ifDefined(context.closeBtnAccessibleName)}" close-btn></${litRender.scopeTag("ui5-button", tags, suffix)}>` : litRender.html`<ui5-button icon="decline" design="Transparent" @click="${context._onBtnCloseClick}" tooltip="${litRender.ifDefined(context.closeBtnAccessibleName)}" aria-label="${litRender.ifDefined(context.closeBtnAccessibleName)}" close-btn></ui5-button>`;
	const block5 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} class="ui5-prio-icon ui5-prio-icon--${litRender.ifDefined(context.priorityIcon)}" name="${litRender.ifDefined(context.priorityIcon)}"></${litRender.scopeTag("ui5-icon", tags, suffix)}>` : litRender.html`<ui5-icon class="ui5-prio-icon ui5-prio-icon--${litRender.ifDefined(context.priorityIcon)}" name="${litRender.ifDefined(context.priorityIcon)}"></ui5-icon>`;
	const block6 = (context, tags, suffix) => litRender.html`<div id="${litRender.ifDefined(context._id)}-description" class="ui5-nli-description"><slot></slot></div>`;
	const block7 = (item, index, context, tags, suffix) => litRender.html`<slot name="${litRender.ifDefined(item.slotName)}"></slot>${ item.showDivider ? block8() : undefined }`;
	const block8 = (item, index, context, tags, suffix) => litRender.html`<div class="ui5-nli-footer-divider" aria-hidden="true">·</div>`;
	const block9 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-busy-indicator", tags, suffix)} delay="${litRender.ifDefined(context.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></${litRender.scopeTag("ui5-busy-indicator", tags, suffix)}>` : litRender.html`<ui5-busy-indicator delay="${litRender.ifDefined(context.busyDelay)}" active size="Medium" class="ui5-nli-busy" data-sap-focus-ref></ui5-busy-indicator>`;

	return block0;

});
