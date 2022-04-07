(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{520:function(e,a,t){"use strict";t.r(a);var n=t(44),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"variable-argument-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variable-argument-lists"}},[e._v("#")]),e._v(" Variable Argument Lists")]),e._v(" "),t("blockquote",[t("p",[e._v("The "),t("code",[e._v("vararg")]),e._v(" keyword produces a flexibly-sized argument list.")])]),e._v(" "),t("p",[e._v("In [Lists](javascript:void(0)) we introduced "),t("code",[e._v("listOf()")]),e._v(", which takes any number of parameters and produces a "),t("code",[e._v("List")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Varargs/ListOf.kt\nimport atomictest.eq\n\nfun main() {\n  listOf(1) eq "[1]"\n  listOf("a", "b") eq "[a, b]"\n}\n')])])]),t("p",[e._v("Using the "),t("code",[e._v("vararg")]),e._v(" keyword, you can define a function that takes any number of arguments, just like "),t("code",[e._v("listOf()")]),e._v(" does. "),t("code",[e._v("vararg")]),e._v(" is short for "),t("em",[e._v("variable argument list")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Varargs/VariableArgList.kt\npackage varargs\n\nfun v(s: String, vararg d: Double) {}\n\nfun main() {\n  v("abc", 1.0, 2.0)\n  v("def", 1.0, 2.0, 3.0, 4.0)\n  v("ghi", 1.0, 2.0, 3.0, 4.0, 5.0, 6.0)\n}\n')])])]),t("p",[e._v("A function definition may specify only one parameter as "),t("code",[e._v("vararg")]),e._v(". Although it’s possible to specify any item in the parameter list as "),t("code",[e._v("vararg")]),e._v(", it’s usually simplest to do it for the last one.")]),e._v(" "),t("p",[t("code",[e._v("vararg")]),e._v(" allows you to pass any number (including zero) of arguments. All arguments must be of the specified type. "),t("code",[e._v("vararg")]),e._v(" arguments are accessed using the parameter name, which becomes an "),t("code",[e._v("Array")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Varargs/VarargSum.kt\npackage varargs\nimport atomictest.eq\n\nfun sum(vararg numbers: Int): Int {\n  var total = 0\n  for (n in numbers) {\n    total += n\n  }\n  return total\n}\n\nfun main() {\n  sum(13, 27, 44) eq 84\n  sum(1, 3, 5, 7, 9, 11) eq 36\n  sum() eq 0\n}\n")])])]),t("p",[e._v("Although "),t("code",[e._v("Array")]),e._v("s and "),t("code",[e._v("List")]),e._v("s look similar, they are implemented differently—"),t("code",[e._v("List")]),e._v(" is a regular library class while "),t("code",[e._v("Array")]),e._v(" has special low-level support. "),t("code",[e._v("Array")]),e._v(" comes from Kotlin’s requirement for compatibility with other languages, especially Java.")]),e._v(" "),t("p",[e._v("In day-to-day programming, use a "),t("code",[e._v("List")]),e._v(" when you need a simple sequence. Use "),t("code",[e._v("Array")]),e._v("s only when a third-party API requires an "),t("code",[e._v("Array")]),e._v(", or when you’re dealing with "),t("code",[e._v("vararg")]),e._v("s.")]),e._v(" "),t("p",[e._v("In most cases you can just ignore the fact that "),t("code",[e._v("vararg")]),e._v(" produces an "),t("code",[e._v("Array")]),e._v(" and treat it as if it were a "),t("code",[e._v("List")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Varargs/VarargLikeList.kt\npackage varargs\nimport atomictest.eq\n\nfun evaluate(vararg ints: Int) =\n  "Size: ${ints.size}\\n" +\n  "Sum: ${ints.sum()}\\n" +\n  "Average: ${ints.average()}"\n\nfun main() {\n  evaluate(10, -3, 8, 1, 9) eq """\n    Size: 5\n    Sum: 25\n    Average: 5.0\n  """\n}\n')])])]),t("p",[e._v("You can pass an "),t("code",[e._v("Array")]),e._v(" of elements wherever a "),t("code",[e._v("vararg")]),e._v(" is accepted. To create an "),t("code",[e._v("Array")]),e._v(", use "),t("code",[e._v("arrayOf()")]),e._v(" in the same way you use "),t("code",[e._v("listOf()")]),e._v(". Note that an "),t("code",[e._v("Array")]),e._v(" is always mutable. To convert an "),t("code",[e._v("Array")]),e._v(" into a sequence of arguments (not just a single element of type "),t("code",[e._v("Array")]),e._v("), use the "),t("em",[e._v("spread operator")]),e._v(", "),t("code",[e._v("*")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Varargs/SpreadOperator.kt\nimport varargs.sum\nimport atomictest.eq\n\nfun main() {\n  val array = intArrayOf(4, 5)\n  sum(1, 2, 3, *array, 6) eq 21  // [1]\n  // Doesn't compile:\n  // sum(1, 2, 3, array, 6)\n\n  val list = listOf(9, 10, 11)\n  sum(*list.toIntArray()) eq 30  // [2]\n}\n")])])]),t("p",[e._v("If you pass an "),t("code",[e._v("Array")]),e._v(" of primitive types (like "),t("code",[e._v("Int")]),e._v(", "),t("code",[e._v("Double")]),e._v(" or "),t("code",[e._v("Boolean")]),e._v(") as in the example above, the "),t("code",[e._v("Array")]),e._v(" creation function must be specifically typed. If you use "),t("code",[e._v("arrayOf(4, 5)")]),e._v(" instead of "),t("code",[e._v("intArrayOf(4, 5)")]),e._v(", line "),t("code",[e._v("[1]")]),e._v(" will produce an error complaining that "),t("em",[e._v("inferred type is "),t("code",[e._v("Array<Int>")]),e._v(" but IntArray was expected")]),e._v(".")]),e._v(" "),t("p",[e._v("The spread operator only works with arrays. If you have a "),t("code",[e._v("List")]),e._v(" that you want to pass as a sequence of arguments, first convert it to an "),t("code",[e._v("Array")]),e._v(" and then apply the spread operator, as in "),t("strong",[e._v("[2]")]),e._v(". Because the result is an "),t("code",[e._v("Array")]),e._v(" of a primitive type, we must again use the specific conversion function "),t("code",[e._v("toIntArray()")]),e._v(".")]),e._v(" "),t("p",[e._v("The spread operator is especially helpful when you must pass "),t("code",[e._v("vararg")]),e._v(" arguments to another function that also expects "),t("code",[e._v("vararg")]),e._v("s:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Varargs/TwoFunctionsWithVarargs.kt\npackage varargs\nimport atomictest.eq\n\nfun first(vararg numbers: Int): String {\n  var result = ""\n  for (i in numbers) {\n    result += "[$i]"\n  }\n  return result\n}\n\nfun second(vararg numbers: Int) =\n  first(*numbers)\n\nfun main() {\n  second(7, 9, 32) eq "[7][9][32]"\n}\n')])])]),t("h3",{attrs:{id:"command-line-arguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line-arguments"}},[e._v("#")]),e._v(" Command-Line Arguments")]),e._v(" "),t("p",[e._v("When invoking a program on the command line, you can pass it a variable number of arguments. To capture command-line arguments, you must provide a particular parameter to "),t("code",[e._v("main()")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Varargs/MainArgs.kt\n\nfun main(args: Array<String>) {\n  for (a in args) {\n    println(a)\n  }\n}\n")])])]),t("p",[e._v("The parameter is traditionally called "),t("code",[e._v("args")]),e._v(" (although you can call it anything), and the type for "),t("code",[e._v("args")]),e._v(" can only be "),t("code",[e._v("Array<String>")]),e._v(" ("),t("code",[e._v("Array")]),e._v(" of "),t("code",[e._v("String")]),e._v(").")]),e._v(" "),t("p",[e._v("If you are using IntelliJ IDEA, you can pass program arguments by editing the corresponding “Run configuration,” as shown in the last exercise for this atom.")]),e._v(" "),t("p",[e._v("You can also use the "),t("code",[e._v("kotlinc")]),e._v(" compiler to produce a command-line program. If "),t("code",[e._v("kotlinc")]),e._v(" isn’t on your computer, follow the instructions on the "),t("a",{attrs:{href:"https://kotlinlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kotlin main site"),t("OutboundLink")],1),e._v(". Once you’ve entered and saved the code for "),t("code",[e._v("MainArgs.kt")]),e._v(", type the following at a command prompt:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kotlinc MainArgs.kt\n")])])]),t("p",[e._v("You provide the command-line arguments following the program invocation, like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kotlin MainArgsKt hamster 42 3.14159\n")])])]),t("p",[e._v("You’ll see this output:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("hamster\n42\n3.14159\n")])])]),t("p",[e._v("If you want to turn a "),t("code",[e._v("String")]),e._v(" parameter into a specific type, Kotlin provides conversion functions, such as a "),t("code",[e._v("toInt()")]),e._v(" for converting to an "),t("code",[e._v("Int")]),e._v(", and "),t("code",[e._v("toFloat()")]),e._v(" for converting to a "),t("code",[e._v("Float")]),e._v(". Using these assumes that the command-line arguments appear in a particular order. Here, the program expects a "),t("code",[e._v("String")]),e._v(", followed by something convertible to an "),t("code",[e._v("Int")]),e._v(", followed by something convertible to a "),t("code",[e._v("Float")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Varargs/MainArgConversion.kt\n\nfun main(args: Array<String>) {\n  if (args.size < 3) return\n  val first = args[0]\n  val second = args[1].toInt()\n  val third = args[2].toFloat()\n  println("$first  $second  $third")\n}\n')])])]),t("p",[e._v("The first line in "),t("code",[e._v("main()")]),e._v(" quits the program if there aren’t enough arguments. If you don’t provide something convertible to an "),t("code",[e._v("Int")]),e._v(" and a "),t("code",[e._v("Float")]),e._v(" as the second and third command-line arguments, you will see runtime errors (try it to see the errors).")]),e._v(" "),t("p",[e._v("Compile and run "),t("code",[e._v("MainArgConversion.kt")]),e._v(" with the same command-line arguments we used before, and you’ll see:")]),e._v(" "),t("p",[t("code",[e._v("hamster 42 3.14159")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);