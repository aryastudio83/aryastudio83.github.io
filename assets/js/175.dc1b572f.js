(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{555:function(e,a,n){"use strict";n.r(a);var t=n(44),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"inheritance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inheritance"}},[e._v("#")]),e._v(" Inheritance")]),e._v(" "),n("blockquote",[n("p",[n("em",[e._v("Inheritance")]),e._v(" is a mechanism for creating a new class by reusing and modifying an existing class.")])]),e._v(" "),n("p",[e._v("Objects store data in properties and perform actions via member functions. Each object occupies a unique place in storage so one object’s properties can have different values from every other object. An object also belongs to a category called a class, which determines the form (properties and functions) for its objects. Thus, an object looks like the class that formed it.")]),e._v(" "),n("p",[e._v("Creating and debugging a class can require extensive work. What if you want to make a class that’s similar to an existing class, but with some variations? It seems wasteful to build a new class from scratch. Object-oriented languages provide a mechanism for reuse called "),n("em",[e._v("inheritance")]),e._v(".")]),e._v(" "),n("p",[e._v("Inheritance follows the concept of biological inheritance. You say, “I want to make a new class from an existing class, but with some additions and modifications.”")]),e._v(" "),n("p",[e._v("The syntax for inheritance is similar to implementing an interface. To inherit a new class "),n("code",[e._v("Derived")]),e._v(" from an existing class "),n("code",[e._v("Base")]),e._v(", use a "),n("code",[e._v(":")]),e._v(" (colon):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Inheritance/BasicInheritance.kt\npackage inheritance\n\nopen class Base\n\nclass Derived : Base()\n")])])]),n("p",[e._v("The subsequent atom explains the reason for the parentheses after "),n("code",[e._v("Base")]),e._v(" during inheritance.")]),e._v(" "),n("p",[e._v("The terms "),n("em",[e._v("base class")]),e._v(" and "),n("em",[e._v("derived class")]),e._v(" (or "),n("em",[e._v("parent class")]),e._v(" and "),n("em",[e._v("child class")]),e._v(", or "),n("em",[e._v("superclass")]),e._v(" and "),n("em",[e._v("subclass")]),e._v(") are often used to describe the inheritance relationship.")]),e._v(" "),n("p",[e._v("The base class must be "),n("code",[e._v("open")]),e._v(". A non-"),n("code",[e._v("open")]),e._v(" class doesn’t allow inheritance—it is "),n("em",[e._v("closed")]),e._v(" by default. This differs from most other object-oriented languages. In Java, for example, a class is automatically inheritable unless you explicitly forbid inheritance by declaring that class to be "),n("code",[e._v("final")]),e._v(". Although Kotlin allows it, the "),n("code",[e._v("final")]),e._v(" modifier is redundant because every class is effectively "),n("code",[e._v("final")]),e._v(" by default:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Inheritance/OpenAndFinalClasses.kt\npackage inheritance\n\n// This class can be inherited:\nopen class Parent\n\nclass Child : Parent()\n\n// Child is not open, so this fails:\n// class GrandChild : Child()\n\n// This class can't be inherited:\nfinal class Single\n\n// The same as using 'final':\nclass AnotherSingle\n")])])]),n("p",[e._v("Kotlin forces you to clarify your intent by using the "),n("code",[e._v("open")]),e._v(" keyword to specify that a class is designed for inheritance.")]),e._v(" "),n("p",[e._v("In the following example, "),n("code",[e._v("GreatApe")]),e._v(" is a base class, and has two properties with fixed values. The derived classes "),n("code",[e._v("Bonobo")]),e._v(", "),n("code",[e._v("Chimpanzee")]),e._v(" and "),n("code",[e._v("BonoboB")]),e._v(" are new types that are identical to their parent class:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Inheritance/GreatApe.kt\npackage inheritance.ape1\nimport atomictest.eq\n\nopen class GreatApe {\n  val weight = 100.0\n  val age = 12\n}\n\nopen class Bonobo : GreatApe()\nclass Chimpanzee : GreatApe()\nclass BonoboB : Bonobo()\n\nfun GreatApe.info() = "wt: $weight age: $age"\n\nfun main() {\n  GreatApe().info() eq "wt: 100.0 age: 12"\n  Bonobo().info() eq "wt: 100.0 age: 12"\n  Chimpanzee().info() eq "wt: 100.0 age: 12"\n  BonoboB().info() eq "wt: 100.0 age: 12"\n}\n')])])]),n("p",[n("code",[e._v("info()")]),e._v(" is an extension for "),n("code",[e._v("GreatApe")]),e._v(", so naturally you can call it on a "),n("code",[e._v("GreatApe")]),e._v(". But notice that you can also call "),n("code",[e._v("info()")]),e._v(" on a "),n("code",[e._v("Bonobo")]),e._v(", a "),n("code",[e._v("Chimpanzee")]),e._v(", or a "),n("code",[e._v("BonoboB")]),e._v("! Even though the latter three are distinct types, Kotlin happily accepts them as if they were the "),n("em",[e._v("same type")]),e._v(" as "),n("code",[e._v("GreatApe")]),e._v(". This works at any level of inheritance—"),n("code",[e._v("BonoboB")]),e._v(" is two inheritance levels away from "),n("code",[e._v("GreatApe")]),e._v(".")]),e._v(" "),n("p",[e._v("Inheritance guarantees that anything inheriting from "),n("code",[e._v("GreatApe")]),e._v(" "),n("em",[e._v("is")]),e._v(" a "),n("code",[e._v("GreatApe")]),e._v(". All code that acts upon objects of the derived classes knows that "),n("code",[e._v("GreatApe")]),e._v(" is at their core, so any functions and properties in "),n("code",[e._v("GreatApe")]),e._v(" will also be available in its child classes.")]),e._v(" "),n("p",[e._v("Inheritance enables you to write a single piece of code (the "),n("code",[e._v("info()")]),e._v(" function) that works not just with one class, but also with every class that inherits that class. Thus, inheritance creates opportunities for code simplification and reuse.")]),e._v(" "),n("p",[n("code",[e._v("GreatApe.kt")]),e._v(" is a bit "),n("em",[e._v("too")]),e._v(" simple because all the classes are identical. Inheritance gets interesting when you start "),n("em",[e._v("overriding")]),e._v(" functions, which means redefining a function from a base class to do something different in a derived class.")]),e._v(" "),n("p",[e._v("Let’s look at another version of "),n("code",[e._v("GreatApe.kt")]),e._v(". This time we include member functions that are modified in the subclasses:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Inheritance/GreatApe2.kt\npackage inheritance.ape2\nimport atomictest.eq\n\nopen class GreatApe {\n  protected var energy = 0\n  open fun call() = "Hoo!"\n  open fun eat() {\n    energy += 10\n  }\n  fun climb(x: Int) {\n    energy -= x\n  }\n  fun energyLevel() = "Energy: $energy"\n}\n\nclass Bonobo : GreatApe() {\n  override fun call() = "Eep!"\n  override fun eat() {\n    // Modify the base-class var:\n    energy += 10\n    // Call the base-class version:\n    super.eat()\n  }\n  // Add a function:\n  fun run() = "Bonobo run"\n}\n\nclass Chimpanzee : GreatApe() {\n  // New property:\n  val additionalEnergy = 20\n  override fun call() = "Yawp!"\n  override fun eat() {\n    energy += additionalEnergy\n    super.eat()\n  }\n  // Add a function:\n  fun jump() = "Chimp jump"\n}\n\nfun talk(ape: GreatApe): String {\n  // ape.run()  // Not an ape function\n  // ape.jump() // Nor this\n  ape.eat()\n  ape.climb(10)\n  return "${ape.call()} ${ape.energyLevel()}"\n}\n\nfun main() {\n  // Cannot access \'energy\':\n  // GreatApe().energy\n  talk(GreatApe()) eq "Hoo! Energy: 0"\n  talk(Bonobo()) eq "Eep! Energy: 10"\n  talk(Chimpanzee()) eq "Yawp! Energy: 20"\n}\n')])])]),n("p",[e._v("Every "),n("code",[e._v("GreatApe")]),e._v(" has a "),n("code",[e._v("call()")]),e._v(". They store "),n("code",[e._v("energy")]),e._v(" when they "),n("code",[e._v("eat()")]),e._v(" and they expend energy when they "),n("code",[e._v("climb()")]),e._v(".")]),e._v(" "),n("p",[e._v("As described in [Constraining Visibility](javascript:void(0)), the derived class can’t access the "),n("code",[e._v("private")]),e._v(" members of the base class. Sometimes the creator of the base class would like to take a particular member and grant access to derived classes but not to the world in general. That’s what "),n("code",[e._v("protected")]),e._v(" does: "),n("code",[e._v("protected")]),e._v(" members are closed to the outside world, but can be accessed or overridden in subclasses.")]),e._v(" "),n("p",[e._v("If we declare "),n("code",[e._v("energy")]),e._v(" as "),n("code",[e._v("private")]),e._v(", it won’t be possible to change it whenever "),n("code",[e._v("GreatApe")]),e._v(" is used, which is good, but we also can’t access it in subclasses. Making it "),n("code",[e._v("protected")]),e._v(" allows us to keep it accessible to subclasses but invisible to the outside world.")]),e._v(" "),n("p",[n("code",[e._v("call()")]),e._v(" is defined the same way in "),n("code",[e._v("Bonobo")]),e._v(" and "),n("code",[e._v("Chimpanzee")]),e._v(" as it is in "),n("code",[e._v("GreatApe")]),e._v(". It has no parameters and type inference determines that it returns a "),n("code",[e._v("String")]),e._v(".")]),e._v(" "),n("p",[e._v("Both "),n("code",[e._v("Bonobo")]),e._v(" and "),n("code",[e._v("Chimpanzee")]),e._v(" should have different behaviors for "),n("code",[e._v("call()")]),e._v(" than "),n("code",[e._v("GreatApe")]),e._v(", so we want to change their definitions of "),n("code",[e._v("call()")]),e._v(". If you create an identical function signature in a derived class as in a base class, you substitute the behavior defined in the base class with your new behavior. This is called "),n("em",[e._v("overriding")]),e._v(".")]),e._v(" "),n("p",[e._v("When Kotlin sees an identical function signature in the derived class as in the base class, it decides that you’ve made a mistake, called an "),n("em",[e._v("accidental override")]),e._v(". If you write a function that has the same name as a function in the base class, you get an error message saying you forgot the "),n("code",[e._v("override")]),e._v(" keyword. Kotlin assumes you’ve unintentionally chosen the same name, parameters and return type "),n("em",[e._v("unless")]),e._v(" you use the "),n("code",[e._v("override")]),e._v(" keyword (which you first saw in [Constructors](javascript:void(0))) to say “yes, I mean to do this.” The "),n("code",[e._v("override")]),e._v(" keyword also helps when reading the code, so you don’t have to compare signatures to notice the overrides.")]),e._v(" "),n("p",[e._v("Kotlin imposes an additional constraint when overriding functions. Just as you cannot inherit from a base class unless that base class is "),n("code",[e._v("open")]),e._v(", you cannot "),n("code",[e._v("override")]),e._v(" a function from a base class unless that function is defined as "),n("code",[e._v("open")]),e._v(" in the base class. Note that "),n("code",[e._v("climb()")]),e._v(" and "),n("code",[e._v("energyLevel()")]),e._v(" are not "),n("code",[e._v("open")]),e._v(", so they cannot be overridden. Inheritance and overriding cannot be accomplished in Kotlin without clear intentions.")]),e._v(" "),n("p",[e._v("It’s especially interesting to take a "),n("code",[e._v("Bonobo")]),e._v(" or a "),n("code",[e._v("Chimpanzee")]),e._v(" and treat it as an ordinary "),n("code",[e._v("GreatApe")]),e._v(". Inside "),n("code",[e._v("talk()")]),e._v(", "),n("code",[e._v("call()")]),e._v(" produces the correct behavior in each case. "),n("code",[e._v("talk()")]),e._v(" somehow knows the exact type of the object and produces the appropriate variation of "),n("code",[e._v("call()")]),e._v(". This is [polymorphism](javascript:void(0)).")]),e._v(" "),n("p",[e._v("Inside "),n("code",[e._v("talk()")]),e._v(", you can only call "),n("code",[e._v("GreatApe")]),e._v(" member functions because "),n("code",[e._v("talk()")]),e._v("’s parameter is a "),n("code",[e._v("GreatApe")]),e._v(". Even though "),n("code",[e._v("Bonobo")]),e._v(" defines "),n("code",[e._v("run()")]),e._v(" and "),n("code",[e._v("Chimpanzee")]),e._v(" defines "),n("code",[e._v("jump()")]),e._v(", neither function is part of "),n("code",[e._v("GreatApe")]),e._v(".")]),e._v(" "),n("p",[e._v("Often when you override a function, you want to call the base-class version of that function (for one thing, to reuse the code), as seen in the overrides for "),n("code",[e._v("eat()")]),e._v(". This produces a conundrum: If you simply call "),n("code",[e._v("eat()")]),e._v(", you call the same function you’re currently inside (as we’ve seen in [Recursion](javascript:void(0))). To call the base-class version of "),n("code",[e._v("eat()")]),e._v(", use the "),n("code",[e._v("super")]),e._v(" keyword, short for “superclass.”")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);