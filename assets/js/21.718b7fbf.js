(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(e,a,t){e.exports=t.p+"assets/img/upcasting.e27cc2ed.png"},561:function(e,a,t){"use strict";t.r(a);var n=t(44),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"upcasting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upcasting"}},[e._v("#")]),e._v(" Upcasting")]),e._v(" "),n("blockquote",[n("p",[e._v("Taking an object reference and treating it as a reference to its base type is called "),n("em",[e._v("upcasting")]),e._v(". The term "),n("em",[e._v("upcast")]),e._v(" refers to the way inheritance hierarchies are traditionally represented with the base class at the top and derived classes fanning out below.")])]),e._v(" "),n("p",[e._v("Inheriting and adding new member functions is the practice in Smalltalk, one of the first successful object-oriented languages. In Smalltalk, everything is an object and the only way to create a class is to inherit from an existing class, often adding new member functions. Smalltalk heavily influenced Java, which also requires everything to be an object.")]),e._v(" "),n("p",[e._v("Kotlin frees us from these constraints. We have stand-alone functions so everything doesn’t need to be contained within classes. Extension functions allow us to add functionality without inheritance. Indeed, requiring the "),n("code",[e._v("open")]),e._v(" keyword for inheritance makes it a very conscious and intentional choice, not something to use all the time.")]),e._v(" "),n("p",[e._v("More precisely, it narrows inheritance to a very specific use, an abstraction that allows us to write code that can be reused across multiple classes within a single hierarchy. The [Polymorphism](javascript:void(0)) atom explores these mechanics, but first you must understand upcasting.")]),e._v(" "),n("p",[e._v("Consider some "),n("code",[e._v("Shape")]),e._v("s that can be drawn and erased:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Upcasting/Shapes.kt\npackage upcasting\n\ninterface Shape {\n  fun draw(): String\n  fun erase(): String\n}\n\nclass Circle : Shape {\n  override fun draw() = "Circle.draw"\n  override fun erase() = "Circle.erase"\n}\n\nclass Square : Shape {\n  override fun draw() = "Square.draw"\n  override fun erase() = "Square.erase"\n  fun color() = "Square.color"\n}\n\nclass Triangle : Shape {\n  override fun draw() = "Triangle.draw"\n  override fun erase() = "Triangle.erase"\n  fun rotate() = "Triangle.rotate"\n}\n')])])]),n("p",[e._v("The "),n("code",[e._v("show()")]),e._v(" function accepts any "),n("code",[e._v("Shape")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Upcasting/Drawing.kt\npackage upcasting\nimport atomictest.*\n\nfun show(shape: Shape) {\n  trace("Show: ${shape.draw()}")\n}\n\nfun main() {\n  listOf(Circle(), Square(), Triangle())\n    .forEach(::show)\n  trace eq """\n    Show: Circle.draw\n    Show: Square.draw\n    Show: Triangle.draw\n  """\n}\n')])])]),n("p",[e._v("In "),n("code",[e._v("main()")]),e._v(", "),n("code",[e._v("show()")]),e._v(" is called with three different types: "),n("code",[e._v("Circle")]),e._v(", "),n("code",[e._v("Square")]),e._v(", and "),n("code",[e._v("Triangle")]),e._v(". The "),n("code",[e._v("show()")]),e._v(" parameter is of the base class "),n("code",[e._v("Shape")]),e._v(", so "),n("code",[e._v("show()")]),e._v(" accepts all three types. Each of those types is treated as a basic "),n("code",[e._v("Shape")]),e._v("—we say that the specific types are "),n("em",[e._v("upcast")]),e._v(" to the basic type.")]),e._v(" "),n("p",[e._v("We typically draw a diagram for this hierarchy with the base class at the top:")]),e._v(" "),n("div",{attrs:{align:"center"}},[n("img",{staticStyle:{zoom:"10%"},attrs:{src:t(380),alt:"upcasting"}}),e._v(" "),n("p",[e._v(" Shape Hierarchy")])]),e._v(" "),n("p",[e._v("When we pass a "),n("code",[e._v("Circle")]),e._v(", "),n("code",[e._v("Square")]),e._v(", or "),n("code",[e._v("Triangle")]),e._v(" as an argument of type "),n("code",[e._v("Shape")]),e._v(" in "),n("code",[e._v("show()")]),e._v(", we cast "),n("em",[e._v("up")]),e._v(" this inheritance hierarchy. In the process of upcasting, we lose the specific information about whether an object is of type "),n("code",[e._v("Circle")]),e._v(", "),n("code",[e._v("Square")]),e._v(", or "),n("code",[e._v("Triangle")]),e._v(". In each case, it becomes nothing more than a "),n("code",[e._v("Shape")]),e._v(" object.")]),e._v(" "),n("p",[e._v("Treating a specific type as a more general type is the entire point of inheritance. The mechanics of inheritance exist solely to fulfill the goal of upcasting to the base type. Because of this abstraction (“everything is a "),n("code",[e._v("Shape")]),e._v("”), we can write a single "),n("code",[e._v("show()")]),e._v(" function instead of writing one for every type of element. Upcasting is a way to reuse code for objects.")]),e._v(" "),n("p",[e._v("Indeed, in virtually every case where there’s inheritance without upcasting, inheritance is being misused—it’s unnecessary, and it makes the code needlessly complicated. This misuse is the reason for the maxim:")]),e._v(" "),n("blockquote",[n("p",[n("em",[e._v("Prefer composition to inheritance.")])])]),e._v(" "),n("p",[e._v("If the point of inheritance is the ability to substitute a derived type for a base type, what happens to the extra member functions: "),n("code",[e._v("color()")]),e._v(" in "),n("code",[e._v("Square")]),e._v(" and "),n("code",[e._v("rotate()")]),e._v(" in "),n("code",[e._v("Triangle")]),e._v("?")]),e._v(" "),n("p",[n("em",[e._v("Substitutability")]),e._v(", also called the "),n("em",[e._v("Liskov Substitution Principle")]),e._v(", says that, after upcasting, the derived type can be treated "),n("em",[e._v("exactly")]),e._v(" like the base type—no more and no less. This means that any member functions added to the derived class are, in effect, “trimmed off.” They still exist, but because they are not part of the base-class interface, they are unavailable within "),n("code",[e._v("show()")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Upcasting/TrimmedMembers.kt\npackage upcasting\nimport atomictest.*\n\nfun trim(shape: Shape) {\n  trace(shape.draw())\n  trace(shape.erase())\n  // Doesn\'t compile:\n  // shape.color()    // [1]\n  // shape.rotate()   // [2]\n}\n\nfun main() {\n  trim(Square())\n  trim(Triangle())\n  trace eq """\n    Square.draw\n    Square.erase\n    Triangle.draw\n    Triangle.erase\n  """\n}\n')])])]),n("p",[e._v("You can’t call "),n("code",[e._v("color()")]),e._v(" in line "),n("strong",[e._v("[1]")]),e._v(" because the "),n("code",[e._v("Square")]),e._v(" instance was upcast to a "),n("code",[e._v("Shape")]),e._v(", and you can’t call "),n("code",[e._v("rotate()")]),e._v(" in line "),n("strong",[e._v("[2]")]),e._v(" because the "),n("code",[e._v("Triangle")]),e._v(" instance is also upcast to a "),n("code",[e._v("Shape")]),e._v(". The only member functions available are the ones that are common to "),n("em",[e._v("all")]),e._v(" "),n("code",[e._v("Shape")]),e._v("s—those defined in the base type "),n("code",[e._v("Shape")]),e._v(".")]),e._v(" "),n("p",[e._v("Note that the same applies when you "),n("em",[e._v("directly")]),e._v(" assign a subtype of "),n("code",[e._v("Shape")]),e._v(" to a general "),n("code",[e._v("Shape")]),e._v(".  The specified type determines the available members:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Upcasting/Assignment.kt\nimport upcasting.*\n\nfun main() {\n  val shape1: Shape = Square()\n  val shape2: Shape = Triangle()\n  // Doesn't compile:\n  // shape1.color()\n  // shape2.rotate()\n}\n")])])]),n("p",[e._v("After an upcast, you can only call members of the base type.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);