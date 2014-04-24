ua-parser-js-helpers
====================

Helpful helper methods for the excellent ua-parse-js library. Modelled after the [browser](https://github.com/fnando/browser) gem.

### Requirements

You have to include the [ua-parser-js](https://github.com/faisalman/ua-parser-js]) library as it does all the heavy lifting.

### Usage

By default a new `BrowserDetector` instance will use the user agent returned by `window.navigator.userAgent`.

```
var detector = new BrowserDetector();

detector.isChrome(); // true
```

If you need to, you can pass a custom user agent an an option

```
var someUserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36";

var detector = new BrowserDetector({
  ua: someUserAgent
});

detector.isChrome(); // true
```

### Methods

All methods return a boolean.

```
var detector = new BrowserDetector();

detector.isChrome();
```
