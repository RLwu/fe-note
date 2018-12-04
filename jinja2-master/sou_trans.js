/**
 * Created by 粒粒 on 2016/3/25.
 */
var VerEx = require('verbal-expressions');
// Create an example of how to test for correctly formed URLs
var tester = VerEx()
    .startOfLine()
    .then('{%')
    .then(' ')
    .oneOrMore()
    .then('trans')
    .then(' ')
    .oneOrMore()
    .then('"')
    .anythingBut('"')
    .then('"')
    .then(' ')
    .oneOrMore()
    .then('%}')
    .endOfLine();

// Create an example URL
var testMe = '{%  trans  " Home home" %}';

// Use RegExp object's native test() function
if (tester.test(testMe)) {
    console.log('We have a correct URL '); // This output will fire}
} else {
    console.log('The URL is incorrect');
}

console.log(tester); // Outputs the actual expression used: /^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$/