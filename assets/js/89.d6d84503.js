(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{461:function(e,t,n){"use strict";n.r(t);var a=n(44),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"abstract-classes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract-classes"}},[e._v("#")]),e._v(" Abstract Classes")]),e._v(" "),n("blockquote",[n("p",[e._v("An "),n("em",[e._v("abstract class")]),e._v(" is like an ordinary class except one or more functions or properties is incomplete: a function lacks a definition or a property is declared without initialization. An interface is like an abstract class but without "),n("em",[e._v("state")]),e._v(".")])]),e._v(" "),n("p",[e._v("You must use the "),n("code",[e._v("abstract")]),e._v(" modifier to mark class members that have missing definitions. A class containing "),n("code",[e._v("abstract")]),e._v(" functions or properties must also be marked "),n("code",[e._v("abstract")]),e._v(". Try removing any of the "),n("code",[e._v("abstract")]),e._v(" modifiers below and see what message you get:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Abstract/AbstractKeyword.kt\npackage abstractclasses\n\nabstract class WithProperty {\n  abstract val x: Int\n}\n\nabstract class WithFunctions {\n  abstract fun f(): Int\n  abstract fun g(n: Double)\n}\n")])])]),n("p",[n("code",[e._v("WithProperty")]),e._v(" "),n("em",[e._v("declares")]),e._v(" "),n("code",[e._v("x")]),e._v(" with no initialization value (a "),n("em",[e._v("declaration")]),e._v(" describes something without providing a "),n("em",[e._v("definition")]),e._v(" to create storage for a value or code for a function). If there isn’t an initializer, Kotlin requires references to be "),n("code",[e._v("abstract")]),e._v(", and expects the "),n("code",[e._v("abstract")]),e._v(" modifier on the class. Without an initializer, Kotlin cannot infer the type, so it also requires type information for an "),n("code",[e._v("abstract")]),e._v(" reference.")]),e._v(" "),n("p",[n("code",[e._v("WithFunctions")]),e._v(" declares "),n("code",[e._v("f()")]),e._v(" and "),n("code",[e._v("g()")]),e._v(" but provides no function definitions, again forcing you to add the "),n("code",[e._v("abstract")]),e._v(" modifier to the functions and the containing class. If you don’t give a return type for the function, as with "),n("code",[e._v("g()")]),e._v(", Kotlin assumes it returns "),n("code",[e._v("Unit")]),e._v(".")]),e._v(" "),n("p",[e._v("Abstract functions and properties must somehow exist (be made "),n("em",[e._v("concrete")]),e._v(") in the class that you ultimately create from the abstract class.")]),e._v(" "),n("p",[e._v("All functions and properties declared in an interface are abstract by default, which makes an interface similar to an abstract class. When an interface contains a function or property declaration, the "),n("code",[e._v("abstract")]),e._v(" modifier is redundant and can be removed. These two interfaces are equivalent:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Abstract/Redundant.kt\npackage abstractclasses\n\ninterface Redundant {\n  abstract val x: Int\n  abstract fun f(): Int\n  abstract fun g(n: Double)\n}\n\ninterface Removed {\n  val x: Int\n  fun f(): Int\n  fun g(n: Double)\n}\n")])])]),n("p",[e._v("The difference between interfaces and abstract classes is that an abstract class can contain "),n("em",[e._v("state")]),e._v(", while an interface cannot. State is the data stored inside properties. In the following, the state of "),n("code",[e._v("IntList")]),e._v(" consists of the values stored in the properties "),n("code",[e._v("name")]),e._v(" and "),n("code",[e._v("list")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Abstract/StateOfAClass.kt\npackage abstractstate\nimport atomictest.eq\n\nclass IntList(val name: String) {\n  val list = mutableListOf<Int>()\n}\n\nfun main() {\n  val ints = IntList("numbers")\n  ints.name eq "numbers"\n  ints.list += 7\n  ints.list eq listOf(7)\n}\n')])])]),n("p",[e._v("An interface may declare properties, but actual data is only stored in classes that implement the interface. An interface isn’t allowed to store values in its properties:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Abstract/NoStateInInterfaces.kt\npackage abstractclasses\n\ninterface IntList {\n  val name: String\n  // Doesn't compile:\n  // val list = listOf(0)\n}\n")])])]),n("p",[e._v("Both interfaces and abstract classes can contain functions with implementations. You can call other "),n("code",[e._v("abstract")]),e._v(" members from such functions:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Abstract/Implementations.kt\npackage abstractclasses\nimport atomictest.eq\n\ninterface Parent {\n  val ch: Char\n  fun f(): Int\n  fun g() = "ch = $ch; f() = ${f()}"\n}\n\nclass Actual(\n  override val ch: Char        // [1]\n): Parent {\n  override fun f() = 17        // [2]\n}\n\nclass Other : Parent {\n  override val ch: Char        // [3]\n    get() = \'B\'\n  override fun f() = 34        // [4]\n}\n\nfun main() {\n  Actual(\'A\').g() eq "ch = A; f() = 17" // [5]\n  Other().g() eq "ch = B; f() = 34"     // [6]\n}\n')])])]),n("p",[n("code",[e._v("Parent")]),e._v(" declares an abstract property "),n("code",[e._v("ch")]),e._v(" and an abstract function "),n("code",[e._v("f()")]),e._v(" that must be overridden in any implementing classes. Lines "),n("strong",[e._v("[1]")]),e._v("-"),n("strong",[e._v("[4]")]),e._v(" show different implementations of these members in subclasses.")]),e._v(" "),n("p",[n("code",[e._v("Parent.g()")]),e._v(" uses abstract members that have no definitions at the point where "),n("code",[e._v("g()")]),e._v(" is defined. Interfaces and abstract classes guarantee that all abstract properties and functions are implemented before any objects can be created—and you can’t call a member function unless you’ve got an object. Lines "),n("strong",[e._v("[5]")]),e._v(" and "),n("strong",[e._v("[6]")]),e._v(" call different implementations of "),n("code",[e._v("ch")]),e._v(" and "),n("code",[e._v("f()")]),e._v(".")]),e._v(" "),n("p",[e._v("Because an interface can contain function implementations, it can also contain custom property accessors if the corresponding property doesn’t change state:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Abstract/PropertyAccessor.kt\npackage abstractclasses\nimport atomictest.eq\n\ninterface PropertyAccessor {\n  val a: Int\n    get() = 11\n}\n\nclass Impl : PropertyAccessor\n\nfun main() {\n  Impl().a eq 11\n}\n")])])]),n("p",[e._v("You might wonder why we need interfaces when abstract classes are more powerful. To understand the importance of “a class without state,” let’s look at the concept of multiple inheritance, which Kotlin doesn’t support. In Kotlin, a class can only inherit from a single base class:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Abstract/NoMultipleInheritance.kt\npackage multipleinheritance1\n\nopen class Animal\nopen class Mammal : Animal()\nopen class AquaticAnimal : Animal()\n\n// More than one base class doesn't compile:\n// class Dolphin : Mammal(), AquaticAnimal()\n")])])]),n("p",[e._v("Trying to compile the commented code produces an error: "),n("em",[e._v("Only one class may appear in a supertype list")]),e._v(".")]),e._v(" "),n("p",[e._v("Java works the same way. The original Java designers decided that C++ multiple inheritance was a bad idea. The main complexity and dissatisfaction at that time came from multiple "),n("em",[e._v("state")]),e._v(" inheritance. The rules managing inheritance of multiple states are complicated and can easily cause confusion and surprising behavior. Java added an elegant solution to this problem by introducing interfaces, which can’t contain state. Java forbids multiple state inheritance, but allows multiple interface inheritance, and Kotlin follows this design:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Abstract/MultipleInterfaceInheritance.kt\npackage multipleinheritance2\n\ninterface Animal\ninterface Mammal: Animal\ninterface AquaticAnimal: Animal\n\nclass Dolphin : Mammal, AquaticAnimal\n")])])]),n("p",[e._v("Note that, just like classes, interfaces can inherit from each other.")]),e._v(" "),n("p",[e._v("When inheriting from several interfaces, it’s possible to simultaneously override two or more functions with the same signature (the name combined with the parameters and return type). If function or property signatures collide, you must resolve the collisions by hand, as seen in "),n("code",[e._v("class C")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Abstract/InterfaceCollision.kt\npackage collision\nimport atomictest.eq\n\ninterface A {\n  fun f() = 1\n  fun g() = "A.g"\n  val n: Double\n    get() = 1.1\n}\n\ninterface B {\n  fun f() = 2\n  fun g() = "B.g"\n  val n: Double\n    get() = 2.2\n}\n\nclass C : A, B {\n  override fun f() = 0\n  override fun g() = super<A>.g()\n  override val n: Double\n    get() = super<A>.n + super<B>.n\n}\n\nfun main() {\n  val c = C()\n  c.f() eq 0\n  c.g() eq "A.g"\n  c.n eq 3.3\n}\n')])])]),n("p",[e._v("The functions "),n("code",[e._v("f()")]),e._v(" and "),n("code",[e._v("g()")]),e._v(" and the property "),n("code",[e._v("n")]),e._v(" have identical signatures in interfaces "),n("code",[e._v("A")]),e._v(" and "),n("code",[e._v("B")]),e._v(", so Kotlin doesn’t know what to do and produces an error message if you don’t resolve the issue (try individually commenting the definitions in "),n("code",[e._v("C")]),e._v("). Member functions and properties can be overridden with new definitions as in "),n("code",[e._v("f()")]),e._v(", but functions can also access the base versions of themselves using the "),n("code",[e._v("super")]),e._v(" keyword, specifying the base class in angle brackets, as in the definition of "),n("code",[e._v("C.g()")]),e._v(" and "),n("code",[e._v("C.n")]),e._v(".")]),e._v(" "),n("p",[e._v("Collisions where the identifier is the same but the type is different are not allowed in Kotlin and cannot be resolved.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);