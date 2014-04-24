/**
 *
 * Create a BrowserDetector instance to test the nature
 * of the user agent.
 *
 * @class BrowserDetector
 * @constructor
 *
 */
(function (window, undefined) {

  'use strict';

  var BrowserDetector = function (options) {
    options = options || {};

    this.ua = options.ua || (window && window.navigator &&
      window.navigator.userAgent);

    var parser = new UAParser(this.ua),
      result = parser.getResult(),
      browser = result.browser,
      os = result.os;

    this.browserVersion = function () {
      return parseInt(browser.major) || 0;
    };

    this.isChrome = function () {
      return browser.name === 'Chrome';
    };

    this.isFirefox = function () {
      return browser.name === 'Firefox';
    };

    this.isSafari = function () {
      return browser.name === 'Safari';
    };

    this.isIE = function () {
      return browser.name === 'IE';
    };

    this.isIE7 = function () {
      return this.isIE() && browser.major === '7';
    };

    this.isIE8 = function () {
      return this.isIE() && browser.major === '8';
    };

    this.isIE9 = function () {
      return this.isIE() && browser.major === '9';
    };

    this.isIE10 = function () {
      return this.isIE() && browser.major === '10';
    };

    this.isIE11 = function () {
      return this.isIE() && browser.major === '11';
    };

    this.isWindows = function () {
      return os.name === 'Windows';
    };

    this.isWindowsXP = function () {
      return this.isWindows && os.version === 'XP';
    };

    this.isWindows7 = function () {
      return this.isWindows && os.version === '7';
    };

    this.isWindows8 = function () {
      return this.isWindows && os.version === '8';
    };

    this.isMac = function () {
      return os.name === 'Mac OS X';
    },

    this.isChromeOS = function () {
      return os.name === 'Chromium OS';
    };

    this.isMobile = function () {
      return result.device.type === 'mobile';
    };

    this.isTablet = function () {
      return result.device.type === 'tablet';
    };

    this.isiPhone = function () {
      return result.device.model === 'iPhone';
    };

    this.isiPad = function () {
      return result.device.model === 'iPad';
    };

    this.isiOS = function () {
      return result.os.name === 'iOS';
    };

    this.isAndroid = function () {
      return result.os.name === 'Android';
    };
  }

  window.BrowserDetector = BrowserDetector;

})(window);
