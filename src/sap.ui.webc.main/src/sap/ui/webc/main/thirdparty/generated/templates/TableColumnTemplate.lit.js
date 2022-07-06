sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<th scope="col" part="column" role="columnheader"><slot></slot></th>`;

	return block0;

});
