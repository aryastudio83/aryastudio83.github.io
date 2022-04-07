(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{584:function(e,t,a){"use strict";a.r(t);var n=a(44),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"property-delegation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property-delegation"}},[e._v("#")]),e._v(" Property Delegation")]),e._v(" "),a("blockquote",[a("p",[e._v("A property can delegate its accessor logic.")])]),e._v(" "),a("p",[e._v("You connect a property to a delegate with the "),a("code",[e._v("by")]),e._v(" keyword:")]),e._v(" "),a("p",[a("code",[e._v("val/var property by delegate")])]),e._v(" "),a("p",[e._v("The delegate’s class must contain a "),a("code",[e._v("getValue()")]),e._v(" function if the property is a "),a("code",[e._v("val")]),e._v(" (read only) or "),a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(" functions if the property is a "),a("code",[e._v("var")]),e._v(" (read/write). First consider the read-only case:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// PropertyDelegation/BasicRead.kt\npackage propertydelegation\nimport atomictest.eq\nimport kotlin.reflect.KProperty\n\nclass Readable(val i: Int) {\n  val value: String by BasicRead()\n}\n\nclass BasicRead {\n  operator fun getValue(\n    r: Readable,\n    property: KProperty<*>\n  ) = "getValue: ${r.i}"\n}\n\nfun main() {\n  val x = Readable(11)\n  val y = Readable(17)\n  x.value eq "getValue: 11"\n  y.value eq "getValue: 17"\n}\n')])])]),a("p",[a("code",[e._v("value")]),e._v(" in "),a("code",[e._v("Readable")]),e._v(" is delegated to a "),a("code",[e._v("BasicRead")]),e._v(" object. "),a("code",[e._v("getValue()")]),e._v(" takes a "),a("code",[e._v("Readable")]),e._v(" parameter that allows it to access the "),a("code",[e._v("Readable")]),e._v("—when you say "),a("code",[e._v("by")]),e._v(" it binds the "),a("code",[e._v("BasicRead")]),e._v(" to the whole "),a("code",[e._v("Readable")]),e._v(" object. Notice that "),a("code",[e._v("getValue()")]),e._v(" accesses "),a("code",[e._v("i")]),e._v(" in "),a("code",[e._v("Readable")]),e._v(".")]),e._v(" "),a("p",[e._v("Because "),a("code",[e._v("getValue()")]),e._v(" returns a "),a("code",[e._v("String")]),e._v(", the type of "),a("code",[e._v("value")]),e._v(" must also be "),a("code",[e._v("String")]),e._v(".")]),e._v(" "),a("p",[e._v("The second "),a("code",[e._v("getValue()")]),e._v(" parameter "),a("code",[e._v("property")]),e._v(" is of the special type "),a("code",[e._v("KProperty")]),e._v(", and this provides reflective information about the delegated property.")]),e._v(" "),a("p",[e._v("If the delegated property is a "),a("code",[e._v("var")]),e._v(", it must handle both reading and writing, so the delegate class requires both "),a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// PropertyDelegation/BasicReadWrite.kt\npackage propertydelegation\nimport atomictest.eq\nimport kotlin.reflect.KProperty\n\nclass ReadWriteable(var i: Int) {\n  var msg = ""\n  var value: String by BasicReadWrite()\n}\n\nclass BasicReadWrite {\n  operator fun getValue(\n    rw: ReadWriteable,\n    property: KProperty<*>\n  ) = "getValue: ${rw.i}"\n  operator fun setValue(\n    rw: ReadWriteable,\n    property: KProperty<*>,\n    s: String\n  ) {\n    rw.i = s.toIntOrNull() ?: 0\n    rw.msg = "setValue to ${rw.i}"\n  }\n}\n\nfun main() {\n  val x = ReadWriteable(11)\n  x.value eq "getValue: 11"\n  x.value = "99"\n  x.msg eq "setValue to 99"\n  x.value eq "getValue: 99"\n}\n')])])]),a("p",[e._v("The first two "),a("code",[e._v("setValue()")]),e._v(" parameters are the same as "),a("code",[e._v("getValue()")]),e._v(", and the third is the value on the right side of the "),a("code",[e._v("=")]),e._v(", which is what we want to set. Both "),a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(" must agree on the type that is read and written, which in this case is "),a("code",[e._v("String")]),e._v(" (the type of "),a("code",[e._v("value")]),e._v(" in "),a("code",[e._v("ReadWriteable")]),e._v(").")]),e._v(" "),a("p",[e._v("Notice that "),a("code",[e._v("setValue()")]),e._v(" accesses "),a("code",[e._v("i")]),e._v(" in "),a("code",[e._v("ReadWriteable")]),e._v(", and also "),a("code",[e._v("msg")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("BasicRead.kt")]),e._v(" and "),a("code",[e._v("BasicReadWrite.kt")]),e._v(" do not implement an "),a("code",[e._v("interface")]),e._v(". A class can be used as a delegate if it simply conforms to the convention of having the necessary function(s) with the necessary signature(s). However, you can also implement the "),a("code",[e._v("ReadOnlyProperty")]),e._v(" "),a("code",[e._v("interface")]),e._v(", as seen here in "),a("code",[e._v("BasicRead2")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// PropertyDelegation/BasicRead2.kt\npackage propertydelegation\nimport atomictest.eq\nimport kotlin.properties.ReadOnlyProperty\nimport kotlin.reflect.KProperty\n\nclass Readable2(val i: Int) {\n  val value: String by BasicRead2()\n  // SAM conversion:\n  val value2: String by\n  ReadOnlyProperty { _, _ -> "getValue: $i" }\n}\n\nclass BasicRead2 :\n  ReadOnlyProperty<Readable2, String> {\n  override operator fun getValue(\n    thisRef: Readable2,\n    property: KProperty<*>\n  ) = "getValue: ${thisRef.i}"\n}\n\nfun main() {\n  val x = Readable2(11)\n  val y = Readable2(17)\n  x.value eq "getValue: 11"\n  x.value2 eq "getValue: 11"\n  y.value eq "getValue: 17"\n  y.value2 eq "getValue: 17"\n}\n')])])]),a("p",[e._v("Implementing "),a("code",[e._v("ReadOnlyProperty")]),e._v(" communicates to the reader that "),a("code",[e._v("BasicRead2")]),e._v(" can be used as a delegate and ensures a proper "),a("code",[e._v("getValue()")]),e._v(" definition.")]),e._v(" "),a("p",[e._v("Because "),a("code",[e._v("ReadOnlyProperty")]),e._v(" has only a single member function (and it has been defined as a "),a("code",[e._v("fun interface")]),e._v(" in the standard library), "),a("code",[e._v("value2")]),e._v(" is defined much more succinctly using a [SAM conversion](javascript:void(0)).")]),e._v(" "),a("p",[a("code",[e._v("BasicReadWrite.kt")]),e._v(" can be modified to implement "),a("code",[e._v("ReadWriteProperty")]),e._v(", ensuring proper "),a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(" definitions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// PropertyDelegation/BasicReadWrite2.kt\npackage propertydelegation\nimport atomictest.eq\nimport kotlin.properties.ReadWriteProperty\nimport kotlin.reflect.KProperty\n\nclass ReadWriteable2(var i: Int) {\n  var msg = ""\n  var value: String by BasicReadWrite2()\n}\n\nclass BasicReadWrite2 :\n  ReadWriteProperty<ReadWriteable2, String> {\n  override operator fun getValue(\n    rw: ReadWriteable2,\n    property: KProperty<*>\n  ) = "getValue: ${rw.i}"\n  override operator fun setValue(\n    rw: ReadWriteable2,\n    property: KProperty<*>,\n    s: String\n  ) {\n    rw.i = s.toIntOrNull() ?: 0\n    rw.msg = "setValue to ${rw.i}"\n  }\n}\n\nfun main() {\n  val x = ReadWriteable2(11)\n  x.value eq "getValue: 11"\n  x.value = "99"\n  x.msg eq "setValue to 99"\n  x.value eq "getValue: 99"\n}\n')])])]),a("p",[e._v("Thus, a delegate class must contain either or both of the following functions, which are called when the delegated property is accessed:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For reading:")]),e._v(" "),a("p",[a("code",[e._v("operator fun getValue(thisRef: T, property: KProperty<*>): V")])])]),e._v(" "),a("li",[a("p",[e._v("For writing:")]),e._v(" "),a("p",[a("code",[e._v("setValue(thisRef: T, property: KProperty<*>, value: V)")])])])]),e._v(" "),a("p",[e._v("If the delegated property is a "),a("code",[e._v("val")]),e._v(", only the first function is required and "),a("code",[e._v("ReadOnlyProperty")]),e._v(" can be implemented using a [SAM conversion](javascript:void(0)).")]),e._v(" "),a("p",[e._v("The parameters are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("thisRef: T")]),e._v(" points to the delegate object, where "),a("code",[e._v("T")]),e._v(" is the type of that delegate. If you don’t want to use "),a("code",[e._v("thisRef")]),e._v(" in the function, you can effectively disable it by using "),a("code",[e._v("Any?")]),e._v(" for "),a("code",[e._v("T")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("property: KProperty<*>")]),e._v(" provides information about the property itself. The most commonly-used is "),a("code",[e._v("name")]),e._v(", which produces the field name of the delegated property.")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(" is the value stored by "),a("code",[e._v("setValue()")]),e._v(" into the delegated property. "),a("code",[e._v("V")]),e._v(" is the type of that property.")])]),e._v(" "),a("p",[a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(" can either be defined by convention, or written as implementations of "),a("code",[e._v("ReadOnlyProperty")]),e._v(" or "),a("code",[e._v("ReadWriteProperty")]),e._v(".")]),e._v(" "),a("p",[e._v("To enable access to "),a("code",[e._v("private")]),e._v(" elements, nest the delegate class:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// PropertyDelegation/Accessibility.kt\npackage propertydelegation\nimport atomictest.eq\nimport kotlin.properties.ReadOnlyProperty\nimport kotlin.reflect.KProperty\n\nclass Person(\n  private val first: String,\n  private val last: String\n) {\n  val name by     // SAM conversion:\n  ReadOnlyProperty<Person, String> { _, _ ->\n    "$first $last"\n  }\n}\n\nfun main() {\n  val alien = Person("Floopy", "Noopers")\n  alien.name eq "Floopy Noopers"\n}\n')])])]),a("p",[e._v("Assuming adequate access to the elements in the delegating class, "),a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(" can be written as extension functions:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// PropertyDelegation/Add.kt\npackage propertydelegation2\nimport atomictest.eq\nimport kotlin.reflect.KProperty\n\nclass Add(val a: Int, val b: Int) {\n  val sum by Sum()\n}\n\nclass Sum\n\noperator fun Sum.getValue(\n  thisRef: Add,\n  property: KProperty<*>\n) = thisRef.a + thisRef.b\n\nfun main() {\n  val addition = Add(144, 12)\n  addition.sum eq 156\n}\n")])])]),a("p",[e._v("This way you can use an existing class that you are unable to modify or inherit and still delegate a property with it.")]),e._v(" "),a("p",[e._v("Here, when you set the value of the property, the number stored is the Fibonacci number for that value, using the "),a("code",[e._v("fibonacci()")]),e._v(" function from the [Recursion](javascript:void(0)) atom:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// PropertyDelegation/FibonacciProperty.kt\npackage propertydelegation\nimport kotlin.properties.ReadWriteProperty\nimport kotlin.reflect.KProperty\nimport recursion.fibonacci\nimport atomictest.eq\n\nclass Fibonacci :\n  ReadWriteProperty<Any?, Long> {\n  private var current: Long = 0\n  override operator fun getValue(\n    thisRef: Any?,\n    property: KProperty<*>\n  ) = current\n  override operator fun setValue(\n    thisRef: Any?,\n    property: KProperty<*>,\n    value: Long\n  ) {\n    current = fibonacci(value.toInt())\n  }\n}\n\nfun main() {\n  var fib by Fibonacci()\n  fib eq 0L\n  fib = 22L\n  fib eq 17711L\n  fib = 90L\n  fib eq 2880067194370816120L\n}\n")])])]),a("p",[a("code",[e._v("fib")]),e._v(" in "),a("code",[e._v("main()")]),e._v(" is a "),a("em",[e._v("local delegated property")]),e._v("—it’s defined inside a function rather than a class. A delegated property can also be defined at file scope.")]),e._v(" "),a("p",[a("code",[e._v("ReadWriteProperty")]),e._v("’s first generic argument can be "),a("code",[e._v("Any?")]),e._v(" because we never use it to access anything inside "),a("code",[e._v("Fibonacci")]),e._v(", which would require specific type information. Instead we manipulate the "),a("code",[e._v("current")]),e._v(" property as we can in any member function.")]),e._v(" "),a("p",[e._v("In most of the examples we’ve seen so far, the first parameter of "),a("code",[e._v("getValue()")]),e._v(" and "),a("code",[e._v("setValue()")]),e._v(" are of a specific type. Those delegates were tied to that specific type. Sometimes it is possible to create a general-purpose delegate by ignoring the first type as "),a("code",[e._v("Any?")]),e._v(". For example, suppose we’d like to store each delegated "),a("code",[e._v("String")]),e._v(" property in a text file named for that property:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// PropertyDelegation/FileDelegate.kt\npackage propertydelegation\nimport kotlin.properties.ReadWriteProperty\nimport kotlin.reflect.KProperty\nimport checkinstructions.DataFile\n\nclass FileDelegate :\n  ReadWriteProperty<Any?, String> {\n  override fun getValue(\n    thisRef: Any?,\n    property: KProperty<*>\n  ): String {\n    val file =\n      DataFile(property.name + ".txt")\n    return if (file.exists())\n      file.readText()\n    else ""\n  }\n  override fun setValue(\n    thisRef: Any?,\n    property: KProperty<*>,\n    value: String\n  ) {\n    DataFile(property.name + ".txt")\n      .writeText(value)\n  }\n}\n')])])]),a("p",[e._v("This delegate only needs to interact with the file, and doesn’t need anything through "),a("code",[e._v("thisRef")]),e._v(". We ignore "),a("code",[e._v("thisRef")]),e._v(" by typing it as "),a("code",[e._v("Any?")]),e._v(", because "),a("code",[e._v("Any?")]),e._v(" has no interesting operations. We "),a("em",[e._v("are")]),e._v(" interested in "),a("code",[e._v("property.name")]),e._v(", which is the name of the field. Now we can automatically create a file associated with each property and store that property’s data in that file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// PropertyDelegation/Configuration.kt\npackage propertydelegation\nimport checkinstructions.DataFile\nimport atomictest.eq\n\nclass Configuration {\n  var user by FileDelegate()\n  var id by FileDelegate()\n  var project by FileDelegate()\n}\n\nfun main() {\n  val config = Configuration()\n  config.user = "Luciano"\n  config.id = "Ramalho47"\n  config.project = "MyLittlePython"\n  DataFile("user.txt").readText() eq "Luciano"\n  DataFile("id.txt").readText() eq "Ramalho47"\n  DataFile("project.txt").readText() eq\n    "MyLittlePython"\n}\n')])])]),a("p",[e._v("Because it can ignore the surrounding type, "),a("code",[e._v("FileDelegate")]),e._v(" is reusable.")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);