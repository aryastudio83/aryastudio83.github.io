(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{521:function(e,t,n){"use strict";n.r(t);var s=n(44),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"sets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sets"}},[e._v("#")]),e._v(" Sets")]),e._v(" "),n("blockquote",[n("p",[e._v("A "),n("code",[e._v("Set")]),e._v(" is a collection that allows only one element of each value.")])]),e._v(" "),n("p",[e._v("The most common "),n("code",[e._v("Set")]),e._v(" activity is to test for membership using "),n("code",[e._v("in")]),e._v(" or "),n("code",[e._v("contains()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Sets/Sets.kt\nimport atomictest.eq\n\nfun main() {\n  val intSet = setOf(1, 1, 2, 3, 9, 9, 4)\n  // No duplicates:\n  intSet eq setOf(1, 2, 3, 4, 9)\n\n  // Element order is unimportant:\n  setOf(1, 2) eq setOf(2, 1)\n\n  // Set membership:\n  (9 in intSet) eq true\n  (99 in intSet) eq false\n\n  intSet.contains(9) eq true\n  intSet.contains(99) eq false\n\n  // Does this set contain another set?\n  intSet.containsAll(setOf(1, 9, 2)) eq true\n\n  // Set union:\n  intSet.union(setOf(3, 4, 5, 6)) eq\n    setOf(1, 2, 3, 4, 5, 6, 9)\n\n  // Set intersection:\n  intSet intersect setOf(0, 1, 2, 7, 8) eq\n    setOf(1, 2)\n\n  // Set difference:\n  intSet subtract setOf(0, 1, 9, 10) eq\n    setOf(2, 3, 4)\n  intSet - setOf(0, 1, 9, 10) eq\n    setOf(2, 3, 4)\n}\n")])])]),n("p",[e._v("This example shows:")]),e._v(" "),n("ol",[n("li",[e._v("Placing duplicate items into a "),n("code",[e._v("Set")]),e._v(" automatically removes those duplicates.")]),e._v(" "),n("li",[e._v("Element order is not important for sets. Two sets are equal if they contain the same elements.")]),e._v(" "),n("li",[e._v("Both "),n("code",[e._v("in")]),e._v(" and "),n("code",[e._v("contains()")]),e._v(" test for membership.")]),e._v(" "),n("li",[e._v("You can perform the usual Venn-diagram operations like checking for subset, union, intersection and difference, using either dot notation ("),n("code",[e._v("set.union(other)")]),e._v(") or infix notation ("),n("code",[e._v("set intersect other")]),e._v("). The functions "),n("code",[e._v("union")]),e._v(", "),n("code",[e._v("intersect")]),e._v(" and "),n("code",[e._v("subtract")]),e._v(" can be used with infix notation.")]),e._v(" "),n("li",[e._v("Set difference can be expressed with either "),n("code",[e._v("subtract()")]),e._v(" or the minus operator.")])]),e._v(" "),n("p",[e._v("To remove duplicates from a "),n("code",[e._v("List")]),e._v(", convert it to a "),n("code",[e._v("Set")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Sets/RemoveDuplicates.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(3, 3, 2, 1, 2)\n  list.toSet() eq setOf(1, 2, 3)\n  list.distinct() eq listOf(3, 2, 1)\n  \"abbcc\".toSet() eq setOf('a', 'b', 'c')\n}\n")])])]),n("p",[e._v("You can also use "),n("code",[e._v("distinct()")]),e._v(", which returns a "),n("code",[e._v("List")]),e._v(". You may call "),n("code",[e._v("toSet()")]),e._v(" on a "),n("code",[e._v("String")]),e._v(" to convert it into a set of unique characters.")]),e._v(" "),n("p",[e._v("As with "),n("code",[e._v("List")]),e._v(", Kotlin provides two creation functions for "),n("code",[e._v("Set")]),e._v(". The result of "),n("code",[e._v("setOf()")]),e._v(" is read-only. To create a mutable "),n("code",[e._v("Set")]),e._v(", use "),n("code",[e._v("mutableSetOf()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Sets/MutableSet.kt\nimport atomictest.eq\n\nfun main() {\n  val mutableSet = mutableSetOf<Int>()\n  mutableSet += 42\n  mutableSet += 42\n  mutableSet eq setOf(42)\n  mutableSet -= 42\n  mutableSet eq setOf<Int>()\n}\n")])])]),n("p",[e._v("The operators "),n("code",[e._v("+=")]),e._v(" and "),n("code",[e._v("-=")]),e._v(" add and remove elements to "),n("code",[e._v("Set")]),e._v("s, just as with "),n("code",[e._v("List")]),e._v("s.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);