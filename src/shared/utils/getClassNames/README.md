# getClassNames

A getClassNames function that takes a mandatory first parameter of type __"string"__,  
a non-mandatory second parameter of type __"object{}"__, and a non-mandatory third  
parameter of type __"string[]"__

Example:
const someClassNames = classNames('one', {active: true}, ['two', 'three']);
console.log(someClassNames); // 'one active two three'
