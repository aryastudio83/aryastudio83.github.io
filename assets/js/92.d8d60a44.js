(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{469:function(e,n,t){"use strict";t.r(n);var a=t(44),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"inheritance-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inheritance-extensions"}},[e._v("#")]),e._v(" Inheritance & Extensions")]),e._v(" "),t("blockquote",[t("p",[e._v("Inheritance is sometimes used to add functions to a class as a way to reuse it for a new purpose. This can lead to code that is difficult to understand and maintain.")])]),e._v(" "),t("p",[e._v("Suppose someone has created a "),t("code",[e._v("Heater")]),e._v(" class along with functions that act upon a "),t("code",[e._v("Heater")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/Heater.kt\npackage inheritanceextensions\nimport atomictest.eq\n\nopen class Heater {\n  fun heat(temperature: Int) =\n    "heating to $temperature"\n}\n\nfun warm(heater: Heater) {\n  heater.heat(70) eq "heating to 70"\n}\n')])])]),t("p",[e._v("For the sake of argument, imagine that "),t("code",[e._v("Heater")]),e._v(" is far more complex than this, and that there are many adjunct functions such as "),t("code",[e._v("warm()")]),e._v(". We don’t want to modify this library—we want to reuse it as-is.")]),e._v(" "),t("p",[e._v("If what we actually want is an "),t("code",[e._v("HVAC")]),e._v(" (Heating, Ventilation and Air Conditioning) system, we can inherit "),t("code",[e._v("Heater")]),e._v(" and add a "),t("code",[e._v("cool()")]),e._v(" function.  The existing "),t("code",[e._v("warm()")]),e._v(" function, and all other functions that act upon a "),t("code",[e._v("Heater")]),e._v(", still work with our new "),t("code",[e._v("HVAC")]),e._v(" type—which would not be true if we had used composition:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/InheritAdd.kt\npackage inheritanceextensions\nimport atomictest.eq\n\nclass HVAC : Heater() {\n  fun cool(temperature: Int) =\n    "cooling to $temperature"\n}\n\nfun warmAndCool(hvac: HVAC) {\n  hvac.heat(70) eq "heating to 70"\n  hvac.cool(60) eq "cooling to 60"\n}\n\nfun main() {\n  val heater = Heater()\n  val hvac = HVAC()\n  warm(heater)\n  warm(hvac)\n  warmAndCool(hvac)\n}\n')])])]),t("p",[e._v("This seems practical: "),t("code",[e._v("Heater")]),e._v(" didn’t do everything we wanted, so we inherited "),t("code",[e._v("HVAC")]),e._v(" from "),t("code",[e._v("Heater")]),e._v(" and tacked on another function.")]),e._v(" "),t("p",[e._v("As you saw in [Upcasting](javascript:void(0)), object-oriented languages have a mechanism to deal with member functions added during inheritance: the added functions are trimmed off during upcasting and are unavailable to the base class. This is the "),t("em",[e._v("Liskov Substitution Principle")]),e._v(", "),t("em",[e._v("aka")]),e._v(" “Substitutability,” which says functions that accept a base class must be able to use objects of derived classes without knowing it. Substitutability is why "),t("code",[e._v("warm()")]),e._v(" still works on an "),t("code",[e._v("HVAC")]),e._v(".")]),e._v(" "),t("p",[e._v("Although modern OO programming "),t("em",[e._v("allows")]),e._v(" the addition of functions during inheritance, this can be a “code smell”—it appears to be reasonable and expedient but can lead you into trouble. Just because it seems to work doesn’t mean it’s a good idea. In particular, it might negatively impact a later maintainer of the code (which might be you). This kind of problem is called "),t("em",[e._v("technical debt")]),e._v(".")]),e._v(" "),t("p",[e._v("Adding functions during inheritance can be useful when the new class is rigorously treated as a base class throughout your system, ignoring the fact that it has its own bases. In [Type Checking](javascript:void(0)) you’ll see more examples where adding functions during inheritance can be a viable technique.")]),e._v(" "),t("p",[e._v("What we really wanted when creating the "),t("code",[e._v("HVAC")]),e._v(" class was a "),t("code",[e._v("Heater")]),e._v(" class with an added "),t("code",[e._v("cool()")]),e._v(" function so it works with "),t("code",[e._v("warmAndCool()")]),e._v(". This is exactly what an extension function does, without inheritance:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/ExtensionFuncs.kt\npackage inheritanceextensions2\nimport inheritanceextensions.Heater\nimport atomictest.eq\n\nfun Heater.cool(temperature: Int) =\n  "cooling to $temperature"\n\nfun warmAndCool(heater: Heater) {\n  heater.heat(70) eq "heating to 70"\n  heater.cool(60) eq "cooling to 60"\n}\n\nfun main() {\n  val heater = Heater()\n  warmAndCool(heater)\n}\n')])])]),t("p",[e._v("Instead of inheriting to extend the base class interface, extension functions extend the base class interface directly, without inheritance.")]),e._v(" "),t("p",[e._v("If we had control over the "),t("code",[e._v("Heater")]),e._v(" library, we could design it differently, to be more flexible:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/TemperatureDelta.kt\npackage inheritanceextensions\nimport atomictest.*\n\nclass TemperatureDelta(\n  val current: Double,\n  val target: Double\n)\n\nfun TemperatureDelta.heat() {\n  if (current < target)\n    trace("heating to $target")\n}\n\nfun TemperatureDelta.cool() {\n  if (current > target)\n    trace("cooling to $target")\n}\n\nfun adjust(deltaT: TemperatureDelta) {\n  deltaT.heat()\n  deltaT.cool()\n}\n\nfun main() {\n  adjust(TemperatureDelta(60.0, 70.0))\n  adjust(TemperatureDelta(80.0, 60.0))\n  trace eq """\n    heating to 70.0\n    cooling to 60.0\n  """\n}\n')])])]),t("p",[e._v("In this approach, we control the temperature by choosing among multiple strategies. We could also have made "),t("code",[e._v("heat()")]),e._v(" and "),t("code",[e._v("cool()")]),e._v(" member functions instead of extension functions.")]),e._v(" "),t("h3",{attrs:{id:"interface-by-convention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-by-convention"}},[e._v("#")]),e._v(" Interface by Convention")]),e._v(" "),t("p",[e._v("An extension function can be thought of as creating an interface containing a single function:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// InheritanceExtensions/Convention.kt\npackage inheritanceextensions\n\nclass X\n\nfun X.f() {}\n\nclass Y\n\nfun Y.f() {}\n\nfun callF(x: X) = x.f()\n\nfun callF(y: Y) = y.f()\n\nfun main() {\n  val x = X()\n  val y = Y()\n  x.f()\n  y.f()\n  callF(x)\n  callF(y)\n}\n")])])]),t("p",[e._v("Both "),t("code",[e._v("X")]),e._v(" and "),t("code",[e._v("Y")]),e._v(" now appear to have a member function called "),t("code",[e._v("f()")]),e._v(", but we don’t get polymorphic behavior so we must overload "),t("code",[e._v("callF()")]),e._v(" to make it work for both types.")]),e._v(" "),t("p",[e._v("This “interface by convention” is used extensively in the Kotlin libraries, especially when dealing with collections. Although these are predominantly Java collections, the Kotlin library turns them into functional-style collections by adding a large number of extension functions. For example, on virtually any collection-like object, you can expect to find "),t("code",[e._v("map()")]),e._v(" and "),t("code",[e._v("reduce()")]),e._v(", among many others. Because the programmer comes to expect this convention, it makes programming easier.")]),e._v(" "),t("p",[e._v("The Kotlin standard library "),t("code",[e._v("Sequence")]),e._v(" interface contains a single member function. The other "),t("code",[e._v("Sequence")]),e._v(" functions are all "),t("a",{attrs:{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),t("OutboundLink")],1),e._v("—there are well over one hundred. Initially, this approach was used for compatibility with Java collections, but now it’s part of the Kotlin philosophy: Create a simple interface containing only the methods that define its essence, then create all auxiliary operations as extensions.")]),e._v(" "),t("h3",{attrs:{id:"the-adapter-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-adapter-pattern"}},[e._v("#")]),e._v(" The "),t("em",[e._v("Adapter")]),e._v(" Pattern")]),e._v(" "),t("p",[e._v("A library often defines a type and provides functions that accept parameters of that type and/or return that type:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// InheritanceExtensions/UsefulLibrary.kt\npackage usefullibrary\n\ninterface LibType {\n  fun f1()\n  fun f2()\n}\n\nfun utility1(lt: LibType) {\n  lt.f1()\n  lt.f2()\n}\n\nfun utility2(lt: LibType) {\n  lt.f2()\n  lt.f1()\n}\n")])])]),t("p",[e._v("To use this library, you must somehow convert your existing class to "),t("code",[e._v("LibType")]),e._v(". Here, we inherit from an existing "),t("code",[e._v("MyClass")]),e._v(" to produce "),t("code",[e._v("MyClassAdaptedForLib")]),e._v(", which implements "),t("code",[e._v("LibType")]),e._v(" and can thus be passed to the functions in "),t("code",[e._v("UsefulLibrary.kt")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/Adapter.kt\npackage inheritanceextensions\nimport usefullibrary.*\nimport atomictest.*\n\nopen class MyClass {\n  fun g() = trace("g()")\n  fun h() = trace("h()")\n}\n\nfun useMyClass(mc: MyClass) {\n  mc.g()\n  mc.h()\n}\n\nclass MyClassAdaptedForLib :\n  MyClass(), LibType {\n  override fun f1() = h()\n  override fun f2() = g()\n}\n\nfun main() {\n  val mc = MyClassAdaptedForLib()\n  utility1(mc)\n  utility2(mc)\n  useMyClass(mc)\n  trace eq "h() g() g() h() g() h()"\n}\n')])])]),t("p",[e._v("Although this does extend a class during inheritance, the new member functions are used "),t("em",[e._v("only")]),e._v(" for the purpose of adapting to "),t("code",[e._v("UsefulLibrary")]),e._v(". Note that everywhere else, objects of "),t("code",[e._v("MyClassAdaptedForLib")]),e._v(" can be treated as "),t("code",[e._v("MyClass")]),e._v(" objects, as in the call to "),t("code",[e._v("useMyClass()")]),e._v(". There’s no code that uses the extended "),t("code",[e._v("MyClassAdaptedForLib")]),e._v(" where users of the base class must know about the derived class.")]),e._v(" "),t("p",[t("code",[e._v("Adapter.kt")]),e._v(" relies on "),t("code",[e._v("MyClass")]),e._v(" being "),t("code",[e._v("open")]),e._v(" for inheritance. What if you don’t control "),t("code",[e._v("MyClass")]),e._v(" and it’s not "),t("code",[e._v("open")]),e._v("? Fortunately, adapters can also be built using composition. Here, we add a "),t("code",[e._v("MyClass")]),e._v(" field inside "),t("code",[e._v("MyClassAdaptedForLib")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/ComposeAdapter.kt\npackage inheritanceextensions2\nimport usefullibrary.*\nimport atomictest.*\n\nclass MyClass { // Not open\n  fun g() = trace("g()")\n  fun h() = trace("h()")\n}\n\nfun useMyClass(mc: MyClass) {\n  mc.g()\n  mc.h()\n}\n\nclass MyClassAdaptedForLib : LibType {\n  val field = MyClass()\n  override fun f1() = field.h()\n  override fun f2() = field.g()\n}\n\nfun main() {\n  val mc = MyClassAdaptedForLib()\n  utility1(mc)\n  utility2(mc)\n  useMyClass(mc.field)\n  trace eq "h() g() g() h() g() h()"\n}\n')])])]),t("p",[e._v("This is not quite as clean as "),t("code",[e._v("Adapter.kt")]),e._v("—you must explicitly access the "),t("code",[e._v("MyClass")]),e._v(" object as seen in the call to "),t("code",[e._v("useMyClass(mc.field)")]),e._v(". But it still handily solves the problem of adapting to a library.")]),e._v(" "),t("p",[e._v("Extension functions seem like they might be very useful for creating adapters. Unfortunately, you cannot implement an interface by collecting extension functions.")]),e._v(" "),t("h3",{attrs:{id:"members-versus-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members-versus-extensions"}},[e._v("#")]),e._v(" Members versus Extensions")]),e._v(" "),t("p",[e._v("There are cases where you are forced to use member functions rather than extensions. If a function must access a "),t("code",[e._v("private")]),e._v(" member, you have no choice but to make it a member function:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// InheritanceExtensions/PrivateAccess.kt\npackage inheritanceextensions\nimport atomictest.eq\n\nclass Z(var i: Int = 0) {\n  private var j = 0\n  fun increment() {\n    i++\n    j++\n  }\n}\n\nfun Z.decrement() {\n  i--\n  // j -- // Cannot access\n}\n")])])]),t("p",[e._v("The member function "),t("code",[e._v("increment()")]),e._v(" can manipulate "),t("code",[e._v("j")]),e._v(", but the extension function "),t("code",[e._v("decrement()")]),e._v(" doesn’t have access to "),t("code",[e._v("j")]),e._v(" because "),t("code",[e._v("j")]),e._v(" is "),t("code",[e._v("private")]),e._v(".")]),e._v(" "),t("p",[e._v("The most significant limitation to extension functions is that they cannot be overridden:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/NoExtOverride.kt\npackage inheritanceextensions\nimport atomictest.*\n\nopen class Base {\n  open fun f() = "Base.f()"\n}\n\nclass Derived : Base() {\n  override fun f() = "Derived.f()"\n}\n\nfun Base.g() = "Base.g()"\nfun Derived.g() = "Derived.g()"\n\nfun useBase(b: Base) {\n  trace("Received ${b::class.simpleName}")\n  trace(b.f())\n  trace(b.g())\n}\n\nfun main() {\n  useBase(Base())\n  useBase(Derived())\n  trace eq """\n    Received Base\n    Base.f()\n    Base.g()\n    Received Derived\n    Derived.f()\n    Base.g()\n  """\n}\n')])])]),t("p",[e._v("The "),t("code",[e._v("trace")]),e._v(" output shows that polymorphism works with the member function "),t("code",[e._v("f()")]),e._v(" but not the extension function "),t("code",[e._v("g()")]),e._v(".")]),e._v(" "),t("p",[e._v("When a function doesn’t need overriding and you have adequate access to the members of a class, you can define it as either a member function or an extension function—a stylistic choice that should maximize code clarity.")]),e._v(" "),t("p",[e._v("A member function reflects the essence of a type; you can’t imagine the type without that function. Extension functions indicate “auxiliary” or “convenience” operations that support or utilize the type, but are not necessarily essential to that type’s existence. Including auxiliary functions inside a type makes it harder to reason about, while defining some functions as extensions keeps the type clean and simple.")]),e._v(" "),t("p",[e._v("Consider a "),t("code",[e._v("Device")]),e._v(" interface. The "),t("code",[e._v("model")]),e._v(" and "),t("code",[e._v("productionYear")]),e._v(" properties are intrinsic to "),t("code",[e._v("Device")]),e._v(" because they describe key features. Functions like "),t("code",[e._v("overpriced()")]),e._v(" and "),t("code",[e._v("outdated()")]),e._v(" can be defined either as members of the interface or as extension functions. Here they are member functions:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/DeviceMembers.kt\npackage inheritanceextensions1\nimport atomictest.eq\n\ninterface Device {\n  val model: String\n  val productionYear: Int\n  fun overpriced() = model.startsWith("i")\n  fun outdated() = productionYear < 2050\n}\n\nclass MyDevice(\n  override val model: String,\n  override val productionYear: Int\n): Device\n\nfun main() {\n  val gadget: Device =\n    MyDevice("my first phone", 2000)\n  gadget.outdated() eq true\n  gadget.overpriced() eq false\n}\n')])])]),t("p",[e._v("If we assume "),t("code",[e._v("overpriced()")]),e._v(" and "),t("code",[e._v("outdated()")]),e._v(" will not be overridden in subclasses, they can be defined as extensions:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// InheritanceExtensions/DeviceExtensions.kt\npackage inheritanceextensions2\nimport atomictest.eq\n\ninterface Device {\n  val model: String\n  val productionYear: Int\n}\n\nfun Device.overpriced() =\n  model.startsWith("i")\n\nfun Device.outdated() =\n  productionYear < 2050\n\nclass MyDevice(\n  override val model: String,\n  override val productionYear: Int\n): Device\n\nfun main() {\n  val gadget: Device =\n    MyDevice("my first phone", 2000)\n  gadget.outdated() eq true\n  gadget.overpriced() eq false\n}\n')])])]),t("p",[e._v("Interfaces that only contain descriptive members are easier to comprehend and reason about, so the "),t("code",[e._v("Device")]),e._v(" interface in the second example is probably a better choice. Ultimately, however, it’s a design decision.")]),e._v(" "),t("ul",[t("li",[e._v("-")])]),e._v(" "),t("p",[e._v("Languages like C++ and Java allow inheritance unless you specifically disallow it. Kotlin assumes that you "),t("em",[e._v("won’t")]),e._v(" be using inheritance—it actively prevents inheritance and polymorphism unless they are intentionally allowed using the "),t("code",[e._v("open")]),e._v(" keyword. This provides insight into Kotlin’s orientation:")]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Often, functions are all you need. Sometimes objects are very useful. Objects are one tool among many, but they’re not for everything.")])])]),e._v(" "),t("p",[e._v("If you’re pondering how to use inheritance in a particular situation, consider whether you need inheritance at all, and apply the maxim "),t("em",[e._v("Prefer extension functions and composition to inheritance")]),e._v(" (modified from the book "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Design_Patterns",target:"_blank",rel:"noopener noreferrer"}},[e._v("Design Patterns"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);