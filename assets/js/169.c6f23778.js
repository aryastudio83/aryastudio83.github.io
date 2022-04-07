(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{549:function(n,e,t){"use strict";t.r(e);var a=t(44),o=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"local-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-functions"}},[n._v("#")]),n._v(" Local Functions")]),n._v(" "),t("blockquote",[t("p",[n._v("You can define functions anywhere—even inside other functions.")])]),n._v(" "),t("p",[n._v("Named functions defined within other functions are called "),t("em",[n._v("local functions")]),n._v(". Local functions reduce duplication by extracting repetitive code. At the same time, they  are only visible within the surrounding function, so they don’t “pollute your namespace.” Here, even though "),t("code",[n._v("log()")]),n._v(" is defined just like any other function, it’s "),t("em",[n._v("nested")]),n._v(" inside "),t("code",[n._v("main()")]),n._v(":")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/LocalFunctions.kt\nimport atomictest.eq\n\nfun main() {\n  val logMsg = StringBuilder()\n  fun log(message: String) =\n    logMsg.appendLine(message)\n  log("Starting computation")\n  val x = 42  // Imitate computation\n  log("Computation result: $x")\n  logMsg.toString() eq """\n    Starting computation\n    Computation result: 42\n  """\n}\n')])])]),t("p",[n._v("Local functions are "),t("em",[n._v("closures")]),n._v(": they capture "),t("code",[n._v("var")]),n._v("s or "),t("code",[n._v("val")]),n._v("s from the surrounding environment that would otherwise have to be passed as additional parameters. "),t("code",[n._v("log()")]),n._v(" uses "),t("code",[n._v("logMsg")]),n._v(", which is defined in its outer scope. This way, you don’t repeatedly pass "),t("code",[n._v("logMsg")]),n._v(" into "),t("code",[n._v("log()")]),n._v(".")]),n._v(" "),t("p",[n._v("You can create local extension functions:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/LocalExtensions.kt\nimport atomictest.eq\n\nfun main() {\n  fun String.exclaim() = "$this!"\n  "Hello".exclaim() eq "Hello!"\n  "Hallo".exclaim() eq "Hallo!"\n  "Bonjour".exclaim() eq "Bonjour!"\n  "Ciao".exclaim() eq "Ciao!"\n}\n')])])]),t("p",[t("code",[n._v("exclaim()")]),n._v(" is available only inside "),t("code",[n._v("main()")]),n._v(".")]),n._v(" "),t("p",[n._v("Here is a demonstration class and example values for use in this atom:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/Session.kt\npackage localfunctions\n\nclass Session(\n  val title: String,\n  val speaker: String\n)\n\nval sessions = listOf(Session(\n  "Kotlin Coroutines", "Roman Elizarov"))\n\nval favoriteSpeakers = setOf("Roman Elizarov")\n')])])]),t("p",[n._v("You can refer to a local function using a function reference:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/LocalFunctionReference.kt\nimport localfunctions.*\nimport atomictest.eq\n\nfun main() {\n  fun interesting(session: Session): Boolean {\n    if (session.title.contains("Kotlin") &&\n      session.speaker in favoriteSpeakers) {\n      return true\n    }\n    // ... more checks\n    return false\n  }\n  sessions.any(::interesting) eq true\n}\n')])])]),t("p",[t("code",[n._v("interesting()")]),n._v(" is only used once, so we might be inclined to define it as a lambda. As you will see later in this atom, the "),t("code",[n._v("return")]),n._v(" expressions within "),t("code",[n._v("interesting()")]),n._v(" complicate the task of turning it into a lambda. We can avoid this complication with an "),t("em",[n._v("anonymous function")]),n._v(". Like local functions, anonymous functions are defined within other functions—however, an anonymous function has no name. Anonymous functions are conceptually similar to lambdas but use the "),t("code",[n._v("fun")]),n._v(" keyword. Here’s "),t("code",[n._v("LocalFunctionReference.kt")]),n._v(" rewritten using an anonymous function:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/InterestingSessions.kt\nimport localfunctions.*\nimport atomictest.eq\n\nfun main() {\n  sessions.any(\n    fun(session: Session): Boolean {    // [1]\n      if (session.title.contains("Kotlin") &&\n        session.speaker in favoriteSpeakers) {\n        return true\n      }\n      // ... more checks\n      return false\n    }) eq true\n}\n')])])]),t("ul",[t("li",[t("strong",[n._v("[1]")]),n._v(" An anonymous function looks like a regular function without a function name. Here, the anonymous function is passed as an argument to "),t("code",[n._v("sessions.any()")]),n._v(".")])]),n._v(" "),t("p",[n._v("If a lambda becomes too complicated and hard to read, replace it with a local function or an anonymous function.")]),n._v(" "),t("h3",{attrs:{id:"labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[n._v("#")]),n._v(" Labels")]),n._v(" "),t("p",[n._v("Here, "),t("code",[n._v("forEach()")]),n._v(" acts upon a lambda containing a "),t("code",[n._v("return")]),n._v(":")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/ReturnFromFun.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 2, 3, 4, 5)\n  val value = 3\n  var result = ""\n  list.forEach {\n    result += "$it"\n    if (it == value) {\n      result eq "123"\n      return                   // [1]\n    }\n  }\n  result eq "Never gets here"  // [2]\n}\n')])])]),t("p",[n._v("A "),t("code",[n._v("return")]),n._v(" expression exits a function defined using "),t("code",[n._v("fun")]),n._v(" (that is, not a lambda). In line "),t("strong",[n._v("[1]")]),n._v(" this means returning from "),t("code",[n._v("main()")]),n._v(". Line "),t("strong",[n._v("[2]")]),n._v(" is never called and you see no output.")]),n._v(" "),t("p",[n._v("To return "),t("em",[n._v("only")]),n._v(" from a lambda, and not from the surrounding function, use a "),t("em",[n._v("labeled "),t("code",[n._v("return")])]),n._v(":")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/LabeledReturn.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 2, 3, 4, 5)\n  val value = 3\n  var result = ""\n  list.forEach {\n    result += "$it"\n    if (it == value) return@forEach\n  }\n  result eq "12345"\n}\n')])])]),t("p",[n._v("Here, the label is the name of the function that called the lambda. The labeled return expression "),t("code",[n._v("return@forEach")]),n._v(" tells it to return "),t("em",[n._v("only")]),n._v(" to the name "),t("code",[n._v("forEach")]),n._v(".")]),n._v(" "),t("p",[n._v("You can create a label by preceeding the lambda with "),t("code",[n._v("label@")]),n._v(", where "),t("code",[n._v("label")]),n._v(" can be any name:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/CustomLabel.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(1, 2, 3, 4, 5)\n  val value = 3\n  var result = ""\n  list.forEach tag@{             // [1]\n    result += "$it"\n    if (it == value) return@tag  // [2]\n  }\n  result eq "12345"\n}\n')])])]),t("ul",[t("li",[t("strong",[n._v("[1]")]),n._v(" This lambda is labeled "),t("code",[n._v("tag")]),n._v(".")]),n._v(" "),t("li",[t("strong",[n._v("[2]")]),n._v(" "),t("code",[n._v("return@tag")]),n._v(" returns from the lambda, not from "),t("code",[n._v("main()")]),n._v(".")])]),n._v(" "),t("p",[n._v("Let’s replace the anonymous function in "),t("code",[n._v("InterestingSessions.kt")]),n._v(" with a lambda:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/ReturnInsideLambda.kt\nimport localfunctions.*\nimport atomictest.eq\n\nfun main() {\n  sessions.any { session ->\n    if (session.title.contains("Kotlin") &&\n      session.speaker in favoriteSpeakers) {\n      return@any true\n    }\n    // ... more checks\n    false\n  } eq true\n}\n')])])]),t("p",[n._v("We must "),t("code",[n._v("return")]),n._v(" to a label so it exits only the lambda and not "),t("code",[n._v("main()")]),n._v(".")]),n._v(" "),t("h3",{attrs:{id:"manipulating-local-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manipulating-local-functions"}},[n._v("#")]),n._v(" Manipulating Local Functions")]),n._v(" "),t("p",[n._v("You can store a lambda or an anonymous function in a "),t("code",[n._v("var")]),n._v(" or "),t("code",[n._v("val")]),n._v(", then use that identifier to call the function. To store a local function, use a function reference (see [Member References](javascript:void(0))).")]),n._v(" "),t("p",[n._v("In the following example, "),t("code",[n._v("first()")]),n._v(" creates an anonymous function, "),t("code",[n._v("second()")]),n._v(" uses a lambda, and "),t("code",[n._v("third()")]),n._v(" returns a reference to a local function. "),t("code",[n._v("fourth()")]),n._v(" achieves the same effect as "),t("code",[n._v("third()")]),n._v(" but uses a more compact expression body. "),t("code",[n._v("fifth()")]),n._v(" produces the same effect using a lambda:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// LocalFunctions/ReturningFunc.kt\npackage localfunctions\nimport atomictest.eq\n\nfun first(): (Int) -> Int {\n  val func = fun(i: Int) = i + 1\n  func(1) eq 2\n  return func\n}\n\nfun second(): (String) -> String {\n  val func2 = { s: String -> "$s!" }\n  func2("abc") eq "abc!"\n  return func2\n}\n\nfun third(): () -> String {\n  fun greet() = "Hi!"\n  return ::greet\n}\n\nfun fourth() = fun() = "Hi!"\n\nfun fifth() = { "Hi!" }\n\nfun main() {\n  val funRef1: (Int) -> Int = first()\n  val funRef2: (String) -> String = second()\n  val funRef3: () -> String = third()\n  val funRef4: () -> String = fourth()\n  val funRef5: () -> String = fifth()\n\n  funRef1(42) eq 43\n  funRef2("xyz") eq "xyz!"\n  funRef3() eq "Hi!"\n  funRef4() eq "Hi!"\n  funRef5() eq "Hi!"\n\n  first()(42) eq 43\n  second()("xyz") eq "xyz!"\n  third()() eq "Hi!"\n  fourth()() eq "Hi!"\n  fifth()() eq "Hi!"\n}\n')])])]),t("p",[t("code",[n._v("main()")]),n._v(" first verifies that calling each function does indeed return a function reference of the expected type. Each "),t("code",[n._v("funRef")]),n._v(" is then called with an appropriate argument. Finally, each function is called and then the returned function reference is immediately called by adding an appropriate argument list. For example, calling "),t("code",[n._v("first()")]),n._v(" returns a function, so we call "),t("em",[n._v("that")]),n._v(" function by appending the argument list "),t("code",[n._v("(42)")]),n._v(".")]),n._v(" "),t("p",[t("em",[t("strong",[n._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);