(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{569:function(e,t,n){"use strict";n.r(t);var a=n(44),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"objects"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[e._v("#")]),e._v(" Objects")]),e._v(" "),n("blockquote",[n("p",[e._v("The "),n("code",[e._v("object")]),e._v(" keyword defines something that looks roughly like a class. However, you can’t create instances of an "),n("code",[e._v("object")]),e._v("—there’s only one. This is sometimes called the "),n("em",[e._v("Singleton")]),e._v(" pattern.")])]),e._v(" "),n("p",[e._v("An "),n("code",[e._v("object")]),e._v(" is a way to combine functions and properties that logically belong together, but this combination either doesn’t require multiple instances, or you want to explicitly prevent multiple instances. You never create an instance of an "),n("code",[e._v("object")]),e._v("—there’s only one and it’s available once the "),n("code",[e._v("object")]),e._v(" has been defined:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Objects/ObjectKeyword.kt\npackage objects\nimport atomictest.eq\n\nobject JustOne {\n  val n = 2\n  fun f() = n * 10\n  fun g() = this.n * 20   // [1]\n}\n\nfun main() {\n  // val x = JustOne() // Error\n  JustOne.n eq 2\n  JustOne.f() eq 20\n  JustOne.g() eq 40\n}\n")])])]),n("p",[e._v("Here, you can’t say "),n("code",[e._v("JustOne()")]),e._v(" to create a new instance of a class "),n("code",[e._v("JustOne")]),e._v(". That’s because the "),n("code",[e._v("object")]),e._v(" keyword defines the structure and creates the object at the same time. In addition, it places the elements inside the "),n("code",[e._v("object")]),e._v("’s namespace. If you only want the "),n("code",[e._v("object")]),e._v(" to be visible within the current file, you can make it "),n("code",[e._v("private")]),e._v(".")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" The "),n("code",[e._v("this")]),e._v(" keyword refers to the single object instance.")])]),e._v(" "),n("p",[e._v("You cannot provide a parameter list for an "),n("code",[e._v("object")]),e._v(".")]),e._v(" "),n("p",[e._v("Naming conventions are slightly different when using "),n("code",[e._v("object")]),e._v(". Typically, when we create an instance of a class, we lower-case the first letter of the instance name. When you create an "),n("code",[e._v("object")]),e._v(", however, Kotlin defines the class "),n("em",[e._v("and")]),e._v(" creates a single instance of that class. We capitalize the first letter of the "),n("code",[e._v("object")]),e._v(" name because it also represents a class.")]),e._v(" "),n("p",[e._v("An "),n("code",[e._v("object")]),e._v(" can inherit from a regular class or interface:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Objects/ObjectInheritance.kt\npackage objects\nimport atomictest.eq\n\nopen class Paint(val color: String) {\n  open fun apply() = "Applying $color"\n}\n\nobject Acrylic: Paint("Blue") {\n  override fun apply() =\n    "Acrylic, ${super.apply()}"\n}\n\ninterface PaintPreparation {\n  fun prepare(): String\n}\n\nobject Prepare: PaintPreparation {\n  override fun prepare() = "Scrape"\n}\n\nfun main() {\n  Prepare.prepare() eq "Scrape"\n  Paint("Green").apply() eq "Applying Green"\n  Acrylic.apply() eq "Acrylic, Applying Blue"\n}\n')])])]),n("p",[e._v("There’s only a single instance of an "),n("code",[e._v("object")]),e._v(", so that instance is shared across all code that uses it. Here’s an "),n("code",[e._v("object")]),e._v(" in its own "),n("code",[e._v("package")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Objects/GlobalSharing.kt\npackage objectsharing\n\nobject Shared {\n  var i: Int = 0\n}\n")])])]),n("p",[e._v("We can now use "),n("code",[e._v("Shared")]),e._v(" in a different package:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Objects/Share1.kt\npackage objectshare1\nimport objectsharing.Shared\n\nfun f() {\n  Shared.i += 5\n}\n")])])]),n("p",[e._v("And within a third package:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Objects/Share2.kt\npackage objectshare2\nimport objectsharing.Shared\nimport objectshare1.f\nimport atomictest.eq\n\nfun g() {\n  Shared.i += 7\n}\n\nfun main() {\n  f()\n  g()\n  Shared.i eq 12\n}\n")])])]),n("p",[e._v("You can see from the results that "),n("code",[e._v("Shared")]),e._v(" is the same object in all packages, which makes sense because "),n("code",[e._v("object")]),e._v(" creates a single instance. If you make "),n("code",[e._v("Shared")]),e._v(" "),n("code",[e._v("private")]),e._v(", it’s not available in the other files.")]),e._v(" "),n("p",[n("code",[e._v("object")]),e._v("s can’t be placed inside functions, but they can be nested inside other "),n("code",[e._v("object")]),e._v("s or classes (as long as those classes are not themselves nested within other classes):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Objects/ObjectNesting.kt\npackage objects\nimport atomictest.eq\n\nobject Outer {\n  object Nested {\n    val a = "Outer.Nested.a"\n  }\n}\n\nclass HasObject {\n  object Nested {\n    val a = "HasObject.Nested.a"\n  }\n}\n\nfun main() {\n  Outer.Nested.a eq "Outer.Nested.a"\n  HasObject.Nested.a eq "HasObject.Nested.a"\n}\n')])])]),n("p",[e._v("There’s another way to put an object inside a class: a "),n("code",[e._v("companion object")]),e._v(", which you’ll see in the [Companion Objects](javascript:void(0)) atom.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);