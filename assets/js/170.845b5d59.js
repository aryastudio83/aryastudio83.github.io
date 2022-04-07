(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{550:function(e,t,n){"use strict";n.r(t);var s=n(44),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"folding-lists"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#folding-lists"}},[e._v("#")]),e._v(" Folding Lists")]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("fold()")]),e._v(" combines all elements of a list, in order, to generate a single result.")])]),e._v(" "),n("p",[e._v("A common exercise is to implement operations such as "),n("code",[e._v("sum()")]),e._v(" or "),n("code",[e._v("reverse()")]),e._v(" using "),n("code",[e._v("fold()")]),e._v(". Here, "),n("code",[e._v("fold()")]),e._v(" sums a sequence:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// FoldingLists/SumViaFold.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 10, 100, 1000)\n  list.fold(0) { sum, n ->\n    sum + n\n  } eq 1111\n}\n")])])]),n("p",[n("code",[e._v("fold()")]),e._v(" takes the initial value (its argument, "),n("code",[e._v("0")]),e._v(" in this case) and successively applies the operation (expressed here as a lambda) to combine the current accumulated value with each element. "),n("code",[e._v("fold()")]),e._v(" first adds "),n("code",[e._v("0")]),e._v(" (the initial value) and "),n("code",[e._v("1")]),e._v(" to get "),n("code",[e._v("1")]),e._v(". That becomes the "),n("code",[e._v("sum")]),e._v(", which is then added to the "),n("code",[e._v("10")]),e._v(" to get "),n("code",[e._v("11")]),e._v(", which becomes the new "),n("code",[e._v("sum")]),e._v(". The operation is repeated for two more elements: "),n("code",[e._v("100")]),e._v(" and "),n("code",[e._v("1000")]),e._v(". This produces "),n("code",[e._v("111")]),e._v(" and "),n("code",[e._v("1111")]),e._v(". The "),n("code",[e._v("fold()")]),e._v(" will stop when there is nothing else in the list, returning the final "),n("code",[e._v("sum")]),e._v(" of "),n("code",[e._v("1111")]),e._v(". Of course, "),n("code",[e._v("fold()")]),e._v(" doesn’t really know it’s doing a “sum”—the choice of identifier name was ours, to make it easier to understand.")]),e._v(" "),n("p",[e._v("To illuminate the steps in a "),n("code",[e._v("fold()")]),e._v(", here’s "),n("code",[e._v("SumViaFold.kt")]),e._v(" using an ordinary "),n("code",[e._v("for")]),e._v(" loop:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// FoldingLists/FoldVsForLoop.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 10, 100, 1000)\n  var accumulator = 0\n  val operation =\n    { sum: Int, i: Int -> sum + i }\n  for (i in list) {\n    accumulator = operation(accumulator, i)\n  }\n  accumulator eq 1111\n}\n")])])]),n("p",[n("code",[e._v("fold()")]),e._v(" accumulates values by successively applying "),n("code",[e._v("operation")]),e._v(" to combine the current element with the accumulator value.")]),e._v(" "),n("p",[e._v("Although "),n("code",[e._v("fold()")]),e._v(" is an important concept and the only way to accumulate values in pure functional languages, you may sometimes still use an ordinary "),n("code",[e._v("for")]),e._v(" loop in Kotlin.")]),e._v(" "),n("p",[n("code",[e._v("foldRight()")]),e._v(" processes elements starting from right to left, as opposed to "),n("code",[e._v("fold()")]),e._v(" which processes the elements from left to right. This example demonstrates the difference:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// FoldingLists/FoldRight.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(\'a\', \'b\', \'c\', \'d\')\n  list.fold("*") { acc, elem ->\n    "($acc) + $elem"\n  } eq "((((*) + a) + b) + c) + d"\n  list.foldRight("*") { elem, acc ->\n    "$elem + ($acc)"\n  } eq "a + (b + (c + (d + (*))))"\n}\n')])])]),n("p",[n("code",[e._v("fold()")]),e._v(" first applies the operation to "),n("code",[e._v("a")]),e._v(", as we can see in "),n("code",[e._v("(*) + a")]),e._v(", while "),n("code",[e._v("foldRight()")]),e._v(" first processes the right-hand element "),n("code",[e._v("d")]),e._v(", and processes "),n("code",[e._v("a")]),e._v(" last.")]),e._v(" "),n("p",[n("code",[e._v("fold()")]),e._v(" and "),n("code",[e._v("foldRight()")]),e._v(" take an explicit accumulator value as the first argument. Sometimes the first element can act as an initial value. "),n("code",[e._v("reduce()")]),e._v(" and "),n("code",[e._v("reduceRight()")]),e._v(" behave like "),n("code",[e._v("fold()")]),e._v(" and "),n("code",[e._v("foldRight()")]),e._v(" but use the first and last element, respectively, as the initial value:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// FoldingLists/ReduceAndReduceRight.kt\nimport atomictest.eq\n\nfun main() {\n  val chars = "A B C D E F G H I".split(" ")\n  chars.fold("X") { a, e -> "$a $e"} eq\n    "X A B C D E F G H I"\n  chars.foldRight("X") { a, e -> "$a $e" } eq\n    "A B C D E F G H I X"\n  chars.reduce { a, e -> "$a $e" } eq\n    "A B C D E F G H I"\n  chars.reduceRight { a, e -> "$a $e" } eq\n    "A B C D E F G H I"\n}\n')])])]),n("p",[n("code",[e._v("runningFold()")]),e._v(" and "),n("code",[e._v("runningReduce()")]),e._v(" produce a "),n("code",[e._v("List")]),e._v(" containing all the intermediate steps of the process. The final value in the "),n("code",[e._v("List")]),e._v(" is the result of the "),n("code",[e._v("fold()")]),e._v(" or "),n("code",[e._v("reduce()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// FoldingLists/RunningFold.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(11, 13, 17, 19)\n  list.fold(7) { sum, n ->\n    sum + n\n  } eq 67\n  list.runningFold(7) { sum, n ->\n    sum + n\n  } eq "[7, 18, 31, 48, 67]"\n  list.reduce { sum, n ->\n    sum + n\n  } eq 60\n  list.runningReduce { sum, n ->\n    sum + n\n  } eq "[11, 24, 41, 60]"\n}\n')])])]),n("p",[n("code",[e._v("runningFold()")]),e._v(" first stores the initial value ("),n("code",[e._v("7")]),e._v("), then stores each intermediate result. "),n("code",[e._v("runningReduce()")]),e._v(" keeps track of each "),n("code",[e._v("sum")]),e._v(" value.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);