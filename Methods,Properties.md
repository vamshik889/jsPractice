# 📜 String Methods & Properties
 ## Properties:
.length → Returns the length of the string.


# Methods (Most Common):
 ## Method	Description	Example
.toUpperCase()	Converts to uppercase	"hi".toUpperCase() → "HI"
.toLowerCase()	Converts to lowercase	"HELLO".toLowerCase() → "hello"
.trim()	Removes whitespace from both ends	" hi ".trim() → "hi"
.includes(str)	Checks if substring exists	"hello".includes("ell") → true
.startsWith(str)	Checks if string starts with substring	"hello".startsWith("he") → true
.endsWith(str)	Checks if string ends with substring	"hello".endsWith("llo") → true
.slice(start, end)	Extracts part of a string	"hello".slice(1, 3) → "el"
.split(separator)	Splits string into an array	"a,b,c".split(",") → ["a", "b", "c"]
.replace(old, new)	Replaces substring	"hi".replace("hi", "hey") → "hey"
.indexOf(str)	Returns first index of substring	"hello".indexOf("l") → 2
.charAt(index)	Returns character at index	"hello".charAt(1) → "e"

# __________________________________________________________________________

# 📦 Array Methods & Properties
 ## Properties:
.length → Returns the number of elements.

[1, 2, 3].length; // 3

# Methods (Most Common):
## Method	Description	Example
.push(item)	Adds item to end	[1, 2].push(3) → [1, 2, 3]
.pop()	Removes last item	[1, 2].pop() → 1 (returns removed item)
.shift()	Removes first item	[1, 2].shift() → 1
.unshift(item)	Adds item to start	[1, 2].unshift(0) → [0, 1, 2]
.concat(arr)	Merges arrays	[1].concat([2]) → [1, 2]
.join(separator)	Converts array to string	["a", "b"].join("-") → "a-b"
.slice(start, end)	Extracts sub-array	[1, 2, 3].slice(1, 2) → [2]
.splice(start, deleteCount, items)	Adds/removes elements	[1, 2].splice(1, 0, 99) → [1, 99, 2]
.indexOf(item)	Finds index of item	[1, 2].indexOf(2) → 1
.includes(item)	Checks if item exists	[1, 2].includes(3) → false
.find(callback)	Finds first matching item	[1, 2].find(x => x > 1) → 2
.filter(callback)	Filters matching items	[1, 2].filter(x => x > 1) → [2]
.map(callback)	Transforms each item	[1, 2].map(x => x * 2) → [2, 4]
.reduce(callback, initial)	Reduces to a single value	[1, 2].reduce((sum, x) => sum + x, 0) → 3
.sort()	Sorts array (modifies original)	[3, 1].sort() → [1, 3]
.reverse()	Reverses array	[1, 2].reverse() → [2, 1]



# 🛠 Object Methods & Properties
# Properties:
Access with obj.key or obj["key"].
const obj = { name: "Alice" };
obj.name; // "Alice"

# Methods (Most Common):
## Method	Description	Example
Object.keys(obj)	Returns keys as array	Object.keys({a: 1}) → ["a"]
Object.values(obj)	Returns values as array	Object.values({a: 1}) → [1]
Object.entries(obj)	Returns [key, value] pairs	Object.entries({a: 1}) → [["a", 1]]
obj.hasOwnProperty(key)	Checks if key exists	{a: 1}.hasOwnProperty("a") → true
Object.assign(target, ...sources)	Merges objects	Object.assign({a: 1}, {b: 2}) → {a: 1, b: 2}
Object.freeze(obj)	Prevents modifications	Object.freeze(obj) → obj cannot be changed


# 🔢 Number Methods & Properties
## Properties:
Number.MAX_SAFE_INTEGER → Largest safe integer (2^53 - 1).

Number.MIN_SAFE_INTEGER → Smallest safe integer (-(2^53 - 1)).

Methods (Most Common):
Method	Description	Example
.toFixed(digits)	Formats with fixed decimals	3.14159.toFixed(2) → "3.14"
.toString()	Converts to string	5.toString() → "5"
Number.isInteger(num)	Checks if integer	Number.isInteger(5.5) → false
Number.parseInt(str)	Parses string to integer	Number.parseInt("10") → 10
Number.parseFloat(str)	Parses string to float	Number.parseFloat("10.5") → 10.5


# 🔥 Bonus: ES6+ Helpers
## Arrays:

.flat(depth) → Flattens nested arrays.

.flatMap(callback) → Maps + flattens in one step.

# Objects:

Spread operator (...obj) → Merges objects.

const merged = {...obj1, ...obj2};

# Summary Table
Type	Key Methods
String	toUpperCase(), includes(), split(), slice()
Array	map(), filter(), reduce(), find(), flat()
Object	Object.keys(), Object.values(), hasOwnProperty()
Number	toFixed(), parseInt(), isInteger()
