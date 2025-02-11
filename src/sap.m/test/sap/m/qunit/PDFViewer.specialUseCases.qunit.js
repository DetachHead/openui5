/*global QUnit, sinon */

sap.ui.define( [
	"./PDFViewerTestUtils",
	"sap/ui/Device",
	"sap/m/PDFViewerRenderer"
], function (TestUtils, Device, PDFViewerRenderer) {
	"use strict";

	var oPDFViewer;
	QUnit.module('Special use cases', {
		afterEach: function (assert) {
			oPDFViewer.destroy();
		}
	});

	// if the environment does not have pdf plugin, then it is not possible to run standard test suite
	if (!PDFViewerRenderer._isPdfPluginEnabled() || /HeadlessChrome/.test(window.navigator.userAgent)) {
		return;
	}

	if (TestUtils.isSourceValidationSupported()) {
		// does not make as much sense cause firefox does not allow check it if the content is pdf
		// and also it is not possible to access contentType of document due to cross domain browser policy
		QUnit.test("Different resource's mimeType passed in", function (assert) {
			assert.expect(1);
			var done = assert.async();

			var oOptions = {
				"source": "test-resources/sap/m/qunit/pdfviewer/different-content.html",
				"loaded": function () {
					if (!Device.browser.firefox) {
						assert.ok(false, "'Load' event should not be fired");
					}

				},
				"error": function (oEvent) {
					oEvent.preventDefault();
					assert.ok(true, "'Error' event fired");
					done();
				},
				"sourceValidationFailed": function (oEvent) {
					if (Device.browser.firefox) {
						assert.ok(true, "'sourceValidationFailed' event fired");
						oEvent.preventDefault();
					} else {
						assert.ok(false, "'sourceValidationFailed' event should not be fired");
					}
				}
			};

			oPDFViewer = TestUtils.createPdfViewer(oOptions);
			TestUtils.renderPdfViewer(oPDFViewer);
		});
	}

	QUnit.test('Error state of component is rendered.', function (assert) {
		assert.expect(3);
		var done = assert.async();

		var oOptions = {
			"source": "test-resources/sap/m/qunit/pdfviewer/not-existing",
			"loaded": function () {
				assert.ok(false, "'Load' event fired but should not.");
			},
			"error": function (oEvent) {
				assert.ok(true, "'Error' event fired");
				assert.ok(oEvent.getParameter("target"), "iFrame element is returned");
			}
		};
		oPDFViewer = TestUtils.createPdfViewer(oOptions);
		TestUtils.renderPdfViewer(oPDFViewer);

		TestUtils.wait(4000)()
			.then(function () {
				assert.ok(oPDFViewer.$().find('.sapMPDFViewerError').length === 1, 'The error content is missing');
				done();
			});
	});

	QUnit.test("Render multiple times with valid or invalid source", function (assert) {
		var done = assert.async(),
			fnLoadedFailListener = function () {
				assert.ok(false, "'Load' event fired but should not.");
			},
			fnErrorOkListener = function (oEvent) {
				assert.ok(true, "'Error' event fired");
				assert.ok(oEvent.getParameter("target"), "iFrame element is returned");
			},
			oErrorOptions = {
				"source": "test-resources/sap/m/qunit/pdfviewer/not-existing",
				"loaded": fnLoadedFailListener,
				"error": fnErrorOkListener
			},
			fnLoadedOkListener = function () {
				assert.ok(true, "'Load' event fired");
			},
			fnErrorFailListener = function () {
				assert.ok(false, "'Error' event fired but should not");
			};

		oPDFViewer = TestUtils.createPdfViewer(oErrorOptions);
		TestUtils.renderPdfViewer(oPDFViewer);

		TestUtils.wait(4000)()
			.then(function () {
				assert.ok(oPDFViewer.$().find('.sapMPDFViewerError').length === 1, 'The error content is missing');
				oPDFViewer.detachLoaded(fnLoadedFailListener);
				oPDFViewer.detachError(fnErrorOkListener);
				oPDFViewer.attachLoaded(fnLoadedOkListener);
				oPDFViewer.attachError(fnErrorFailListener);
				oPDFViewer.setSource("test-resources/sap/m/qunit/pdfviewer/sample-file.pdf");
				TestUtils.triggerRerender();
			})
			.then(TestUtils.wait(4000))
			.then(function () {
				assert.ok(oPDFViewer.$().find('.sapMPDFViewerError').length === 0, 'The error content should be hidden');
				oPDFViewer.detachLoaded(fnLoadedOkListener);
				oPDFViewer.detachError(fnErrorFailListener);
				oPDFViewer.attachLoaded(fnLoadedFailListener);
				oPDFViewer.attachError(fnErrorOkListener);
				oPDFViewer.setSource("test-resources/sap/m/qunit/pdfviewer/not-existing");
				TestUtils.triggerRerender();
			})
			.then(TestUtils.wait(4000))
			.then(function () {
				assert.ok(oPDFViewer.$().find('.sapMPDFViewerError').length === 1, 'The error content is missing');
				done();
			});
	});

	QUnit.test("Changes of height & width propagates directly to DOM", function (assert) {
		assert.expect(4);
		var done = assert.async(),
			fnInvalidate,
			sExpectedHeight = "666px",
			sExpectedWidth = "999px",
			fnLoadedListener = function () {
				assert.ok(true, "'Load' event should be fired");
			},
			fnSpyPdfViewer = function () {
				fnInvalidate = sinon.spy(oPDFViewer, "invalidate");
			},
			fnErrorListener = function () {
				assert.ok(false, "'Error' event fired");
			},
			oErrorOptions = {
				"source": "test-resources/sap/m/qunit/pdfviewer/sample-file.pdf",
				"loaded": fnLoadedListener,
				"error": fnErrorListener
			},
			fnChangeHeightHandler = function () {
				oPDFViewer.setHeight(sExpectedHeight);
			},
			fnChangeWidthHandler = function () {
				oPDFViewer.setWidth(sExpectedWidth);
			},
			fnCheckHeight = function () {
				var sCurrentHeight = oPDFViewer.$().css('height');
				assert.ok(sCurrentHeight === sExpectedHeight, "Height differs. Expects: " +
					sExpectedHeight + ", but " + sCurrentHeight + " found.");
			},
			fnCheckWidth = function () {
				var sCurrentWidth = oPDFViewer.$().css('width');
				assert.ok(sCurrentWidth === sExpectedWidth, "Width differs. Expects: " +
					sExpectedWidth + ", but " + sCurrentWidth + " found.");
			};

		oPDFViewer = TestUtils.createPdfViewer(oErrorOptions);
		TestUtils.renderPdfViewer(oPDFViewer);

		TestUtils.wait(2000)()
			.then(fnSpyPdfViewer)
			.then(fnChangeHeightHandler)
			.then(fnCheckHeight)
			.then(fnChangeWidthHandler)
			.then(fnCheckWidth)
			.then(function () {
				sinon.assert.callCount(fnInvalidate, 0);
				done();
			});
	});

	QUnit.test("Loads pdf with non ascii name", function (assert) {
		var done = assert.async();

		oPDFViewer = TestUtils.createPdfViewer({
			source: "test-resources/sap/m/qunit/pdfviewer/sample file with spaces.pdf",
			loaded: function fnLoadedHandler() {
				assert.ok(true, "The pdf was loaded");
				done();
			},
			error: function fnErrorHandler() {
				assert.ok(false, "The pdf was loaded");
				done();
			}
		});

		TestUtils.renderPdfViewer(oPDFViewer);
	});

	QUnit.test("Height on mobile/tablet devices is always auto", function (assert) {
		this.stub(Device, "system").value({desktop: false});

		oPDFViewer = TestUtils.createPdfViewer({
			height: '250px',
			source: "test-resources/sap/m/qunit/pdfviewer/sample file with spaces.pdf"
		});

		TestUtils.renderPdfViewer(oPDFViewer);

		assert.equal(oPDFViewer.$()[0].style.height, 'auto');
	});

	QUnit.test("Desktop View Emulated from Mobile", function (assert) {
		this.stub(Device, "system").value({desktop: true});
		Device.browser.firefox = false;

		oPDFViewer = TestUtils.createPdfViewer({
			source: "test-resources/sap/m/qunit/pdfviewer/sample-file.pdf"
		});

		this.stub(oPDFViewer.getRenderer(), "_isPdfPluginEnabled").returns(false);

		TestUtils.renderPdfViewer(oPDFViewer);

		assert.equal(document.querySelector("iframe"), null, "iFrame is not rendered");
	});

});