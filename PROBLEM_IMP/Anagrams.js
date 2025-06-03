// str1 : "listen" , str2: "silent" return true

function isAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false
    }
  const obj = {};

  for (let char of str1) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }

  for(let letter of str2){
    if(!obj[letter]){
        return false
    }
    obj[letter] = obj[letter]-1
  }
  return true
}

const res = isAnagram("silent","listen");
console.log(res)