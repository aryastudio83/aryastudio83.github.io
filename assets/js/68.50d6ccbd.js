(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{438:function(e,t,n){"use strict";n.r(t);var o=n(44),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"non-null-assertions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#non-null-assertions"}},[e._v("#")]),e._v(" Non-Null Assertions")]),e._v(" "),n("blockquote",[n("p",[e._v("A second approach to the problem of nullable types is to have special knowledge that the reference in question isn’t "),n("code",[e._v("null")]),e._v(".")])]),e._v(" "),n("p",[e._v("To make this claim, use the double exclamation point, "),n("code",[e._v("!!")]),e._v(", called the "),n("em",[e._v("non-null assertion")]),e._v(". If this looks alarming, it should: believing that something can’t be "),n("code",[e._v("null")]),e._v(" is the source of most "),n("code",[e._v("null")]),e._v("-related program failures (the rest come from not "),n("em",[e._v("realizing")]),e._v(" that a "),n("code",[e._v("null")]),e._v(" can happen).")]),e._v(" "),n("p",[n("code",[e._v("x!!")]),e._v(" means “forget the fact that "),n("code",[e._v("x")]),e._v(" might be "),n("code",[e._v("null")]),e._v("—I guarantee that it’s "),n("em",[e._v("not")]),e._v(" "),n("code",[e._v("null")]),e._v(".” "),n("code",[e._v("x!!")]),e._v(" produces "),n("code",[e._v("x")]),e._v(" if "),n("code",[e._v("x")]),e._v(" isn’t "),n("code",[e._v("null")]),e._v(", otherwise it throws an exception:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NonNullAssertions/NonNullAssert.kt\nimport atomictest.*\n\nfun main() {\n  var x: String? = "abc"\n  x!! eq "abc"\n  x = null\n  capture {\n    val s: String = x!!\n  } eq "NullPointerException"\n}\n')])])]),n("p",[e._v("The definition "),n("code",[e._v("val s: String = x!!")]),e._v(" tells Kotlin to ignore what it thinks it knows about "),n("code",[e._v("x")]),e._v(" and just assign it to "),n("code",[e._v("s")]),e._v(", which is a non-nullable reference. Fortunately, there’s run-time support that throws a "),n("code",[e._v("NullPointerException")]),e._v(" when "),n("code",[e._v("x")]),e._v(" is "),n("code",[e._v("null")]),e._v(".")]),e._v(" "),n("p",[e._v("Ordinarily you won’t use the "),n("code",[e._v("!!")]),e._v(" by itself, but instead in conjunction with a "),n("code",[e._v(".")]),e._v(" dereference:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NonNullAssertions/NonNullAssertCall.kt\nimport atomictest.eq\n\nfun main() {\n  val s: String? = "abc"\n  s!!.length eq 3\n}\n')])])]),n("p",[e._v("If you limit yourself to a single non-null asserted call per line, it’s easier to locate a failure when the exception gives you a line number.")]),e._v(" "),n("p",[e._v("The safe call "),n("code",[e._v("?.")]),e._v(" is a single operator, but a non-null asserted call consists of two operators: the non-null assertion ("),n("code",[e._v("!!")]),e._v(") and a dereference ("),n("code",[e._v(".")]),e._v("). As you saw in "),n("code",[e._v("NonNullAssert.kt")]),e._v(", you can use a non-null assertion by itself.")]),e._v(" "),n("p",[e._v("Avoid non-null assertions and prefer safe calls or explicit checks. Non-null assertions were introduced to enable interaction between Kotlin and Java, and for the rare cases when Kotlin isn’t smart enough to ensure the necessary checks are performed.")]),e._v(" "),n("p",[e._v("If you frequently use non-null assertions in your code for the same operation, it’s better to use a separate function with a specific assertion describing the problem. As an example, suppose your program logic requires a particular key to be present in a "),n("code",[e._v("Map")]),e._v(", and you prefer getting an exception instead of silently doing nothing if the key is absent. Instead of extracting the value with the usual approach (square brackets), "),n("code",[e._v("getValue()")]),e._v(" throws "),n("code",[e._v("NoSuchElementException")]),e._v(" if a key is missing:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// NonNullAssertions/ValueFromMap.kt\nimport atomictest.*\n\nfun main() {\n  val map = mapOf(1 to "one")\n  map[1]!!.toUpperCase() eq "ONE"\n  map.getValue(1).toUpperCase() eq "ONE"\n  capture {\n    map[2]!!.toUpperCase()\n  } eq "NullPointerException"\n  capture {\n    map.getValue(2).toUpperCase()\n  } eq "NoSuchElementException: " +\n    "Key 2 is missing in the map."\n}\n')])])]),n("p",[e._v("Throwing the specific "),n("code",[e._v("NoSuchElementException")]),e._v(" gives you more useful details when something goes wrong.")]),e._v(" "),n("ul",[n("li",[e._v("-")])]),e._v(" "),n("p",[e._v("Optimal code uses only safe calls and special functions that throw detailed exceptions. Only use non-"),n("code",[e._v("null")]),e._v(" asserted calls when you absolutely must. Although non-"),n("code",[e._v("null")]),e._v(" assertions were included to support interaction with Java code, there are better ways to interact with Java, which you can learn about in [Appendix B: Java Interoperability](javascript:void(0)).")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);