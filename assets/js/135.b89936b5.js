(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{516:function(e,n,t){"use strict";t.r(n);var a=t(44),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("blockquote",[t("p",[e._v("A "),t("em",[e._v("property")]),e._v(" is a "),t("code",[e._v("var")]),e._v(" or "),t("code",[e._v("val")]),e._v(" that’s part of a class.")])]),e._v(" "),t("p",[e._v("Defining a property "),t("em",[e._v("maintains state")]),e._v(" within a class. Maintaining state is the primary motivating reason for creating a class rather than just writing one or more standalone functions.")]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("var")]),e._v(" property can be reassigned, while a "),t("code",[e._v("val")]),e._v(" property can’t. Each object gets its own storage for properties:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Properties/Cup.kt\n\nclass Cup {\n  var percentFull = 0\n}\n\nfun main() {\n  val c1 = Cup()\n  c1.percentFull = 50\n  val c2 = Cup()\n  c2.percentFull = 100\n\n  println(c1.percentFull)\n  println(c2.percentFull)\n}\n/* Output:\n50\n100\n*/\n")])])]),t("p",[e._v("Defining a "),t("code",[e._v("var")]),e._v(" or "),t("code",[e._v("val")]),e._v(" inside a class looks just like defining it within a function. However, the "),t("code",[e._v("var")]),e._v(" or "),t("code",[e._v("val")]),e._v(" becomes "),t("em",[e._v("part")]),e._v(" of that class, and you must refer to it by specifying its object using "),t("em",[e._v("dot notation")]),e._v(", placing a dot between the object and the name of the property. You can see dot notation used for each reference to "),t("code",[e._v("percentFull")]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("percentFull")]),e._v(" property represents the state of the corresponding "),t("code",[e._v("Cup")]),e._v(" object. "),t("code",[e._v("c1.percentFull")]),e._v(" and "),t("code",[e._v("c2.percentFull")]),e._v(" contain different values, showing that each object has its own storage.")]),e._v(" "),t("p",[e._v("A member function can refer to a property within its object without using dot notation (that is, without "),t("em",[e._v("qualifying")]),e._v(" it):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Properties/Cup2.kt\n\nclass Cup2 {\n  var percentFull = 0\n  val max = 100\n  fun add(increase: Int): Int {\n    percentFull += increase\n    if (percentFull > max)\n      percentFull = max\n    return percentFull\n  }\n}\n\nfun main() {\n  val cup = Cup2()\n  cup.add(50)\n  println(cup.percentFull)\n  cup.add(70)\n  println(cup.percentFull)\n}\n/* Output:\n50\n100\n*/\n")])])]),t("p",[e._v("The "),t("code",[e._v("add()")]),e._v(" member function tries to add "),t("code",[e._v("increase")]),e._v(" to "),t("code",[e._v("percentFull")]),e._v(" but ensures that it doesn’t go past 100%.")]),e._v(" "),t("p",[e._v("You must qualify both properties and member functions from outside a class.")]),e._v(" "),t("p",[e._v("You can define top-level properties:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Properties/TopLevelProperty.kt\n\nval constant = 42\n\nvar counter = 0\n\nfun inc() {\n  counter++\n}\n")])])]),t("p",[e._v("Defining a top-level "),t("code",[e._v("val")]),e._v(" is safe because it cannot be modified. However, defining a mutable ("),t("code",[e._v("var")]),e._v(") top-level property is considered an "),t("em",[e._v("anti-pattern")]),e._v(". As your program becomes more complicated, it becomes harder to reason correctly about "),t("em",[e._v("shared mutable state")]),e._v(". If everyone in your code base can access the "),t("code",[e._v("var counter")]),e._v(", you can’t guarantee it will change correctly: while "),t("code",[e._v("inc()")]),e._v(" increases "),t("code",[e._v("counter")]),e._v(" by one, some other part of the program might decrease "),t("code",[e._v("counter")]),e._v(" by ten, producing obscure bugs. It’s best to guard mutable state within a class. In [Constraining Visibility](javascript:void(0)) you’ll see how to make it truly hidden.")]),e._v(" "),t("p",[e._v("To say that "),t("code",[e._v("var")]),e._v("s can be changed while "),t("code",[e._v("val")]),e._v("s cannot is an oversimplification. As an analogy, consider a "),t("code",[e._v("house")]),e._v(" as a "),t("code",[e._v("val")]),e._v(", and a "),t("code",[e._v("sofa")]),e._v(" inside the "),t("code",[e._v("house")]),e._v(" as a "),t("code",[e._v("var")]),e._v(". You can modify "),t("code",[e._v("sofa")]),e._v(" because it’s a "),t("code",[e._v("var")]),e._v(". You can’t reassign "),t("code",[e._v("house")]),e._v(", though, because it’s a "),t("code",[e._v("val")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Properties/ChangingAVal.kt\n\nclass House {\n  var sofa: String = ""\n}\n\nfun main() {\n  val house = House()\n  house.sofa = "Simple sleeper sofa: $89.00"\n  println(house.sofa)\n  house.sofa = "New leather sofa: $3,099.00"\n  println(house.sofa)\n  // Cannot reassign the val to a new House:\n  // house = House()\n}\n/* Output:\nSimple sleeper sofa: $89.00\nNew leather sofa: $3,099.00\n*/\n')])])]),t("p",[e._v("Although "),t("code",[e._v("house")]),e._v(" is a "),t("code",[e._v("val")]),e._v(", its object can be modified because "),t("code",[e._v("sofa")]),e._v(" in "),t("code",[e._v("class House")]),e._v(" is a "),t("code",[e._v("var")]),e._v(". Defining "),t("code",[e._v("house")]),e._v(" as a "),t("code",[e._v("val")]),e._v(" only prevents it from being reassigned to a new object.")]),e._v(" "),t("p",[e._v("If we make a property a "),t("code",[e._v("val")]),e._v(", it cannot be reassigned:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Properties/AnUnchangingVar.kt\n\nclass Sofa {\n  val cover: String = "Loveseat cover"\n}\n\nfun main() {\n  var sofa = Sofa()\n  // Not allowed:\n  // sofa.cover = "New cover"\n  // Reassigning a var:\n  sofa = Sofa()\n}\n')])])]),t("p",[e._v("Even though "),t("code",[e._v("sofa")]),e._v(" is a "),t("code",[e._v("var")]),e._v(", its object cannot be modified because "),t("code",[e._v("cover")]),e._v(" in "),t("code",[e._v("class Sofa")]),e._v(" is a "),t("code",[e._v("val")]),e._v(". However, "),t("code",[e._v("sofa")]),e._v(" can be reassigned to a new object.")]),e._v(" "),t("p",[e._v("We’ve talked about identifiers like "),t("code",[e._v("house")]),e._v(" and "),t("code",[e._v("sofa")]),e._v(" as if they were objects. They are actually "),t("em",[e._v("references")]),e._v(" to objects. One way to see this is to observe that two identifiers can refer to the same object:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Properties/References.kt\n\nclass Kitchen {\n  var table: String = "Round table"\n}\n\nfun main() {\n  val kitchen1 = Kitchen()\n  val kitchen2 = kitchen1\n  println("kitchen1: ${kitchen1.table}")\n  println("kitchen2: ${kitchen2.table}")\n  kitchen1.table = "Square table"\n  println("kitchen1: ${kitchen1.table}")\n  println("kitchen2: ${kitchen2.table}")\n}\n/* Output:\nkitchen1: Round table\nkitchen2: Round table\nkitchen1: Square table\nkitchen2: Square table\n*/\n')])])]),t("p",[e._v("When "),t("code",[e._v("kitchen1")]),e._v(" modifies "),t("code",[e._v("table")]),e._v(", "),t("code",[e._v("kitchen2")]),e._v(" sees the modification. "),t("code",[e._v("kitchen1.table")]),e._v(" and "),t("code",[e._v("kitchen2.table")]),e._v(" display the same output.")]),e._v(" "),t("p",[e._v("Remember that "),t("code",[e._v("var")]),e._v(" and "),t("code",[e._v("val")]),e._v(" control references rather than objects. A "),t("code",[e._v("var")]),e._v(" allows you to rebind a reference to a different object, and a "),t("code",[e._v("val")]),e._v(" prevents you from doing so.")]),e._v(" "),t("p",[t("em",[e._v("Mutability")]),e._v(" means an object can change its state. In the examples above, "),t("code",[e._v("class House")]),e._v(" and "),t("code",[e._v("class Kitchen")]),e._v(" define mutable objects while "),t("code",[e._v("class Sofa")]),e._v(" defines immutable objects.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);