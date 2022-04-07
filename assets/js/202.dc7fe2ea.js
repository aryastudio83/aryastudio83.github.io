(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{586:function(e,t,a){"use strict";a.r(t);var n=a(44),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"property-delegation-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property-delegation-tools"}},[e._v("#")]),e._v(" Property Delegation Tools")]),e._v(" "),a("blockquote",[a("p",[e._v("The standard library contains special property delegation operations.")])]),e._v(" "),a("p",[a("code",[e._v("Map")]),e._v(" is one of the few types in the Kotlin library that is preconfigured to be used as a delegated property. A single "),a("code",[e._v("Map")]),e._v(" can be used to store all the properties in a class. Each property identifier becomes a "),a("code",[e._v("String")]),e._v(" key for the map, and the property’s type is captured in the associated value:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// DelegationTools/CarService.kt\npackage propertydelegation\nimport atomictest.eq\n\nclass Driver(\n  map: MutableMap<String, Any?>\n) {\n  var name: String by map\n  var age: Int by map\n  var id: String by map\n  var available: Boolean by map\n  var coord: Pair<Double, Double> by map\n}\n\nfun main() {\n  val info = mutableMapOf<String, Any?>(\n    "name" to "Bruno Fiat",\n    "age" to 22,\n    "id" to "X97C111",\n    "available" to false,\n    "coord" to Pair(111.93, 1231.12)\n  )\n  val driver = Driver(info)\n  driver.available eq false\n  driver.available = true\n  info eq "{name=Bruno Fiat, age=22, " +\n    "id=X97C111, available=true, " +\n    "coord=(111.93, 1231.12)}"\n}\n')])])]),a("p",[e._v("Notice that the original "),a("code",[e._v("Map")]),e._v(" "),a("code",[e._v("info")]),e._v(" is modified when setting "),a("code",[e._v("driver.available = true")]),e._v(". This works because the Kotlin standard library contains "),a("code",[e._v("Map")]),e._v(" extension functions "),a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(" that enable property delegation. These simplified versions show how they work:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// DelegationTools/MapAccessors.kt\npackage delegationtools\nimport kotlin.reflect.KProperty\n\noperator fun MutableMap<String, Any>.getValue(\n  thisRef: Any?, property: KProperty<*>\n): Any? {\n  return this[property.name]\n}\n\noperator fun MutableMap<String, Any>.setValue(\n  thisRef: Any?, property: KProperty<*>,\n  value: Any\n) {\n  this[property.name] = value\n}\n")])])]),a("p",[e._v("To see the actual library definitions, put the cursor on the "),a("code",[e._v("by")]),e._v(" keyword in IntelliJ IDEA or Android Studio and invoke "),a("a",{attrs:{href:"https://www.jetbrains.com/help/idea/navigating-through-the-source-code.html#go_to_declaration",target:"_blank",rel:"noopener noreferrer"}},[e._v("“Go to Declaration”"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("Delegates.observable()")]),e._v(" observes modifications of a mutable property. Here, we trace old and new values:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// DelegationTools/Team.kt\npackage delegationtools\nimport kotlin.properties.Delegates.observable\nimport atomictest.eq\n\nclass Team {\n  var msg = ""\n  var captain: String by observable("<0>") {\n    prop, old, new ->\n      msg += "${prop.name} $old to $new "\n  }\n}\n\nfun main() {\n  val team = Team()\n  team.captain = "Adam"\n  team.captain = "Amanda"\n  team.msg eq "captain <0> to Adam " +\n    "captain Adam to Amanda"\n}\n')])])]),a("p",[a("code",[e._v("observable()")]),e._v(" takes two arguments:")]),e._v(" "),a("ol",[a("li",[e._v("The initial value for the property; "),a("code",[e._v('"<0>"')]),e._v(" in this case.")]),e._v(" "),a("li",[e._v("A function which is the action to perform when the property is modified. Here, we use a lambda. The function arguments are the property being changed, the current value of that property, and the value it’s being changed to.")])]),e._v(" "),a("p",[a("code",[e._v("Delegates.vetoable()")]),e._v(" allows you to prevent a change to a property if the new property value doesn’t satisfy the given predicate. Here, "),a("code",[e._v("aName()")]),e._v(" insists that the team captain’s name begin with the letter “A”:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// DelegationTools/TeamWithTraditions.kt\npackage delegationtools\nimport atomictest.*\nimport kotlin.properties.Delegates\nimport kotlin.reflect.KProperty\n\nfun aName(\n  property: KProperty<*>,\n  old: String,\n  new: String\n) = if (new.startsWith("A")) {\n  trace("$old -> $new")\n  true\n} else {\n  trace("Name must start with \'A\'")\n  false\n}\n\ninterface Captain {\n  var captain: String\n}\n\nclass TeamWithTraditions : Captain {\n  override var captain: String\n    by Delegates.vetoable("Adam", ::aName)\n}\n\nclass TeamWithTraditions2 : Captain {\n  override var captain: String\n    by Delegates.vetoable("Adam") {\n      _, old, new ->\n        if (new.startsWith("A")) {\n          trace("$old -> $new")\n          true\n        } else {\n          trace("Name must start with \'A\'")\n          false\n        }\n    }\n}\n\nfun main() {\n  listOf(\n    TeamWithTraditions(),\n    TeamWithTraditions2()\n  ).forEach {\n    it.captain = "Amanda"\n    it.captain = "Bill"\n    it.captain eq "Amanda"\n  }\n  trace eq """\n    Adam -> Amanda\n    Name must start with \'A\'\n    Adam -> Amanda\n    Name must start with \'A\'\n  """\n}\n')])])]),a("p",[a("code",[e._v("Delegates.vetoable()")]),e._v(" takes two arguments: the initial value for the property, and an "),a("code",[e._v("onChange()")]),e._v(" function, which is "),a("code",[e._v("::aName")]),e._v(" in this example. "),a("code",[e._v("onChange()")]),e._v(" takes three arguments: "),a("code",[e._v("property: KProperty<*>")]),e._v(", the "),a("code",[e._v("old")]),e._v(" value currently held by the property, and the "),a("code",[e._v("new")]),e._v(" value being placed in the property. The function returns a "),a("code",[e._v("Boolean")]),e._v(" indicating whether the change is successful or prevented.")]),e._v(" "),a("p",[a("code",[e._v("TeamWithTraditions2")]),e._v(" defines "),a("code",[e._v("Delegates.vetoable()")]),e._v(" using a lambda instead of the function "),a("code",[e._v("aName()")]),e._v(".")]),e._v(" "),a("p",[e._v("The remaining tool in "),a("code",[e._v("properties.Delegates")]),e._v(" is "),a("code",[e._v("notNull()")]),e._v(", which produces a property that must be initialized before it can be read:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// DelegationTools/NeverNull.kt\npackage delegationtools\nimport atomictest.*\nimport kotlin.properties.Delegates\n\nclass NeverNull {\n  var nn: Int by Delegates.notNull()\n}\n\nfun main() {\n  val non = NeverNull()\n  capture {\n    non.nn\n  } eq "IllegalStateException: Property " +\n    "nn should be initialized before get."\n  non.nn = 11\n  non.nn eq 11\n}\n')])])]),a("p",[e._v("Trying to read "),a("code",[e._v("non.nn")]),e._v(" before "),a("code",[e._v("nn")]),e._v(" has been assigned a value produces an exception. After "),a("code",[e._v("nn")]),e._v(" has been assigned, you can successfully read it.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);