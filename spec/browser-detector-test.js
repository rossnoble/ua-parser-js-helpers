describe('Browser Detector', function () {

  describe('web browsers', function () {
    it('should detect chrome correctly', function () {
      var browser = new BrowserDetector({
        ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36"
      });

      expect(browser.isChrome()).toBe(true);
      expect(browser.isIE()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);
    });

    it('should detect firefox correctly', function () {
      var browser = new BrowserDetector({
        ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0"
      });

      expect(browser.isFirefox()).toBe(true);
      expect(browser.isIE()).toBe(false);
      expect(browser.isIE8()).toBe(false);
      expect(browser.isIE9()).toBe(false);
      expect(browser.isIE10()).toBe(false);
      expect(browser.isIE11()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isSafari()).toBe(false);
    });

    it('should detect safari correctly', function () {
      var browser = new BrowserDetector({
        ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 1084) AppleWebKit/537.46.3 (KHTML like Gecko) Version/6.1 Safari/537.46.3"
      });

      expect(browser.isSafari()).toBe(true);
      expect(browser.isIE()).toBe(false);
      expect(browser.isIE8()).toBe(false);
      expect(browser.isIE9()).toBe(false);
      expect(browser.isIE10()).toBe(false);
      expect(browser.isIE11()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
    });

    it('should detect IE 8 correctly', function () {
      var browser = new BrowserDetector({
        ua: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; WOW64; Trident/4.0; SLCC1)"
      });

      expect(browser.isIE()).toBe(true);
      expect(browser.isIE8()).toBe(true);
      expect(browser.isIE9()).toBe(false);
      expect(browser.isIE10()).toBe(false);
      expect(browser.isIE11()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);
    });

    it('should detect IE 9 correctly', function () {
      var browser = new BrowserDetector({
        ua: "Mozilla/5.0 (MSIE 9.0; Windows NT 6.1; Trident/5.0)"
      });

      expect(browser.isIE()).toBe(true);
      expect(browser.isIE8()).toBe(false);
      expect(browser.isIE9()).toBe(true);
      expect(browser.isIE10()).toBe(false);
      expect(browser.isIE11()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);
    });

    it('should detect IE 10 correctly', function () {
      var browser = new BrowserDetector({
        ua: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)"
      });

      expect(browser.isIE()).toBe(true);
      expect(browser.isIE8()).toBe(false);
      expect(browser.isIE9()).toBe(false);
      expect(browser.isIE10()).toBe(true);
      expect(browser.isIE11()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);
    });

    it('should detect IE 11 correctly', function () {
      var browser = new BrowserDetector({
        ua: "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko"
      });

      expect(browser.isIE()).toBe(true);
      expect(browser.isIE7()).toBe(false);
      expect(browser.isIE8()).toBe(false);
      expect(browser.isIE9()).toBe(false);
      expect(browser.isIE10()).toBe(false);
      expect(browser.isIE11()).toBe(true);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);
    });
  });

  describe('operating systems', function () {

    var browser;

    it('should detect chrome book', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.chrome.chromeOS
      });

      expect(browser.isChrome()).toBe(true);
      expect(browser.isIE()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);

      expect(browser.isChromeOS()).toBe(true);
      expect(browser.isWindows()).toBe(false);
      expect(browser.isMac()).toBe(false);

      expect(browser.isMobile()).toBe(false);
      expect(browser.isTablet()).toBe(false);
      expect(browser.isAndroid()).toBe(false);
      expect(browser.isiOS()).toBe(false);
      expect(browser.isiPhone()).toBe(false);
      expect(browser.isiPad()).toBe(false);
    });

    it('should detect chrome on windows 8', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.chrome.win8
      });

      expect(browser.isChrome()).toBe(true);
      expect(browser.isIE()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);

      expect(browser.isChromeOS()).toBe(false);
      expect(browser.isWindows()).toBe(true);
      expect(browser.isWindows8()).toBe(true);
      expect(browser.isWindows7()).toBe(false);
      expect(browser.isMac()).toBe(false);

      expect(browser.isMobile()).toBe(false);
      expect(browser.isTablet()).toBe(false);
      expect(browser.isAndroid()).toBe(false);
      expect(browser.isiOS()).toBe(false);
    });

    it('should detect firefox on windows 7', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.firefox.win7
      });

      expect(browser.isChrome()).toBe(false);
      expect(browser.isIE()).toBe(false);
      expect(browser.isFirefox()).toBe(true);
      expect(browser.isSafari()).toBe(false);

      expect(browser.isChromeOS()).toBe(false);
      expect(browser.isWindows()).toBe(true);
      expect(browser.isWindows8()).toBe(false);
      expect(browser.isWindows7()).toBe(true);
      expect(browser.isMac()).toBe(false);

      expect(browser.isMobile()).toBe(false);
      expect(browser.isTablet()).toBe(false);
      expect(browser.isAndroid()).toBe(false);
      expect(browser.isiOS()).toBe(false);
    });

    it('should detect mac os x correctly', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.safari.v6
      });

      expect(browser.isChrome()).toBe(false);
      expect(browser.isIE()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(true);

      expect(browser.isChromeOS()).toBe(false);
      expect(browser.isWindows()).toBe(false);
      expect(browser.isWindows8()).toBe(false);
      expect(browser.isWindows7()).toBe(false);
      expect(browser.isMac()).toBe(true);

      expect(browser.isMobile()).toBe(false);
      expect(browser.isTablet()).toBe(false);
      expect(browser.isAndroid()).toBe(false);
      expect(browser.isiOS()).toBe(false);
    });

  });

  describe('mobile browsers', function () {

    var browser;

    it('should detect android mobile devices', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.mobile.android.v4
      });

      expect(browser.isIE()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);

      expect(browser.isMobile()).toBe(true);
      expect(browser.isTablet()).toBe(false);

      expect(browser.isAndroid()).toBe(true);
      expect(browser.isiOS()).toBe(false);
      expect(browser.isiPhone()).toBe(false);
      expect(browser.isiPad()).toBe(false);
    });

    it('should detect iphone devices', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.mobile.iphone.ios7
      });

      expect(browser.isIE()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);

      expect(browser.isMobile()).toBe(true);
      expect(browser.isTablet()).toBe(false);

      expect(browser.isAndroid()).toBe(false);
      expect(browser.isiOS()).toBe(true);
      expect(browser.isiPhone()).toBe(true);
      expect(browser.isiPad()).toBe(false);
    });
  });

  describe('tablet browsers', function () {
    it('should detect ipad devices', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.tablet.ipad.ios6
      });

      expect(browser.isIE()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(false);

      expect(browser.isMobile()).toBe(false);
      expect(browser.isTablet()).toBe(true);

      expect(browser.isAndroid()).toBe(false);
      expect(browser.isiOS()).toBe(true);
      expect(browser.isiPhone()).toBe(false);
      expect(browser.isiPad()).toBe(true);
    });

    it('should detect android tablet devices', function () {
      browser = new BrowserDetector({
        ua: USER_AGENTS.tablet.android.v4
      });

      expect(browser.isIE()).toBe(false);
      expect(browser.isChrome()).toBe(false);
      expect(browser.isFirefox()).toBe(false);
      expect(browser.isSafari()).toBe(true);

      expect(browser.isMobile()).toBe(false);
      expect(browser.isTablet()).toBe(true);

      expect(browser.isAndroid()).toBe(true);
      expect(browser.isiOS()).toBe(false);
      expect(browser.isiPhone()).toBe(false);
      expect(browser.isiPad()).toBe(false);
    });

  });
});
