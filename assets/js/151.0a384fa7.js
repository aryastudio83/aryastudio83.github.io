(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{531:function(e,n,t){"use strict";t.r(n);var a=t(44),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"enumerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enumerations"}},[e._v("#")]),e._v(" Enumerations")]),e._v(" "),t("blockquote",[t("p",[e._v("An "),t("em",[e._v("enumeration")]),e._v(" is a collection of names.")])]),e._v(" "),t("p",[e._v("Kotlin’s "),t("code",[e._v("enum class")]),e._v(" is a convenient way to manage these names:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Enumerations/Level.kt\npackage enumerations\nimport atomictest.eq\n\nenum class Level {\n  Overflow, High, Medium, Low, Empty\n}\n\nfun main() {\n  Level.Medium eq "Medium"\n}\n')])])]),t("p",[e._v("Creating an "),t("code",[e._v("enum")]),e._v(" generates "),t("code",[e._v("toString()")]),e._v("s for the "),t("code",[e._v("enum")]),e._v(" names.")]),e._v(" "),t("p",[e._v("You must qualify each reference to an enumeration name, as with "),t("code",[e._v("Level.Medium")]),e._v(" in "),t("code",[e._v("main()")]),e._v(". You can eliminate this qualification using an "),t("code",[e._v("import")]),e._v(" to bring all names from the enumeration into the current "),t("em",[e._v("namespace")]),e._v(" (namespaces keep names from colliding with each other):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Enumerations/EnumImport.kt\nimport atomictest.eq\nimport enumerations.Level.*   // [1]\n\nfun main() {\n  Overflow eq "Overflow"\n  High eq "High"\n}\n')])])]),t("ul",[t("li",[t("strong",[e._v("[1]")]),e._v(" The "),t("code",[e._v("*")]),e._v(" imports all the names inside the "),t("code",[e._v("Level")]),e._v(" enumeration, but does "),t("em",[e._v("not")]),e._v(" import the name "),t("code",[e._v("Level")]),e._v(".")])]),e._v(" "),t("p",[e._v("You can import "),t("code",[e._v("enum")]),e._v(" values into the same file where the "),t("code",[e._v("enum")]),e._v(" class is defined:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Enumerations/RecursiveEnumImport.kt\npackage enumerations\nimport atomictest.eq\nimport enumerations.Size.*            // [1]\n\nenum class Size {\n  Tiny, Small, Medium, Large, Huge, Gigantic\n}\n\nfun main() {\n  Gigantic eq "Gigantic"              // [2]\n  Size.values().toList() eq           // [3]\n    listOf(Tiny, Small, Medium,\n      Large, Huge, Gigantic)\n  Tiny.ordinal eq 0                   // [4]\n  Huge.ordinal eq 4\n}\n')])])]),t("ul",[t("li",[t("strong",[e._v("[1]")]),e._v(" We import the values of "),t("code",[e._v("Size")]),e._v(" before the "),t("code",[e._v("Size")]),e._v(" definition appears in the file.")]),e._v(" "),t("li",[t("strong",[e._v("[2]")]),e._v(" After the "),t("code",[e._v("import")]),e._v(", we no longer need to qualify access to the enumeration names.")]),e._v(" "),t("li",[t("strong",[e._v("[3]")]),e._v(" You can iterate through the enumeration names using "),t("code",[e._v("values()")]),e._v(". "),t("code",[e._v("values()")]),e._v(" returns an "),t("code",[e._v("Array")]),e._v(", so we call "),t("code",[e._v("toList()")]),e._v(" to convert it to a "),t("code",[e._v("List")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("[4]")]),e._v(" The first declared constant of an "),t("code",[e._v("enum")]),e._v(" has an "),t("code",[e._v("ordinal")]),e._v(" value of zero. Each subsequent constant receives the next integer value.")])]),e._v(" "),t("p",[e._v("You can perform different actions for different "),t("code",[e._v("enum")]),e._v(" entries using a "),t("code",[e._v("when")]),e._v(" expression. Here we import the name "),t("code",[e._v("Level")]),e._v(", as well as all its entries:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Enumerations/CheckingOptions.kt\npackage checkingoptions\nimport atomictest.*\nimport enumerations.Level\nimport enumerations.Level.*\n\nfun checkLevel(level: Level) {\n  when (level) {\n    Overflow -> trace(">>> Overflow!")\n    Empty -> trace("Alert: Empty")\n    else -> trace("Level $level OK")\n  }\n}\n\nfun main() {\n  checkLevel(Empty)\n  checkLevel(Low)\n  checkLevel(Overflow)\n  trace eq """\n    Alert: Empty\n    Level Low OK\n    >>> Overflow!\n  """\n}\n')])])]),t("p",[t("code",[e._v("checkLevel()")]),e._v(" performs specific actions for only two of the constants, while behaving ordinarily (the "),t("code",[e._v("else")]),e._v(" case) for all other options.")]),e._v(" "),t("p",[e._v("An enumeration is a special kind of class with a fixed number of instances, all listed within the class body. In other ways, an "),t("code",[e._v("enum")]),e._v(" class behaves like a regular class, so you can define member properties and functions. If you include additional elements, you must add a semicolon after the last enumeration value:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Enumerations/Direction.kt\npackage enumerations\nimport atomictest.eq\nimport enumerations.Direction.*\n\nenum class Direction(val notation: String) {\n  North("N"), South("S"),\n  East("E"), West("W");  // Semicolon required\n  val opposite: Direction\n    get() = when (this) {\n      North -> South\n      South -> North\n      West -> East\n      East -> West\n    }\n}\n\nfun main() {\n  North.notation eq "N"\n  North.opposite eq South\n  West.opposite.opposite eq West\n  North.opposite.notation eq "S"\n}\n')])])]),t("p",[e._v("The "),t("code",[e._v("Direction")]),e._v(" class contains a "),t("code",[e._v("notation")]),e._v(" property holding a different value for each instance. You pass values for the "),t("code",[e._v("notation")]),e._v(" constructor parameter in parentheses ("),t("code",[e._v('North("N")')]),e._v("), just like you construct an instance of a regular class.")]),e._v(" "),t("p",[e._v("The getter for the "),t("code",[e._v("opposite")]),e._v(" property dynamically computes the result when it is accessed.")]),e._v(" "),t("p",[e._v("Notice that "),t("code",[e._v("when")]),e._v(" doesn’t require an "),t("code",[e._v("else")]),e._v(" branch in this example, because all possible "),t("code",[e._v("enum")]),e._v(" entries are covered.")]),e._v(" "),t("ul",[t("li",[e._v("-")])]),e._v(" "),t("p",[e._v("Enumerations can make your code more readable, which is always desirable.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);