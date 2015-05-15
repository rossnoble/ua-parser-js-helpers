$(function () {

var userAgent = window.navigator.userAgent;
var db = new BrowserDetector({ ua: userAgent });

// Display current user agent being tested
$('.js-current-ua').text(userAgent);

// Display test results for each method
$('.ua').each(function () {
  var $this = $(this);
  var methodToTest = $this.data('method');
  var testValue = db[methodToTest] && db[methodToTest]();
  $this.find('.test code').text(testValue);
});

});
