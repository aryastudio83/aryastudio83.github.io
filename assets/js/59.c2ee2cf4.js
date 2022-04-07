(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{432:function(e,t,n){"use strict";n.r(t);var o=n(44),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"extension-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extension-functions"}},[e._v("#")]),e._v(" Extension Functions")]),e._v(" "),n("blockquote",[n("p",[e._v("Suppose you discover a library that does everything you need … almost. If it only had one or two additional member functions, it would solve your problem perfectly.")])]),e._v(" "),n("p",[e._v("But it’s not your code—either you don’t have access to the source code or you don’t control it. You’d have to repeat your modifications every time a new version came out.")]),e._v(" "),n("p",[e._v("Kotlin’s "),n("em",[e._v("extension functions")]),e._v(" effectively add member functions to existing classes. The type you extend is called the "),n("em",[e._v("receiver")]),e._v(". To define an extension function, you precede the function name with the receiver type:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("fun ReceiverType.extensionFunction() { ... }\n")])])]),n("p",[e._v("This adds two extension functions to the "),n("code",[e._v("String")]),e._v(" class:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ExtensionFunctions/Quoting.kt\npackage extensionfunctions\nimport atomictest.eq\n\nfun String.singleQuote() = "\'$this\'"\nfun String.doubleQuote() = "\\"$this\\""\n\nfun main() {\n  "Hi".singleQuote() eq "\'Hi\'"\n  "Hi".doubleQuote() eq "\\"Hi\\""\n}\n')])])]),n("p",[e._v("You call extension functions as if they were members of the class.")]),e._v(" "),n("p",[e._v("To use extensions from another package, you must import them:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ExtensionFunctions/Quote.kt\npackage other\nimport atomictest.eq\nimport extensionfunctions.doubleQuote\nimport extensionfunctions.singleQuote\n\nfun main() {\n  "Single".singleQuote() eq "\'Single\'"\n  "Double".doubleQuote() eq "\\"Double\\""\n}\n')])])]),n("p",[e._v("You can access member functions or other extensions using the "),n("code",[e._v("this")]),e._v(" keyword. "),n("code",[e._v("this")]),e._v(" can also be omitted in the same way it can be omitted inside a class, so you don’t need explicit qualification:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ExtensionFunctions/StrangeQuote.kt\npackage extensionfunctions\nimport atomictest.eq\n\n// Apply two sets of single quotes:\nfun String.strangeQuote() =\n  this.singleQuote().singleQuote()  // [1]\n\nfun String.tooManyQuotes() =\n  doubleQuote().doubleQuote()       // [2]\n\nfun main() {\n  "Hi".strangeQuote() eq "\'\'Hi\'\'"\n  "Hi".tooManyQuotes() eq "\\"\\"Hi\\"\\""\n}\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" "),n("code",[e._v("this")]),e._v(" refers to the "),n("code",[e._v("String")]),e._v(" receiver.")]),e._v(" "),n("li",[n("strong",[e._v("[2]")]),e._v(" We omit the receiver object ("),n("code",[e._v("this")]),e._v(") of the first "),n("code",[e._v("doubleQuote()")]),e._v(" function call.")])]),e._v(" "),n("p",[e._v("Creating extensions to your own classes can sometimes produce simpler code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// ExtensionFunctions/BookExtensions.kt\npackage extensionfunctions\nimport atomictest.eq\n\nclass Book(val title: String)\n\nfun Book.categorize(category: String) =\n  """title: "$title", category: $category"""\n\nfun main() {\n  Book("Dracula").categorize("Vampire") eq\n    """title: "Dracula", category: Vampire"""\n}\n')])])]),n("p",[e._v("Inside "),n("code",[e._v("categorize()")]),e._v(", we access the "),n("code",[e._v("title")]),e._v(" property without explicit qualification.")]),e._v(" "),n("ul",[n("li",[e._v("-")])]),e._v(" "),n("p",[e._v("Note that extension functions can only access "),n("code",[e._v("public")]),e._v(" elements of the type being extended. Thus, extensions can only perform the same actions as regular functions. You can rewrite "),n("code",[e._v("Book.categorize(String)")]),e._v(" as "),n("code",[e._v("categorize(Book, String)")]),e._v(". The only reason for using an extension function is the syntax, but this syntax sugar is powerful. To the calling code, extensions look the same as member functions, and IDEs show extensions when listing the functions that you can call for an object.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);