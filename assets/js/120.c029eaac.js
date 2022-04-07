(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{499:function(e,t,n){"use strict";n.r(t);var a=n(44),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"hello-world"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[e._v("#")]),e._v(" Hello, World!")]),e._v(" "),n("blockquote",[n("p",[e._v("“Hello, world!” is a program commonly used to demonstrate the basic syntax of programming languages.")])]),e._v(" "),n("p",[e._v("We develop this program in several steps so you understand its parts.")]),e._v(" "),n("p",[e._v("First, let’s examine an empty program that does nothing at all:")]),e._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// HelloWorld/EmptyProgram.kt")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fun")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Program code here ...")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[e._v("The example starts with a "),n("em",[e._v("comment")]),e._v(", which is illuminating text that is ignored by Kotlin. "),n("code",[e._v("//")]),e._v(" (two forward slashes) begins a comment that goes to the end of the current line:")]),e._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Single-line comment")]),e._v("\n")])])]),n("p",[e._v("Kotlin ignores the "),n("code",[e._v("//")]),e._v(" and everything after it until the end of the line. On the following line, it pays attention again.")]),e._v(" "),n("p",[e._v("The first line of each example in this book is a comment starting with the name of the the subdirectory containing the source-code file (Here, "),n("code",[e._v("HelloWorld")]),e._v(") followed by the name of the file: "),n("code",[e._v("EmptyProgram.kt")]),e._v(". The example subdirectory for each atom corresponds to the name of that atom.")]),e._v(" "),n("p",[n("em",[e._v("keywords")]),e._v(" are reserved by the language and given special meaning. The keyword "),n("code",[e._v("fun")]),e._v(" is short for "),n("em",[e._v("function")]),e._v(". A function is a collection of code that can be executed using that function’s name (we spend a lot of time on functions throughout the book). The function’s name follows the "),n("code",[e._v("fun")]),e._v(" keyword, so in this case it’s "),n("code",[e._v("main()")]),e._v(" (in prose, we follow the function name with parentheses).")]),e._v(" "),n("p",[n("code",[e._v("main()")]),e._v(" is actually a special name for a function; it indicates the “entry point” for a Kotlin program. A Kotlin program can have many functions with many different names, but "),n("code",[e._v("main()")]),e._v(" is the one that’s automatically called when you execute the program.")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("parameter list")]),e._v(" follows the function name and is enclosed by parentheses. Here, we don’t pass anything into "),n("code",[e._v("main()")]),e._v(" so the parameter list is empty.")]),e._v(" "),n("p",[e._v("The "),n("em",[e._v("function body")]),e._v(" appears after the parameter list. It begins with an opening brace ("),n("code",[e._v("{")]),e._v(") and ends with a closing brace ("),n("code",[e._v("}")]),e._v("). The function body contains "),n("em",[e._v("statements")]),e._v(" and "),n("em",[e._v("expressions")]),e._v(". A statement produces an effect, and an expression yields a result.")]),e._v(" "),n("p",[n("code",[e._v("EmptyProgram.kt")]),e._v(" contains no statements or expressions in the body, just a comment.")]),e._v(" "),n("p",[e._v("Let’s make the program display “Hello, world!” by adding a line in the "),n("code",[e._v("main()")]),e._v(" body:")]),e._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// HelloWorld/HelloWorld.kt")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fun")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello, world!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Output:\nHello, world!\n*/")]),e._v("\n")])])]),n("p",[e._v("The line that displays the greeting begins with "),n("code",[e._v("println()")]),e._v(". Like "),n("code",[e._v("main()")]),e._v(", "),n("code",[e._v("println()")]),e._v(" is a function. This line "),n("em",[e._v("calls")]),e._v(" the function, which executes its body. You give the function name, followed by parentheses containing one or more parameters. In this book, when referring to a function in the prose, we add parentheses after the name as a reminder that it is a function. Here, we say "),n("code",[e._v("println()")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("println()")]),e._v(" takes a single parameter, which is a "),n("code",[e._v("String")]),e._v(". You define a "),n("code",[e._v("String")]),e._v(" by putting characters inside quotes.")]),e._v(" "),n("p",[n("code",[e._v("println()")]),e._v(" moves the cursor to a new line after displaying its parameter, so subsequent output appears on the next line. You can use "),n("code",[e._v("print()")]),e._v(" instead, which leaves the cursor on the same line.")]),e._v(" "),n("p",[e._v("Unlike some languages, you don’t need a semicolon at the end of an expression in Kotlin. It’s only necessary if you put more than one expression on a single line (this is discouraged).")]),e._v(" "),n("p",[e._v("For some examples in the book, we show the output at the end of the listing, inside a "),n("em",[e._v("multiline comment")]),e._v(". A multiline comment starts with a "),n("code",[e._v("/*")]),e._v(" (a forward slash followed by an asterisk) and continues—including line breaks (which we call "),n("em",[e._v("newlines")]),e._v(")—until a "),n("code",[e._v("*/")]),e._v(" (an asterisk followed by a forward slash) ends the comment:")]),e._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* A multiline comment\nDoesn't care\nabout newlines */")]),e._v("\n")])])]),n("p",[e._v("It’s possible to add code on the same line "),n("em",[e._v("after")]),e._v(" the closing "),n("code",[e._v("*/")]),e._v(" of a comment, but it’s confusing, so people don’t usually do it.")]),e._v(" "),n("p",[e._v("Comments add information that isn’t obvious from reading the code. If comments only repeat what the code says, they become annoying and people start ignoring them. When code changes, programmers often forget to update comments, so it’s good practice to use comments judiciously, mainly for highlighting tricky aspects of your code.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);