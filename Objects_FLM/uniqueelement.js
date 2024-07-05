//Find unique elements in an array using object

//Step1) finding the elements count in form of key value pair

let arr = ["luffy","witcher","abc","mark","luffy", "mark", "witcher","apple"];
let obj ={};
for(let i = 0; i<arr.length;i++){
    
    if(obj[arr[i]] == undefined){  //here dot notation wont work so we are using square bracket notation
        obj[arr[i]] = 1
    }
    else{
        obj[arr[i]]++;
    }
}
console.log(obj)  //object output : { luffy: 2, witcher: 2, abc: 1, mark: 2, apple: 1 }

//step2)Finding the unique elements which has the value of 1

for(let j in obj){
    if(obj[j] == 1){
        console.log(j);
    }
}
