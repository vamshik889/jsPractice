let arr2 = [1,2,3,4,5];

arr2.forEach(function(element){
    if(element%2 ===0){
        console.log(element);
    }
}) ;

let mapPract = arr2.map(function(elemen){
return elemen*2;
});
console.log(mapPract);