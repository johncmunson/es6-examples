// ITERATORS
// An object is an iterator when it knows how to access items from a collection one at a time, while keeping track of its current position within that sequence. In JavaScript an iterator is an object that provides a next() method which returns the next item in the sequence. This method returns an object with two properties: done and value. Once created, an iterator object can be used explicitly by repeatedly calling next().

// GENERATORS
// While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generators provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function which can maintain its own state.

// A generator is a special type of function that works as a factory for iterators. A function becomes a generator if it contains one or more yield expressions and if it uses the function* syntax.

// ITERABLES
// An object is iterable if it defines its iteration behavior, such as what values are looped over in a for..of construct. Some built-in types, such as Array or Map, have a default iteration behavior, while other types (such as Object) do not.

// In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a Symbol.iterator key:

"use strict";

// Example 1
console.log("Example 1");

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// Example 2
console.log("Example 2");

function* infinite() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

let infiniteGen = infinite();

console.log(infiniteGen.next());
console.log(infiniteGen.next());
console.log(infiniteGen.next());


// Example 3
console.log("Example 3");

function* foo() {
    let index = 0;
    while (index < 3) {
        yield index++;
    }
}

let bar = foo();

console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
