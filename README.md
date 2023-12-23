# fossil-highlight

Extension for Mozilla Firefox to syntax-highlight
[fossil](https://fossil-scm.org). Mostly intended for personal usage.


Quite simple in principle. Inserts `vendor/highlight.min.js`. The main content
script checks for a string that looks like, using checks for the string
indicated in bold:

_**This page was generated** in about 0.003s **by Fossil** 2.24 [3f97785608]
2023-11-24 12:59:47_


Created following keeping it simple and stupid using the following resources:

* [mdn: Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
* [mdn: Your second webextension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
