let str1="little bit hard";
let str2="little bit better";
//to group
console.log(str1+str2)
console.log(str1.concat("&&&",str2))

// for partitioning

console.log(str1.slice(4,10))
console.log(str1.substring(4,10))
console.log(str1.substr(4,10))

console.log(str1.replace('little','few'))
console.log(str1.toLowerCase())
console.log(str1.toUpperCase())
console.log(str1.length)

str1.trim()
str1.trimStart()
str1.trimEnd()

let amt='10'
amt=amt.padEnd(5,'0')
amt=amt.padStart(7,'1')
console.log(amt)

console.log(str1[0])
console.log(str1.charAt(0))
console.log(str1.indexOf('e'))
console.log(str1.lastIndexOf('t'))


console.log(str1.search('not'))
console.log(str1.search('bit'))
console.log(str1.includes('not'))
console.log(str1.includes('bit'))