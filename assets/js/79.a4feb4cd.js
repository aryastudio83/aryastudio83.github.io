(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{450:function(e,n,t){"use strict";t.r(n);var a=t(44),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"manipulating-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manipulating-lists"}},[e._v("#")]),e._v(" Manipulating Lists")]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Zipping")]),e._v(" and "),t("em",[e._v("flattening")]),e._v(" are two common operations that manipulate "),t("code",[e._v("List")]),e._v("s.")])]),e._v(" "),t("h3",{attrs:{id:"zipping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zipping"}},[e._v("#")]),e._v(" Zipping")]),e._v(" "),t("p",[t("code",[e._v("zip()")]),e._v(" combines two "),t("code",[e._v("List")]),e._v("s by mimicking the behavior of the zipper on your jacket, pairing adjacent "),t("code",[e._v("List")]),e._v(" elements:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// ManipulatingLists/Zipper.kt\nimport atomictest.eq\n\nfun main() {\n  val left = listOf("a", "b", "c", "d")\n  val right = listOf("q", "r", "s", "t")\n\n  left.zip(right) eq                 // [1]\n    "[(a, q), (b, r), (c, s), (d, t)]"\n\n  left.zip(0..4) eq                  // [2]\n    "[(a, 0), (b, 1), (c, 2), (d, 3)]"\n\n  (10..100).zip(right) eq            // [3]\n    "[(10, q), (11, r), (12, s), (13, t)]"\n}\n')])])]),t("ul",[t("li",[t("strong",[e._v("[1]")]),e._v(" Zipping "),t("code",[e._v("left")]),e._v(" with "),t("code",[e._v("right")]),e._v(" results in a "),t("code",[e._v("List")]),e._v(" of "),t("code",[e._v("Pair")]),e._v("s, combining each element in "),t("code",[e._v("left")]),e._v(" with its corresponding element in "),t("code",[e._v("right")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("[2]")]),e._v(" You can also "),t("code",[e._v("zip()")]),e._v(" a "),t("code",[e._v("List")]),e._v(" with a range.")]),e._v(" "),t("li",[t("strong",[e._v("[3]")]),e._v(" The range "),t("code",[e._v("10..100")]),e._v(" is much larger than "),t("code",[e._v("right")]),e._v(", but the zipping process stops when one sequence runs out.")])]),e._v(" "),t("p",[t("code",[e._v("zip()")]),e._v(" can also perform an operation on each "),t("code",[e._v("Pair")]),e._v(" it creates:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// ManipulatingLists/ZipAndTransform.kt\npackage manipulatinglists\nimport atomictest.eq\n\ndata class Person(\n  val name: String,\n  val id: Int\n)\n\nfun main() {\n  val names = listOf("Bob", "Jill", "Jim")\n  val ids = listOf(1731, 9274, 8378)\n  names.zip(ids) { name, id ->\n    Person(name, id)\n  } eq "[Person(name=Bob, id=1731), " +\n    "Person(name=Jill, id=9274), " +\n    "Person(name=Jim, id=8378)]"\n}\n')])])]),t("p",[t("code",[e._v("names.zip(ids) { ... }")]),e._v(" produces a sequence of name-id "),t("code",[e._v("Pair")]),e._v("s, and applies the lambda to each "),t("code",[e._v("Pair")]),e._v(". The result is a "),t("code",[e._v("List")]),e._v(" of initialized "),t("code",[e._v("Person")]),e._v(" objects.")]),e._v(" "),t("p",[e._v("To zip two adjacent elements from a single "),t("code",[e._v("List")]),e._v(", use "),t("code",[e._v("zipWithNext()")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// ManipulatingLists/ZippingWithNext.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf('a', 'b', 'c', 'd')\n\n  list.zipWithNext() eq listOf(\n    Pair('a', 'b'),\n    Pair('b', 'c'),\n    Pair('c', 'd'))\n\n  list.zipWithNext { a, b -> \"$a$b\" } eq\n    \"[ab, bc, cd]\"\n}\n")])])]),t("p",[e._v("The second call to "),t("code",[e._v("zipWithNext()")]),e._v(" performs an additional operation after zipping.")]),e._v(" "),t("h3",{attrs:{id:"flattening"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flattening"}},[e._v("#")]),e._v(" Flattening")]),e._v(" "),t("p",[t("code",[e._v("flatten()")]),e._v(" takes a "),t("code",[e._v("List")]),e._v(" containing elements that are themselves "),t("code",[e._v("List")]),e._v("s—a "),t("code",[e._v("List")]),e._v(" of "),t("code",[e._v("List")]),e._v("s—and flattens it into a "),t("code",[e._v("List")]),e._v(" of single elements:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// ManipulatingLists/Flatten.kt\nimport atomictest.eq\n\nfun main() {\n  val list = listOf(\n    listOf(1, 2),\n    listOf(4, 5),\n    listOf(7, 8),\n  )\n  list.flatten() eq "[1, 2, 4, 5, 7, 8]"\n}\n')])])]),t("p",[t("code",[e._v("flatten()")]),e._v(" helps us understand another important operation on collections: "),t("code",[e._v("flatMap()")]),e._v(". Let’s produce all possible "),t("code",[e._v("Pair")]),e._v("s of a range of "),t("code",[e._v("Int")]),e._v("s:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// ManipulatingLists/FlattenAndFlatMap.kt\nimport atomictest.eq\n\nfun main() {\n  val intRange = 1..3\n\n  intRange.map { a ->          // [1]\n    intRange.map { b -> a to b }\n  } eq "[" +\n    "[(1, 1), (1, 2), (1, 3)], " +\n    "[(2, 1), (2, 2), (2, 3)], " +\n    "[(3, 1), (3, 2), (3, 3)]" +\n    "]"\n\n  intRange.map { a ->          // [2]\n    intRange.map { b -> a to b }\n  }.flatten() eq "[" +\n    "(1, 1), (1, 2), (1, 3), " +\n    "(2, 1), (2, 2), (2, 3), " +\n    "(3, 1), (3, 2), (3, 3)" +\n    "]"\n\n  intRange.flatMap { a ->      // [3]\n    intRange.map { b -> a to b }\n  } eq "[" +\n    "(1, 1), (1, 2), (1, 3), " +\n    "(2, 1), (2, 2), (2, 3), " +\n    "(3, 1), (3, 2), (3, 3)" +\n    "]"\n}\n')])])]),t("p",[e._v("The lambda in each case is identical: every "),t("code",[e._v("intRange")]),e._v(" element is combined with every "),t("code",[e._v("intRange")]),e._v(" element to produce all possible "),t("code",[e._v("a to b")]),e._v(" "),t("code",[e._v("Pair")]),e._v("s. But in "),t("strong",[e._v("[1]")]),e._v(", "),t("code",[e._v("map()")]),e._v(" helpfully preserves the extra information that we have produced three "),t("code",[e._v("List")]),e._v("s, one for each element in "),t("code",[e._v("intRange")]),e._v(". There are situations where this extra information is essential, but here we don’t want it—we just need a single flat "),t("code",[e._v("List")]),e._v(" of all combinations, with no additional structure.")]),e._v(" "),t("p",[e._v("There are two options. "),t("strong",[e._v("[2]")]),e._v(" shows the application of the "),t("code",[e._v("flatten()")]),e._v(" function to remove this additional structure and flatten the result into a single "),t("code",[e._v("List")]),e._v(", which is an acceptable approach. However, this is such a common task that Kotlin provides a combined operation called "),t("code",[e._v("flatMap()")]),e._v(", which performs both "),t("code",[e._v("map()")]),e._v(" and "),t("code",[e._v("flatten()")]),e._v(" with a single call. "),t("strong",[e._v("[3]")]),e._v(" shows "),t("code",[e._v("flatMap()")]),e._v(" in action. You’ll find "),t("code",[e._v("flatMap()")]),e._v(" in most languages that support functional programming.")]),e._v(" "),t("p",[e._v("Here’s a second example of "),t("code",[e._v("flatMap()")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// ManipulatingLists/WhyFlatMap.kt\npackage manipulatinglists\nimport atomictest.eq\n\nclass Book(\n  val title: String,\n  val authors: List<String>\n)\n\nfun main() {\n  val books = listOf(\n    Book("1984", listOf("George Orwell")),\n    Book("Ulysses", listOf("James Joyce"))\n  )\n  books.map { it.authors }.flatten() eq\n    listOf("George Orwell", "James Joyce")\n  books.flatMap { it.authors } eq\n    listOf("George Orwell", "James Joyce")\n}\n')])])]),t("p",[e._v("We’d like a "),t("code",[e._v("List")]),e._v(" of authors. "),t("code",[e._v("map()")]),e._v(" produces a "),t("code",[e._v("List")]),e._v(" of "),t("code",[e._v("List")]),e._v(" of authors, which isn’t very convenient. "),t("code",[e._v("flatten()")]),e._v(" takes that and produces a simple "),t("code",[e._v("List")]),e._v(". "),t("code",[e._v("flatMap()")]),e._v(" produces the same results in a single step.")]),e._v(" "),t("p",[e._v("Here, we use "),t("code",[e._v("map()")]),e._v(" and "),t("code",[e._v("flatMap()")]),e._v(" to combine the "),t("code",[e._v("enum")]),e._v("s "),t("code",[e._v("Suit")]),e._v(" and "),t("code",[e._v("Rank")]),e._v(", producing a deck of "),t("code",[e._v("Card")]),e._v("s:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// ManipulatingLists/PlayingCards.kt\npackage manipulatinglists\nimport kotlin.random.Random\nimport atomictest.*\n\nenum class Suit {\n  Spade, Club, Heart, Diamond\n}\n\nenum class Rank(val faceValue: Int) {\n  Ace(1), Two(2), Three(3), Four(4), Five(5),\n  Six(6), Seven(7), Eight(8), Nine(9),\n  Ten(10), Jack(10), Queen(10), King(10)\n}\n\nclass Card(val rank: Rank, val suit: Suit) {\n  override fun toString() =\n    \"$rank of ${suit}s\"\n}\n\nval deck: List<Card> =\n  Suit.values().flatMap { suit ->\n    Rank.values().map { rank ->\n      Card(rank, suit)\n    }\n  }\n\nfun main() {\n  val rand = Random(26)\n  repeat(7) {\n    trace(\"'${deck.random(rand)}'\")\n  }\n  trace eq \"\"\"\n    'Jack of Hearts' 'Four of Hearts'\n    'Five of Clubs' 'Seven of Clubs'\n    'Jack of Diamonds' 'Ten of Spades'\n    'Seven of Spades'\n  \"\"\"\n}\n")])])]),t("p",[e._v("In the initialization of "),t("code",[e._v("deck")]),e._v(", the inner "),t("code",[e._v("Rank.values().map")]),e._v(" produces four "),t("code",[e._v("List")]),e._v("s, one for each "),t("code",[e._v("Suit")]),e._v(", so we use "),t("code",[e._v("flatMap()")]),e._v(" on the outer loop to produce a "),t("code",[e._v("List<Card>")]),e._v(" for "),t("code",[e._v("deck")]),e._v(".")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);