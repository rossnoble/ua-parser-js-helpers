$(function () {

var userAgent = window.navigator.userAgent;

window.db = new BrowserDetector({ ua: userAgent });

// Display current user agent being tested
$('.js-current-ua').text(userAgent);

// Display test results for each method
$('.ua').each(function () {
  var $this = $(this);
  var methodToTest = $this.data('method');
  var testValue = db[methodToTest] && db[methodToTest]();

  var spanClass = testValue ? 'true' : 'false';

  var listItemText = '<strong>' + methodToTest + ':</strong> ' +
                     '<span class="test-value '+spanClass+'">' + testValue + '</span>';

  $this.html(listItemText);
});

});
