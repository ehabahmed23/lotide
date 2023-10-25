# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ehabahmed23/lotide`

**Require it:**

`const _ = require('@ehabahmed23/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.head(array)`: Takes an array and returns the first element.
* `_.tail(array)`: Takes an array and returns all elements except the first.
* `_.middle(array)`: Takes an array and returns the 2 middle element if even and 1 if odd.
  `_.eqArrays(arr1, arr2)`: Takes 2 arrays and return true if they are the same and false if they are not.
  `_.assertArraysEqual(arr1,arr2)`: Used for testing and needs _.eqArrays to print a message if the 2 arrays are equal.
  `_.assertEqual(actual, excpected)`: takes in 2 variables to see if they are strictly equal(used for testing) and prints a message.
  `_.eqObjects(obj1, obj2)`: Takes in 2 objects and retuns true if they are strictly equal and false if not.
  `_.assertObjectsEqual(array)`: Used for testing and needs _.eqObjects to print a message if the 2 objects are equal.
  `_.countletters(array)`: takes in a string and counts how many of each letter was used and returns it in an object
  `_.countOnly(array, object)`: takes an array and an object. It will return an object containing counts of everything that the input object listed.
  `_.findKey(array)`: Which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
  `_.findKeyByValue(object, value)`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
  `_.letterPositions(string)`: Will return all the indices (zero-based positions) in the string where each character is found.
  `_.takeUntil(array, callback)`: Which will keep collecting items from a provided array until the callback provided returns a truthy value. 
  `_.without(array, itemsToRemove)`: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.